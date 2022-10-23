import React, { CSSProperties } from "react";
import StyleInjector, { hoverImageStyles } from "./styles";

type HoverImageProps = {
  src: string;
  alt: string;
  className: string;
  style: CSSProperties;
};



export default function HoverImage({
  src,
  alt,
  style,
  className
}: HoverImageProps) {

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