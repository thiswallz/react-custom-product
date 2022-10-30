import { Component } from "react";

function appendStyle(id: string, css: string) {
  if (!document.head.querySelector("#" + id)) {
    const node = document.createElement("style");
    node.textContent = css;
    node.type = "text/css";
    node.id = id;

    document.head.appendChild(node);
  }
}

type StyleInjectorProps = {
  name: string;
  css: string;
};


export default class StyleInjector extends Component<StyleInjectorProps> {
  componentDidMount() {
    appendStyle(this.props.name, this.props.css);
  }

  componentWillUnmount() {
    const node = document.getElementById(this.props.name) as HTMLElement;
    node?.parentNode?.removeChild(node);
  }

  render() {
    return null;
  }
}

export const hoverImageStyles = () => `
  .__react_custom_product__hover_image__container img{
    transform: scale(1);
    opacity: 1;
  }
  .__react_custom_product__hover_image__container:hover img{
    transform: scale(1.05);
    opacity: .9;
  }
`;

export const customBackgroundStyles = () => `
  .__react_custom_product__custom_background__container .__react_custom_product__custom_background__bg{
    opacity: 0;
  }
  .__react_custom_product__custom_background__container:hover .__react_custom_product__custom_background__bg{
    opacity: 1;
  }
`;

export const productHotspotStyles = () => `
  .__react_custom_product__hotspot_point {
    opacity: 1;
    visibility: visible;
    transition: border-color 250ms ease-in-out,opacity 250ms ease-in-out,visibility 250ms ease-in-out;
    padding: 0;
    width: 1.6rem;
    height: 1.6rem;
    border: 2px solid transparent;
    background: rgba(0,0,0,.2);
    border-radius: 64px;
    line-height: .5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .__react_custom_product__hotspot_point_container {
    position: absolute;
  }

  .__react_custom_product__hotspot_point_container:hover .__react_custom_product__hotspot_point {
    border: 2px solid rgba(255,255,255,.5);
  }

  .__react_custom_product__hotspot_point_container:hover .__react_custom_product__hotspot_point::after {
    transform: scale(0.667);
  }

  .__react_custom_product__hotspot_message {
    transition: opacity 250ms linear;
    opacity:0;
    width: 0;
    height: 0;
    z-index: 90000;
  }

  .__react_custom_product__hotspot_point_container:hover .__react_custom_product__hotspot_message {
    opacity:1;
    width: 100%;
    height: 100%;
  }

  .__react_custom_product__hotspot_point::after {
    content: "";
    transition: transform 250ms ease-in-out;
    position: relative;
    display: block;
    background: #fff;
    box-shadow: 0 1px 4px rgb(0 0 0 / 55%);
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 64px;
  }
`;


