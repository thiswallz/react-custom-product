import React, { CSSProperties, useEffect, useState } from "react";

type SwitchProps = {
  src: string;
  css?: CSSProperties;
  width?: string;
  height?: string;
  duration?: string;
}

export default function Switch({
  src,
  css,
  width = '100%',
  height = '100%',
  duration = '1'
}: SwitchProps) {
  const [coverOpacity, setCoverOpacity] = useState(width);
  const [transition, setTransition] = useState("none 0s ease 0s");

  const [image, setImage] = useState('');
  const [cover, setCover] = useState('');


  useEffect(() => {
    setTransition(`opacity ${duration}s`);

    setCoverOpacity("0");
    setImage(src);

    setTimeout(() => {
      setTransition("none 0s ease 0s");
      setCoverOpacity("1");
      setCover(src)
      setImage('');
    }, parseFloat(duration) * 1000);
  }, [src])

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
          backgroundSize: `${width} ${height}`,
          transition,
          opacity: coverOpacity,
          animation: 'switchOut 1.3s',
          zIndex: 10
        }}
      ></div>}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          backgroundImage: `url('${image}')`,
          width,
          height,
          backgroundSize: `${width} ${height}`,
        }}
      ></div>
    </div>
  );
}
