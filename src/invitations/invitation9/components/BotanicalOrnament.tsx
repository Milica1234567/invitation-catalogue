type BotanicalOrnamentProps = {
  src: string;
  className?: string;
  mirrored?: boolean;
};

function BotanicalOrnament({ src, className = "", mirrored = false }: BotanicalOrnamentProps) {
  return (
    <img
      className={`i9-ornament ${mirrored ? "i9-ornament--mirrored" : ""} ${className}`}
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
    />
  );
}

export default BotanicalOrnament;
