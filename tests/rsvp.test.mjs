import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { test } from 'node:test';
const require = createRequire(import.meta.url);
const ts = require('typescript');
function load(file, dependencies = {}) {
  const exports = {};
  const code = ts.transpileModule(readFileSync(new URL(file, import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInThisContext(`(function(require,exports){${code}\n})`)(name => dependencies[name], exports);
  return exports;
}
const service = load('../src/rsvp/submitRsvp.ts');
const config = { endpoint: 'https://script.google.com/macros/s/test/exec' };
const payload = () => ({ fullName: ' Guest Name ', attending: true, attendeeCount: 2, note: '', submissionId: service.createSubmissionId() });

test('validation rejects invalid input and normalizes declines', () => {
  for (const changes of [{ fullName: '  ' }, { fullName: 'x'.repeat(121) }, { attending: 'yes' }, { attendeeCount: 0 }, { attendeeCount: 1.5 }, { attendeeCount: 6 }, { note: 'x'.repeat(2001) }, { submissionId: '' }]) {
    assert.throws(() => service.validateRsvp({ ...payload(), ...changes }));
  }
  const result = service.validateRsvp({ ...payload(), attending: false, attendeeCount: 4 });
  assert.equal(result.attendeeCount, 0);
  assert.equal(result.fullName, 'Guest Name');
  assert.notEqual(service.createSubmissionId(), service.createSubmissionId());
});

test('transport uses plain-text POST and never confirms opaque responses', async () => {
  const original = globalThis.fetch;
  try {
    let request;
    globalThis.fetch = async (url, options) => { request = { url, ...options }; return { type: 'opaque', status: 0 }; };
    const input = payload();
    assert.equal(await service.submitRsvp(config, input), 'unverified');
    assert.equal(request.mode, 'no-cors');
    assert.equal(request.method, 'POST');
    assert.equal(request.headers['Content-Type'], 'text/plain;charset=UTF-8');
    assert.deepEqual(Object.keys(JSON.parse(request.body)).sort(), ['attendeeCount', 'attending', 'fullName', 'note', 'submissionId']);
    for (const body of [{}, { ok: true }, { ok: true, submissionId: 'wrong' }, { ok: false, submissionId: input.submissionId }]) {
      globalThis.fetch = async () => ({ type: 'cors', ok: true, json: async () => body });
      await assert.rejects(service.submitRsvp({ ...config, mode: 'cors' }, input));
    }
    globalThis.fetch = async () => ({ type: 'cors', ok: true, json: async () => ({ ok: true, submissionId: input.submissionId }) });
    assert.equal(await service.submitRsvp({ ...config, mode: 'cors' }, input), 'confirmed');
    globalThis.fetch = async () => ({ type: 'cors', ok: false });
    await assert.rejects(service.submitRsvp(config, input));
    globalThis.fetch = async () => { throw new TypeError('offline'); };
    await assert.rejects(service.submitRsvp(config, input));
    await assert.rejects(service.submitRsvp({ endpoint: '' }, input));
    await assert.rejects(service.submitRsvp({ endpoint: 'http://example.com' }, input));
  } finally { globalThis.fetch = original; }
});

test('form blocks concurrent sends, keeps IDs on retry and requires acknowledgement', async () => {
  const originalFormData = globalThis.FormData;
  globalThis.FormData = class { constructor(form) { this.fields = form.fields; } get(key) { return this.fields[key] ?? null; } };
  try {
    const states = [];
    const refs = [];
    let stateIndex = 0, refIndex = 0;
    const requests = [];
    let finish;
    const hook = load('../src/rsvp/useRsvp.ts', {
      react: {
        useState(initial) { const i = stateIndex++; if (!(i in states)) states[i] = initial; return [states[i], value => { states[i] = value; }]; },
        useRef(initial) { const i = refIndex++; return refs[i] ??= { current: initial }; },
      },
      './config': { rsvpConfig: { invitation1: config } },
      './submitRsvp': { ...service, submitRsvp: async (_, input) => { requests.push(input); return new Promise(resolve => { finish = resolve; }); } },
    });
    const render = () => { stateIndex = refIndex = 0; return hook.useRsvp('invitation1'); };
    const form = { reportValidity: () => true, fields: { name: 'Guest Name', attendance: 'no', guests: '4', message: '' } };
    const event = { preventDefault() {}, currentTarget: form };
    let ui = render();
    const pending = ui.submit(event);
    await ui.submit(event);
    assert.equal(requests.length, 1);
    assert.equal(render().status, 'loading');
    assert.equal(requests[0].attendeeCount, 0);
    finish('unverified'); await pending;
    assert.equal(render().status, 'unverified');
    assert.equal(render().submitted, false);
    const retry = render().submit(event);
    assert.equal(requests[1].submissionId, requests[0].submissionId);
    finish('confirmed'); await retry;
    assert.equal(render().submitted, true);
    await render().submit(event);
    assert.equal(requests.length, 2);
    form.fields.message = 'Changed';
    const changed = render().submit(event);
    assert.notEqual(requests[2].submissionId, requests[0].submissionId);
    finish('unverified'); await changed;
  } finally { globalThis.FormData = originalFormData; }
});
