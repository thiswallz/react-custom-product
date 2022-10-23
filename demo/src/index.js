import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import pkg from "../../package.json"

import { CustomColor, CustomCover, CustomSwitch, ShowCase, CustomBackground,
  MaskedImage, HoverImage, AutoSwitchGallery, SwitchGallery } from "../../src";

const Demo = () => {
  const [demo1Car, setDemo1Car] = useState("/customColor/cars/white.jpeg");
  const [demo2TShirt, setDemo2TShirt] = useState("/customColor/people/tshirt-red.jpg");
  const [demoInterior, setDemoInterior] = useState("/customColor/interior/black.jpeg");
  const [demoCover, setDemoCover] = useState("50");
  const [demoCoverVertical, setDemoCoverVertical] = useState("50");
  const [demoSwitch, setDemoSwitch] = useState("/models/model-s.jpeg");

  // it generates showcase images
  const showCaseImages = Array.from(Array(25).keys()).map(v=>
    `/3d/${v + 1}.webp`)


  return (
    <div>
      <h1>Demo of react-custom-product@{pkg.version}</h1>

      <h1>Custom Colors </h1>
      <ul>
        <li>For a great exp, must be exact image, but different color.</li>
        <li>Works good not just for color changes.</li>
        <li>Buttons are not included you can choose whatever you want to change the image.</li>
      </ul>
      Implementation is pretty streight forward
      e.g.
      <pre>
        <code>
          &lt;CustomColor
          width="1400px"
          height="750px"
          src={demo1Car}
          /&gt;
        </code>
      </pre>
      <h2>#1 Car Color </h2>
      <div className="demo-container">
        <CustomColor
          width="1400px"
          height="750px"
          src={demo1Car}
        />
        <div className="select-colors">
          <a onClick={() => setDemo1Car("/customColor/cars/white.jpeg")}>
            <img src="/customColor/buttons/Paint_White.avif" />
          </a>
          <a onClick={() => setDemo1Car("/customColor/cars/red.jpeg")}>
            <img src="/customColor/buttons/Paint_Red.avif" />
          </a>
          <a onClick={() => setDemo1Car("/customColor/cars/blue.jpeg")}>
            <img src="/customColor/buttons/Paint_Blue.avif" />
          </a>
        </div>
      </div>

      <h2>#3 3D </h2>
      <div className="demo-container">
        <ShowCase
          width="1000px"
          height="450px"
          images={showCaseImages}
          bg="/3d/bg.webp"
        />
        <div className="select-colors">
      
        </div>
      </div>


      <h2>#2 Car Interior - Faster animation </h2>
      <div className="demo-container">
        <CustomColor
          width="1400px"
          height="750px"
          duration=".4"
          src={demoInterior}
        />
        <div className="select-colors">
          <a onClick={() => setDemoInterior("/customColor/interior/black.jpeg")}>
            <img src="/customColor/buttons/Paint_Black.avif" />
          </a>
          <a onClick={() => setDemoInterior("/customColor/interior/white.jpeg")}>
            <img src="/customColor/buttons/Paint_White.avif" />
          </a>
        </div>
      </div>
      <h2>#1 Uncover usage </h2>
      <div className="demo-container">
        <CustomCover
          width="1400px"
          height="750px"
          horizontal={demoCover}
          vertical={demoCoverVertical}
          src="/customColor/cars/blue.jpeg"
          cover="/customColor/cars/red.jpeg"
        />
        <div className="actions">
          <div>
            {demoCover}%
            <input
              type="range"
              min="1"
              max="100"
              value={demoCover}
              onChange={e => setDemoCover(e.target.value)} />
          </div>

          <div>
            
            <input
              style={{
                appearance: 'slider-vertical'
              }}
              type="range"
              min="1"
              max="100"
              value={demoCoverVertical}
              onChange={e => setDemoCoverVertical(e.target.value)} />
              {demoCoverVertical}%
          </div>

        </div>
      </div>
      <h2>#3 Custom Switch </h2>
      <div className="demo-container">
        <CustomSwitch
          width="1400px"
          height="750px"
          src={demoSwitch}
        />
        <div className="select-colors">
          <button onClick={() => setDemoSwitch("/models/model-s.jpeg")}>Model S</button>
          <button onClick={() => setDemoSwitch("/models/model-x.jpeg")}>Model X</button>
        </div>
      </div>

      <div className="demo-container">
        <CustomBackground
          width="1200px"
          height="450px"
          src="/bg/auto.webp"
          bg="/bg/bg1.jpeg"
          type="hover"
        />
        <div className="select-colors">
        </div>
      </div>
      
      <div className="demo-container">
        <MaskedImage
          style={{
            width:"800px",
            height:"100%",
          }}
          src="/masked/auto.webp"
        />
         <MaskedImage
          style={{
            width:"800px",
            height:"100%",
          }}
          src="/masked/auto.webp"
          type="2"
        />
        <div className="select-colors">
        </div>
      </div>


      <div className="demo-container">
        <HoverImage
          style={{
            width:"400px",
            height:"100%",
          }}
          src="/hover/auto.webp"
        />
       
        <div className="select-colors">
        </div>
      </div>
      AUTO SwitchGallery
      <div className="demo-container">
        <AutoSwitchGallery
          width="1400px"
          height="750px"
          images={showCaseImages}
        />
       
        <div className="select-colors">
        </div>
      </div>  

      SwitchGallery
      <div className="demo-container"
                style={{
                  width:"800px",
                  height:"400px",
                }}
      >
        <SwitchGallery
          className="switch-gallery"
          images={showCaseImages}
        />
       
        <div className="select-colors">
        </div>
      </div>  

      
      

      <h2>#3 TShirt Example (faster) </h2>
      <div className="demo-container">
        <CustomColor
          width="300px"
          height="400px"
          src={demo2TShirt}
          duration=".2"
        />
        <div className="select-colors">
          <button onClick={() => setDemo2TShirt("/customColor/people/tshirt-red.jpg")}>Red</button>
          <button onClick={() => setDemo2TShirt("/customColor/people/tshirt-gray.jpg")}>Gray</button>
        </div>
      </div>

      <h2>Further info</h2>

      <p>
        <a href="https://github.com/thiswallz/react-custom-product">Github</a>
      </p>
    </div>
  )
};

// @ts-ignore
const root = createRoot(document.querySelector("#demo"));
root.render(<Demo />);
