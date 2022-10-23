import React from "react";
import StyleInjector, { customBackgroundStyles } from "./styles";

export default function CustomBackground({
  width,
  height,
  src,
  bg,
}) {

  return (
    <>
      <StyleInjector
        name="__react_custom_product__custom_background"
        css={customBackgroundStyles()}
      />

      {
        src && <div
          className="__react_custom_product__custom_background__container"
          style={{
            width,
            height,
            position: 'relative'
          }}>
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              backgroundImage: `url('${src}')`,
              width,
              height,
              backgroundSize: 'cover',
              zIndex: 10
            }}
          ></div>
          <div
          className="__react_custom_product__custom_background__bg"
            style={{
              position: 'absolute',
              transition: 'opacity 1s',
              left: 0,
              top: 0,
              backgroundImage: `url('${bg}')`,
              width,
              height,
              backgroundSize: `${width} ${height}`,
            }}
          ></div>
        </div>
      }
    </>

  );
}
