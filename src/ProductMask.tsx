import React, { CSSProperties, ReactElement } from "react";


type ProductMaskProps = {
  src: string;
  css?: CSSProperties;
  polygon?: ReactElement;
  alt?: string;
  type?: string;
}

export default function ProductMask({
  src,
  css,
  polygon,
  alt = '',
  type = "1"
}: ProductMaskProps) {

  return (
    <svg
      height="100%"
      viewBox="0 0 24 11" xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      style={css}>
      <defs>
        <clipPath id="clip-polygon--1"><polygon points=" 8 0, 8.1 0, 8.1 11, 0 11"></polygon> <rect x="8" y="0" width="8" height="11"></rect> <polygon points="15.9 0, 24 0, 16 11, 15.9 11"></polygon> </clipPath>
        <clipPath id="clip-polygon--2"><polygon points=" 8 0, 8.1 0, 8.1 11, 0 11"></polygon><rect x="8" y="0" width="14.2" height="11"></rect><polygon points="22.1 0, 30.2 0, 22.2 11, 22.1 11"></polygon></clipPath>
        {polygon}
      </defs>
      <g clipPath={`url(#clip-polygon--${type})`}>
        <image src={src} href={src} alt={alt} width="100%" height="100%" x="0%" y="0%"></image>
      </g>
    </svg>
  );
}
