import React, { CSSProperties, useEffect, useState } from "react";

type CustomColorProps = {
  src: string;
  css?: CSSProperties;
  width?: string;
  height?: string;
  duration?: string;
}

export default function CustomColor({
  src,
  css = {},
  width = '100%',
  height = '100%',
  duration = '.6'
}: CustomColorProps) {
  const [coverWidth, setCoverWidth] = useState(width);
  const [transition, setTransition] = useState("none 0s ease 0s");

  const [image, setImage] = useState('');
  const [cover, setCover] = useState('');

  useEffect(() => {
    setTransition(`width ${duration}s ease-in-out 0s`);

    setImage(src)
    setCoverWidth("0px");

    setTimeout(() => {
      setTransition("none 0s ease 0s");
      setCoverWidth(width);
      setCover(src)
      setImage('')
    }, parseFloat(duration) * 1000);
  }, [src])

  return (
    <>
      <div
        style={{
          width,
          height,
          position: 'relative',
          overflow: 'hidden',
          ...css
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
            transition,
            zIndex: 10,
            backgroundSize: `${width} ${height}`,
            backgroundRepeat: 'no-repeat',
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
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </>

  );
}
