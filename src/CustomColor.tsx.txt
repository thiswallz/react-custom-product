import React, { useEffect, useState } from "react";

export default function CustomColor({
  width,
  height,
  src,
  duration = '.8'
}) {
  const [coverWidth, setCoverWidth] = useState(width);
  const [transition, setTransition] = useState("none 0s ease 0s");

  const [image, setImage] = useState(null);
  const [cover, setCover] = useState(null);

  useEffect(() => {
    setTransition(`width ${duration}s ease-in-out 0s`);

    setImage(src)
    setCoverWidth("0px");

    setTimeout(() => {
      setTransition("none 0s ease 0s");
      setCoverWidth(width);
      setCover(src)
    }, parseFloat(duration) * 1000);
  }, [src])

  return (
    image && <div
      style={{
        width,
        height,
        position: 'relative'
      }}
    >
      {cover && <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          backgroundImage: `url('${cover}')`,
          width: coverWidth,
          height,
          backgroundSize: `${width} ${height}`,
          transition,
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
