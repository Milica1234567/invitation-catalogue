import type { ImgHTMLAttributes } from "react";

export function WatercolorImage({ className = "", ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} className={className} onError={(event) => { event.currentTarget.hidden = true; }} />;
}
