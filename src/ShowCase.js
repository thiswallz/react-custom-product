import React, { useState } from "react";
import { throttle } from './utils'

export default function ShowCase({
  width,
  height,
  images = [],
  bg = "",
  initialImage = 0,
  throttleMs = 100,
  rangeThreshold = 10,
  rangeTouchThreshold = 2
}) {

  const [isDragging, setIsDragging] = useState(null);
  const [clientX, setClientX] = useState(null);
  const [currentImage, setCurrentImage] = useState(initialImage);
  const [lastImage, setLastImage] = useState(initialImage);


  function handleMoveLeft() {
    const nextImagePosition = images[currentImage - 1] ? currentImage - 1 : images.length - 1
    setCurrentImage(nextImagePosition)
  }

  function handleMoveRight() {
    const nextImagePosition = images[currentImage + 1] ? currentImage + 1 : 0
    setCurrentImage(nextImagePosition)
  }

  function handleDown(e) {
    e.cancelable && e.preventDefault();
    setIsDragging(true)
  }

  function handleUp(e) {
    e.cancelable && e.preventDefault();
    setIsDragging(false)
  }

  function handleSetClientX(nextClientX, hasTouches) {
    if (!isDragging) {
      return
    }

    const range = hasTouches ? rangeTouchThreshold : rangeThreshold

    if ((nextClientX + range) < clientX) {
      handleMoveLeft()
    } else if ((nextClientX - range) > clientX) {
      handleMoveRight()
    }

    setTimeout(() => {
      setLastImage(currentImage)
    }, throttleMs)

    setClientX(nextClientX)
  }

  const throttledSetClientX = throttle(handleSetClientX, throttleMs)

  function handleMove(e) {
    if (!isDragging) {
      return
    }
    e.cancelable && e.preventDefault();

    const nextClientX = e.clientX ? e.clientX : e.targetTouches[0]?.clientX

    throttledSetClientX(nextClientX, !!e.targetTouches)
  }

  return (
    images && <div
      style={{
        userSelect: 'none',
        width,
        height,
        position: 'relative'
      }}
    >
      currentImage {currentImage}
      <div
        onTouchStart={handleDown}
        onMouseDown={handleDown}
        onTouchEnd={handleUp}
        onMouseUp={handleUp}
        onTouchMove={handleMove}
        onMouseMove={handleMove}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          ":active": {
            cursor: 'grabbing',
            cursor: '-moz-grabbing',
            cursor: '-webkit-grabbing'
          },
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundImage: `url('${images[currentImage]}')`,
            width,
            height,
            backgroundSize: `${width} ${height}`,
            zIndex: 10
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundImage: `url('${images[lastImage]}')`,
            width,
            height,
            backgroundSize: `${width} ${height}`,
            zIndex: 1
          }}
        ></div>
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
