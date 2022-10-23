import React from "react";

export default function CustomCover({
  width,
  height,
  src,
  cover,
  horizontal = 100,
  vertical = 100,
}) {

  return (
    src && <div
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
          width: `${horizontal}%`,
          height: `${vertical}%`,
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
