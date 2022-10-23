import React from "react";
import StyleInjector, { hoverImageStyles } from "./styles";


export default function HoverImage({
  src,
  alt,
  style,
  className
}) {

  return (
    <>
      <StyleInjector
        name="__react_custom_product__hover_image"
        css={hoverImageStyles()}
      />
      <div
        className="__react_custom_product__hover_image__container"
        style={{
          overflow: 'hidden',
          ...style,
        }}
      >
        <img alt={alt}
          className={className}
          style={{
            width: '100%',
            height: '100%',
            transition: 'transform 0.8s, -webkit-transform 0.8s',
          }}
          src={src} />
      </div>
    </>
  );
}