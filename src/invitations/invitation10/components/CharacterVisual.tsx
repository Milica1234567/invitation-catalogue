type CharacterVisualProps = { side: "huntrix" | "dragon"; src: string; label: string };

function CharacterVisual({ side, src, label }: CharacterVisualProps) {
  return src ? <img className={`i10-character i10-character--${side}`} src={src} alt={label} /> : <div className={`i10-character-fallback i10-character-fallback--${side}`} aria-hidden="true"><span /><i /><b /></div>;
}
export default CharacterVisual;
