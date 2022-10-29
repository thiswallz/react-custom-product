import React, { CSSProperties, useEffect, useState } from "react";
import { loadImage } from "./utils";

type ProductSwitchProps = {
  src: string;
  css?: CSSProperties;
  cssImage?: CSSProperties;
  width?: string;
  height?: string;
  duration?: string;
}

export default function ProductSwitch({
  src,
  css,
  cssImage,
  width = '100%',
  height = '100%',
  duration = '.5'
}: ProductSwitchProps) {
  const [coverOpacity, setCoverOpacity] = useState(width);
  const [transition, setTransition] = useState("none 0s ease 0s");

  const [image, setImage] = useState('');
  const [cover, setCover] = useState('');

  useEffect(() => {
    setTransition(`opacity ${duration}s`);

    loadImage(src).then(() => {
      setCoverOpacity("0");
      setImage(src);
      handleTransition()
    });
  }, [src])

  function handleTransition() { 
    setTimeout(() => {
      setTransition("none 0s ease 0s");
      setCoverOpacity("1");
      setCover(src)
      setImage('');
    }, parseFloat(duration) * 1000);
  }

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        ...css
      }}
    >
      {cover && <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          backgroundImage: `url('${cover}')`,
          width,
          height,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${width} ${height}`,
          transition,
          opacity: coverOpacity,
          animation: 'switchOut 1.3s',
          zIndex: 10,
          ...cssImage
        }}
      ></div>}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          backgroundImage: `url('${image}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${width} ${height}`,
          width,
          height,
          ...cssImage
        }}
      ></div>
    </div>
  );
}
