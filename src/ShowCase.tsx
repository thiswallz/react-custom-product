import React, { CSSProperties, useState } from "react";
import { throttleLast } from './utils'

type ShowCaseProps = {
  images: string[];
  bg?: string;
  width?: string;
  height?: string;
  direction?: 'natural' | 'oposite';
  initialImage?: number;
  css?: CSSProperties;
  throttle?: number;
  pxThreshold?: number;
}

export default function ShowCase({
  images,
  css = {},
  width = '100%',
  height = '100%',
  bg = "",
  direction = 'natural',
  initialImage = 0,
  throttle = .04,
  pxThreshold = 4,
}: ShowCaseProps) {

  const [isDragging, setIsDragging] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [currentImage, setCurrentImage] = useState(Number(initialImage));

  function handleMoveLeft() {
    const nextImagePosition = images[currentImage - 1] ? currentImage - 1 : images.length - 1
    setCurrentImage(nextImagePosition)
  }

  function handleMoveRight() {
    const nextImagePosition = images[currentImage + 1] ? currentImage + 1 : 0
    setCurrentImage(nextImagePosition)
  }

  function handleDown(e: any) {
    e.cancelable && e.preventDefault();
    setIsDragging(true)
  }

  function handleUp(e: any) {
    e.cancelable && e.preventDefault();
    setIsDragging(false)
  }


  function handleSetClientX(e: any) {
    if (!isDragging) {
      return
    }
    const nextClientX = e.clientX ? e.clientX : e.targetTouches[0]?.clientX

    if ((nextClientX + Number(pxThreshold)) < clientX) {
      handleMoveLeft()
    } else if ((nextClientX - Number(pxThreshold)) > clientX) {
      handleMoveRight()
    }

    setClientX(nextClientX)
  }

  function handleMove(e: any) {
    if (!isDragging) {
      return
    }
    e.cancelable && e.preventDefault();

    throttleLast(() => { handleSetClientX(e) }, Number(throttle) * 1000)
  }

  return (
    images && <div
      style={{
        userSelect: 'none',
        width,
        height,
        position: 'relative',
        ...css
      }}
    >
      <div
        onTouchStart={handleDown}
        onMouseDown={handleDown}
        onTouchEnd={handleUp}
        onMouseUp={handleUp}
        onTouchMove={handleMove}
        onMouseMove={handleMove}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        {
          images.map((image, index) => <div
            key={index}
            style={{
              position: 'absolute',
              opacity: index === currentImage ? 1 : 0,
              left: 0,
              top: 0,
              backgroundImage: `url('${image}')`,
              width,
              height,
              zIndex: 10,
              backgroundRepeat:'no-repeat',
              backgroundSize:'contain',
              backgroundPosition:'center'
            }}
          ></div>
          )
        }
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundImage: `url('${bg}')`,
            width,
            height,
            backgroundSize: `${width} ${height}`,
          }}
        ></div>
      </div>

    </div>
  );
}
