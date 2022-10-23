import React, { useEffect, useState } from "react";

export default function CustomSwitch({
  width,
  height,
  style,
  className,
  src,
  duration = '1'
}) {
  const [coverOpacity, setCoverOpacity] = useState(width);
  const [transition, setTransition] = useState("none 0s ease 0s");

  const [image, setImage] = useState(null);
  const [cover, setCover] = useState(null);

  useEffect(() => {
    setTransition(`opacity ${duration}s`);

    setImage(src)
    setCoverOpacity("0");

    setTimeout(() => {
      setTransition("none 0s ease 0s");
      setCoverOpacity("1");
      setCover(src)
    }, parseFloat(duration) * 1000);
  }, [src])

  return (
    image && <div
      style={{
        width,
        height,
        position: 'relative',
        ...style
      }}
      className={className}
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
