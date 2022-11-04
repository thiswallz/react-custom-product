# react-custom-product

<p align="center">
  <a href="https://www.npmjs.com/package/react-custom-product">
    <img src="https://img.shields.io/npm/v/react-custom-product.svg" alt="npm version" >
  </a>
  <a href="https://github.com/thiswallz/react-custom-product/blob/main/LICENSE">
    <img src="https://badgen.net/github/license/thiswallz/react-custom-product" alt="license">
  </a>
 <a href="https://badgen.net/github/checks/thiswallz/react-custom-product">
    <img src="https://badgen.net/github/checks/thiswallz/react-custom-product" />
  </a>
  <a href="https://badgen.net/bundlephobia/dependency-count/react-custom-product">
    <img src="https://badgen.net/bundlephobia/dependency-count/react-custom-product" />
  </a>
  <a href="https://badgen.net/npm/types/react-custom-product">
    <img src="https://badgen.net/npm/types/react-custom-product"  />
  </a>
    <a href="https://badgen.net/bundlephobia/tree-shaking/react-custom-product">
    <img src="https://badgen.net/bundlephobia/tree-shaking/react-custom-product"  />
  </a>
    <a href="https://badgen.net/bundlephobia/minzip/react-custom-product">
    <img src="https://badgen.net/bundlephobia/minzip/react-custom-product" />
  </a>

</p>
<p align="center">
  <a href="https://sonarcloud.io/project/overview?id=thiswallz_react-custom-product">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=thiswallz_react-custom-product&metric=sqale_rating"  alt="Maintainability" >
  </a>
    <a href="https://sonarcloud.io/project/overview?id=thiswallz_react-custom-product">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=thiswallz_react-custom-product&metric=security_rating"  alt="Security" >
  </a>
     <a href="https://sonarcloud.io/project/overview?id=thiswallz_react-custom-product">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=thiswallz_react-custom-product&metric=reliability_rating"  alt="reliability" >
  </a>
       <a href="https://sonarcloud.io/project/overview?id=thiswallz_react-custom-product">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=thiswallz_react-custom-product&metric=bugs"  alt="bugs" >
  </a>
        <a href="https://sonarcloud.io/project/overview?id=thiswallz_react-custom-product">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=thiswallz_react-custom-product&metric=vulnerabilities"  alt="vulnerabilities" >
  </a> 
  
</p>



A _lightweight_ React component providing customization for your product image.

