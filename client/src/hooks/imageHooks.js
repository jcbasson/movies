import { useState, useEffect } from "react";

export const useLQIPImage = (lowQualityImgSrc, highQualityImgSrc) => {
  const [src, setSrc] = useState(lowQualityImgSrc);

  useEffect(() => {
    let img = new Image();
    img.src = highQualityImgSrc;
    img.onload = function() {
      setSrc(highQualityImgSrc);
    };
    return () => {
      img = null;
    };
  }, []);

  return [src];
};
