import React, { useEffect, useState } from "react";
import CustomSwitch from "./CustomSwitch";

export default function AutoSwitchGallery({
  images,
  width,
  height,
  className,
  style,
  ms = 1500 
}) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(nextImagePosition => nextImagePosition + 1);
    }, ms);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if(!images[currentImage + 1]){
      setCurrentImage(0)
    }
  }, [currentImage]);
  
  return (
    <>
      <CustomSwitch
        className={className}
        style={style}
        width={width}
        height={height}
        src={images[currentImage]}
      />
    </>
  );
}