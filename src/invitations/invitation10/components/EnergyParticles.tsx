function EnergyParticles() {
  return <div className="i10-particles" aria-hidden="true">{Array.from({ length: 24 }, (_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}</div>;
}
export default EnergyParticles;