Demo 
[https://react-custom-product-demo.vercel.app/](https://react-custom-product-demo.vercel.app/)

<image src="ss1.png" width="200px" />

## Features

- Zero dependencies.
- Multiple animation choices.
- Treeshakable (if you uise 1 component, others are not included in your bundle).
- 2.4kb gzipped (https://bundlephobia.com/package/react-custom-product)

## Current components  

- Custom Product Color
- 3D ShowCase (multiple images are needed)
- Product Switch   
- Product Cover
- Product Gallery 
- Hotspot

## Under construction  

- Hover product
- Masked Product
- Custom Background
- Auto Gallery


# DEFINITIONS

## ProductCustomColor - change your products color and have a nice animation.

Be sure you have exact images with just different colors. (different shapes or pxs wont work properly)
 
``` typescript
import { ProductCustomColor } from 'react-custom-product'

export default function Example() {
  return <ProductCustomColor 
    width="500px" 
    height="150px" 
    src="/img/model-1.png" 
  />
}

```

| Prop                   | Type      | Default | Description                            |
| ---------------------- | --------- | ------- | -------------------------------------------- |
| `src` |  `String` | `required` | Image (after you change the src, will trigger the effect). |
| `css` |  `CSSProperties` | {} | pass styles to the container |
| `width` |  `String` | 100% | Be sure you use a fixed px size for this effect |
| `height` |  `String` | 100% | Be sure you use a fixed px size for this effect |
| `duration` |  `String` | .6 | Milliseconds animation will last. |

## ShowCase - show your product in 3d (works for web and mobile)

be sure you have more than +10 images to have a good transition, images must be the same, but takend from different angles.

``` typescript
import { ShowCase } from 'react-custom-product'

export default function Example() {
    const showCaseImages = [
      '/images/1.png',
      '/images/2.png',
      '/images/3.png',
      '...'
    ]

    return <ShowCase images={showCaseImages} />
}
```

| Prop                   | Type      | Default | Description                            |
| ---------------------- | --------- | ------- | -------------------------------------------- |
| `images` |  `String[]` | `required` | Images array (will be preload) |
| `bg` |  `String` | '' | Image for background. |
| `width` |  `String` | 100% | width size |
| `height` |  `String` | 100% | height size |
| `defaultDirection` |  `Boolean` | true| In case the drag and drop direction should goes to the opposite direction. |
| `initialImage` |  `Number` | 0 | Image you want to be show at first (array position) |
| `css` |  `CSSProperties` | {} | styles to the container |
| `throttle` |  `Number` | .04 | Milliseconds the mouse will be read to calculate and mvoe right/left. |
| `pxThreshold` |  `Number` | 4 | How many pixels are needed in order to make the decision of movement. |


## ProductSwitch - Simple - switch from different products shapes.

 
``` typescript
import { ProductSwitch } from 'react-custom-product'

export default function Example() {
  return <ProductSwitch src="/img/model-1.png" />
}
```
| Prop                   | Type      | Default | Description                            |
| ---------------------- | --------- | ------- | -------------------------------------------- |
| `src` |  `String` | `required` | Image (after you change the src, will trigger the effect). |
| `css` |  `CSSProperties` | {} | styles to the container |
| `width` |  `String` | 100% |  |
| `height` |  `String` | 100% |  |
| `duration` |  `String` | 1 | Milliseconds animation will last. |


## ProductCover - Product color cover.

Colors cover can be manually manipulated with this component.

``` typescript
import { ProductCover } from 'react-custom-product'

export default function Example() {
  return  <ProductCover
            src="/models/1.png"
            cover="/models/2.png"
            width="550px"
            height="400px"
            coverWidth={50}
            coverHeight={50} />
}
```
| Prop                   | Type      | Default | Description                            |
| ---------------------- | --------- | ------- | -------------------------------------------- |
| `src` |  `String` | `required` | Image. |
| `cover` |  `String` | `required` | Image which is covering the `src`. |
| `css` |  `CSSProperties` | {} | styles to the container |
| `width` |  `String` | 100% |  |
| `height` |  `String` | 100% |  |
| `coverWidth` |  `Number` | 100 | Percentage number |
| `coverHeight` |  `Number` | 100 | Percentage number |


## SwitchGallery - Simple gallery.

Simple gallery to show multiple product images

``` typescript
export default function SwitchGalleryExample() {
  const images = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '...'
  ]

  return <SwitchGallery
    images={images}
  />
}
```
| Prop                   | Type      | Default | Description                            |
| ---------------------- | --------- | ------- | -------------------------------------------- |
| `images` |  `String[]` | `required` | Images. |
| `css` |  `CSSProperties` | {} | container styles |
| `cssImage` |  `CSSProperties` | {} | current image styles |
| `cssImageSelectorContainer` |  `CSSProperties` | {} | container preview images styles |
| `cssImageSelector` |  `CSSProperties` | {} | preview images styles |




## ProductHotspot - Image Hotspot.

Hover some hotspot of your product and show info

``` typescript

const CustomMessage1 = () => <a href="#">Simple link</a>
const CustomMessage2 = () => <div>Custom message/info</div>

export default function ProductHotspotExample() {

  const spots = [
    {
      x: '35%',
      y: '70%',
      children: CustomMessage1()
    },
    {
      x: '65%',
      y: '20%',
      children: CustomMessage2()
    }
  ]

  return <ProductHotspot 
    src={`hotspot/1.webp`} spots={spots} height="auto" />
}
```
| Prop                   | Type      | Default | Description                            |
| ---------------------- | --------- | ------- | -------------------------------------------- |
| `src` |  `String` | `required` | Image. |
| `spots` |  `ProductHotspotPoint[]` | {} | positions and react element for each hotspot |
| `css` |  `CSSProperties` | {} | container styles |
| `width` |  `String` | 100% |  |
| `height` |  `String` | 100% |  |
| `alt` |  `String` | '' |  image alt attribute |


| CSS Class                   | Description                            |
| ---------------------- | -------------------------------------------- |
| `__react_custom_product__hotspot_point_container` |  Spot container. |
| `__react_custom_product__hotspot_point` |  Point. |
| `__react_custom_product__hotspot_message` |  Custom spot message container. |


## ProductMask - Svg Mask for products

You can choose either our 2 shapes or add yours.

``` typescript
export default function ProductMaskExample() {
  return <ProductMask type='2' src={`/autos/mask/1.webp`} css={{scale: '1.2'}} />
}
```

| Prop                   | Type      | Default | Description                            |
| ---------------------- | --------- | ------- | -------------------------------------------- |
| `src` |  `String` | `required` | Image. |
| `alt` |  `String` | '' | Alt attribute. |
| `type` |  `String` | '1' | Shape, options: 1 or 2. If you add a new one, use the id of the new element: `id="clip-polygon--3"`, here your type would be 3. |
| `css` |  `CSSProperties` | {} | container styles |
| `polygon` |  `React.Element` | undefined | Custom SVG Polygon Element. e.g. `<clipPath id="clip-polygon--3"><polygon points=" 8 0, 8.1 0, 8.1 11, 0 11"></polygon><rect x="8" y="0" width="14.2" height="11"></rect><polygon points="22.1 0, 30.2 0, 22.2 11, 22.1 11"></polygon></clipPath>` |


[npm-badge]: https://img.shields.io/npm/v/react-custom-product.svg
[npm]: https://www.npmjs.org/package/react-custom-product


### Time coding on the projects so far:

React Library

[![wakatime](https://wakatime.com/badge/user/aaf8dd71-b92d-4c70-b476-6cf74feeaf3e/project/c8513b27-d26d-4ffd-966b-f0c77e1275e6.svg)](https://wakatime.com/badge/user/aaf8dd71-b92d-4c70-b476-6cf74feeaf3e/project/c8513b27-d26d-4ffd-966b-f0c77e1275e6)

NextJS Test&Demo

[![wakatime](https://wakatime.com/badge/user/aaf8dd71-b92d-4c70-b476-6cf74feeaf3e/project/5a2934be-0b62-49f3-b715-d1571030f001.svg)](https://wakatime.com/badge/user/aaf8dd71-b92d-4c70-b476-6cf74feeaf3e/project/5a2934be-0b62-49f3-b715-d1571030f001)


[Demo Repo](https://github.com/thiswallz/react-custom-product-demo)
