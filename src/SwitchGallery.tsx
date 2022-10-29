import React, { CSSProperties, useRef, useState } from "react";
import ProductSwitch from "./ProductSwitch";

type SwitchGalleryProps = {
  images: string[];
  css?: CSSProperties;
  cssImage?: CSSProperties;
  cssImageSelectorContainer?: CSSProperties;
  cssImageSelector?: CSSProperties;
}

export default function SwitchGallery({
  images,
  cssImage,
  cssImageSelectorContainer,
  cssImageSelector,
  css,
}: SwitchGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const imgsRef = useRef<HTMLElement[]>([]);
  const imgContainerRef = useRef<HTMLDivElement>(null);

  function handleClick(_e: React.MouseEvent<HTMLElement>, index: number) {
    if (imgContainerRef.current) {
      imgContainerRef.current.scrollTo({
        behavior: "smooth",
        left: imgsRef.current[index].offsetLeft
      })
      setCurrentImage(index)
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        width: "100%",
        height: "100%",
        ...css
      }}
    >
      {images[currentImage] && <ProductSwitch
        width="100%"
        height="100%"
        cssImage={cssImage}
        src={images[currentImage]}
      />}
      <div
        ref={imgContainerRef}
        style={{
          position: 'absolute',
          display: 'flex',
          width: '100%',
          overflowX: 'auto',
          bottom: 0,
          zIndex: 10,
          ...cssImageSelectorContainer
        }}>
        {
          images.map((image, i) => (image && <img
            key={i}
            ref={(el: HTMLImageElement) => imgsRef.current[i] = el}
            onClick={(e) => handleClick(e, i)}
            style={{
              position: 'relative',
              cursor: 'pointer',
              ...cssImageSelector
            }}
            width="100px"
            src={image}
          />))
        }
      </div>
    </div>
  );
}