import React, { CSSProperties, ReactElement } from "react";
import StyleInjector, { productHotspotStyles } from "./styles";

type ProductHotspotPoint = {
  x: string;
  y: string;
  children: ReactElement<any>
}    

type ProductHotspotProps = {
  src: string;
  spots?: ProductHotspotPoint[];
  alt?: string;
  width?: string;
  height?: string;
  css?: CSSProperties;
};

export default function ProductHotspot({
  src,
  spots = [],
  width = '100%',
  height = '100%',
  alt = '',
  css,
}: ProductHotspotProps) {

  return (
    <div style={{ position:'relative', height: 'fit-content' }}>
      <StyleInjector
        name="__react_custom_product__hotspot"
        css={productHotspotStyles()}
      />
      {
        spots.map((spot, index) => <div key={index} style={{ left: spot.x, top: spot.y, ...css }} className="__react_custom_product__hotspot_point_container">
          <div className="__react_custom_product__hotspot_point"></div>
          <div className="__react_custom_product__hotspot_message" >
            {spot.children}
          </div>
        </div>)
      }

      <img alt={alt}
        style={{
          maxWidth: width,
          height,
        }}
        src={src} />
    </div>
  );
}