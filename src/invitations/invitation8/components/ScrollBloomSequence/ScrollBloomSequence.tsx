import { useLayoutEffect, useRef } from "react";
import type { CSSProperties, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import firstFrame from "../../assets/bloom-sequence/bloom-001.webp";
import "./ScrollBloomSequence.css";

gsap.registerPlugin(ScrollTrigger);

const frameModules = import.meta.glob<string>(
  "../../assets/bloom-sequence/bloom-*.webp",
  { eager: true, query: "?url", import: "default" },
);

const frameUrls = Object.entries(frameModules)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath, undefined, { numeric: true }))
  .map(([, url]) => url);

export const scrollBloomSequenceConfig = {
  start: "top top",
  end: "bottom bottom",
  scale: 1,
  opacity: 0.72,
  desktopPositionX: 0.68,
  mobilePositionX: 0.5,
} as const;

type ScrollBloomSequenceProps = {
  scrollContainer: RefObject<HTMLElement | null>;
  start?: string;
  end?: string;
  scale?: number;
  opacity?: number;
  desktopPositionX?: number;
  mobilePositionX?: number;
};

function ScrollBloomSequence({
  scrollContainer,
  start = scrollBloomSequenceConfig.start,
  end = scrollBloomSequenceConfig.end,
  scale = scrollBloomSequenceConfig.scale,
  opacity = scrollBloomSequenceConfig.opacity,
  desktopPositionX = scrollBloomSequenceConfig.desktopPositionX,
  mobilePositionX = scrollBloomSequenceConfig.mobilePositionX,
}: ScrollBloomSequenceProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const posterRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const poster = posterRef.current;
    const trigger =
      scrollContainer.current ?? root?.closest<HTMLElement>(".invitation-eight") ?? null;

    if (!root || !canvas || !poster || !trigger) return;

    const context2d = canvas.getContext("2d", { alpha: false });
    if (!context2d) return;

    let active = true;
    let currentFrame = -1;
    let scrollTrigger: ScrollTrigger | undefined;
    const images: HTMLImageElement[] = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const getPositionX = () =>
      window.matchMedia("(max-width: 700px)").matches ? mobilePositionX : desktopPositionX;

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const drawFrame = (frameIndex: number, force = false) => {
      const image = images[frameIndex];
      if (!image?.complete || image.naturalWidth === 0) return;
      if (!force && frameIndex === currentFrame) return;

      currentFrame = frameIndex;
      const width = canvas.width;
      const height = canvas.height;
      const imageRatio = image.naturalWidth / image.naturalHeight;
      const canvasRatio = width / height;

      let drawWidth: number;
      let drawHeight: number;

      if (canvasRatio > imageRatio) {
        drawWidth = width * scale;
        drawHeight = drawWidth / imageRatio;
      } else {
        drawHeight = height * scale;
        drawWidth = drawHeight * imageRatio;
      }

      const drawX = (width - drawWidth) * getPositionX();
      const drawY = (height - drawHeight) / 2;

      context2d.clearRect(0, 0, width, height);
      context2d.drawImage(image, drawX, drawY, drawWidth, drawHeight);
      poster.classList.add("scroll-bloom-sequence__poster--hidden");
    };

    const handleResize = () => {
      resizeCanvas();
      drawFrame(Math.max(0, currentFrame), true);
      ScrollTrigger.refresh();
    };

    resizeCanvas();

    Promise.all(
      frameUrls.map(
        (url) =>
          new Promise<HTMLImageElement>((resolve, reject) => {
            const image = new Image();
            image.decoding = "async";
            image.onload = () => resolve(image);
            image.onerror = reject;
            image.src = url;
            images.push(image);
          }),
      ),
    )
      .then(async (loadedImages) => {
        if (!active) return;
        await Promise.allSettled(loadedImages.map((image) => image.decode()));
        if (!active) return;

        if (reducedMotion.matches) {
          drawFrame(0, true);
          return;
        }

        drawFrame(0, true);
        scrollTrigger = ScrollTrigger.create({
          trigger,
          start,
          end,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const frameIndex = Math.min(
              loadedImages.length - 1,
              Math.round(self.progress * (loadedImages.length - 1)),
            );
            drawFrame(frameIndex);
          },
        });
        drawFrame(Math.round(scrollTrigger.progress * (loadedImages.length - 1)), true);
        ScrollTrigger.refresh();
      })
      .catch(() => {
        poster.classList.remove("scroll-bloom-sequence__poster--hidden");
      });

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      active = false;
      scrollTrigger?.kill();
      window.removeEventListener("resize", handleResize);
      images.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, [scrollContainer, start, end, scale, desktopPositionX, mobilePositionX]);

  return (
    <div
      ref={rootRef}
      className="scroll-bloom-sequence"
      style={{ "--bloom-sequence-opacity": opacity } as CSSProperties}
      aria-hidden="true"
    >
      <img ref={posterRef} className="scroll-bloom-sequence__poster" src={firstFrame} alt="" />
      <canvas ref={canvasRef} className="scroll-bloom-sequence__canvas" />
    </div>
  );
}

export default ScrollBloomSequence;
