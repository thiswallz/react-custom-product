import React, { useRef, useState } from "react";
import CustomSwitch from "./CustomSwitch";

export default function SwitchGallery({
  images,
  className,
  style,
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const imgsRef = useRef([]);
  const imgContainerRef = useRef(null);

  function handleClick(e, index) {
    if (imgContainerRef.current) {
      imgContainerRef.current.scrollTo({
        behavior: "smooth",
        block: "end", inline: "nearest",
        left: imgsRef.current[index].offsetLeft
      })
      setCurrentImage(index)
    }
  }

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: "100%",
        height: "100%",
        ...style
      }}
    >
      <CustomSwitch
        width="100%"
        height="100%"
        src={images[currentImage]}
      />
      <div
        ref={imgContainerRef}
        style={{
          position: 'abnsolute',
          display: 'flex',
          width: '100%',
          overflowX: 'auto'
        }}>
        {
          images.map((image, i) => (<img
            key={i}
            ref={el => imgsRef.current[i] = el}
            onClick={(e) => handleClick(e, i)}
            style={{
              position: 'relative',
            }}
            width="100px"
            src={image}
          />))
        }
      </div>
    </div>
  );
}