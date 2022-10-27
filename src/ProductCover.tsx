import React, { CSSProperties } from "react";

type ProductCoverProps = {
  src: string;
  cover: string;
  css?: CSSProperties;
  width?: string;
  height?: string;
  coverWidth?: number;
  coverHeight?: number;
};

export default function ProductCover({
  src,
  cover,
  css,
  width = '100%',
  height = '100%',
  coverWidth = 100,
  coverHeight = 100,
}: ProductCoverProps) {

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        ...css,
      }}
    >
      {cover && <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          backgroundImage: `url('${cover}')`,
          width: `${coverWidth}%`,
          height: `${coverHeight}%`,
          backgroundSize: `${width} ${height}`,
          zIndex: 10
        }}
      ></div>}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          backgroundImage: `url('${src}')`,
          width,
          height,
          backgroundSize: `${width} ${height}`,
        }}
      ></div>
    </div>

  );
}
