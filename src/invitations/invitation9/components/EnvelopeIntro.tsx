import { useRef, useState } from "react";
import { invitation9Data as data } from "../invitation9Data";

type EnvelopeIntroProps = { onComplete: () => void };

function EnvelopeIntro({ onComplete }: EnvelopeIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<"welcome" | "playing" | "ending">("welcome");

  const finish = () => {
    setPhase("ending");
    window.setTimeout(onComplete, 850);
  };

  const openInvitation = async () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    setPhase("playing");
    try {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        await videoRef.current.play();
      }
    } catch {
      finish();
    }
  };

  return (
    <div className={`i9-envelope i9-envelope--${phase}`}>
      <video
        ref={videoRef}
        className="i9-envelope__video"
        src={data.assets.envelopeVideo}
        muted
        playsInline
        preload="auto"
        onEnded={finish}
      />
      <div className="i9-envelope__welcome">
        <span>{data.couple.monogram}</span>
        <p>Jedna ljubav. Jedna priča. Jedan poseban dan.</p>
        <button type="button" onClick={openInvitation}>Otvorite pozivnicu</button>
      </div>
      {phase === "playing" && (
        <button className="i9-envelope__skip" type="button" onClick={finish}>Preskoči</button>
      )}
      <div className="i9-envelope__fade" />
    </div>
  );
}

export default EnvelopeIntro;
