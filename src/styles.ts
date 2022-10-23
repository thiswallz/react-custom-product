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

