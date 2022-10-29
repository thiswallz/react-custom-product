# react-custom-product

<p align="center">
  <a href="https://www.npmjs.com/package/react-custom-product">
    <img src="https://img.shields.io/npm/v/react-custom-product.svg" alt="npm version" >
  </a>
  <a href="https://packagephobia.now.sh/result?p=react-custom-product">
    <img src="https://packagephobia.now.sh/badge?p=react-custom-product" alt="install size" >
  </a>
  <a href="https://github.com/rollup/rollup/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/react-custom-product.svg" alt="license">
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
- 2kb gzipped

## Current components  

- Custom Product Color
- 3D ShowCase (multiple images are needed)
- Product Switch   
- Product Cover
- Product Gallery 

## Under construction  

- Hotspot
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



[npm-badge]: https://img.shields.io/npm/v/react-custom-product.svg
[npm]: https://www.npmjs.org/package/react-custom-product


### Time coding on the projects so far:

React Library

[![wakatime](https://wakatime.com/badge/user/aaf8dd71-b92d-4c70-b476-6cf74feeaf3e/project/c8513b27-d26d-4ffd-966b-f0c77e1275e6.svg)](https://wakatime.com/badge/user/aaf8dd71-b92d-4c70-b476-6cf74feeaf3e/project/c8513b27-d26d-4ffd-966b-f0c77e1275e6)

NextJS Test&Demo

[![wakatime](https://wakatime.com/badge/user/aaf8dd71-b92d-4c70-b476-6cf74feeaf3e/project/5a2934be-0b62-49f3-b715-d1571030f001.svg)](https://wakatime.com/badge/user/aaf8dd71-b92d-4c70-b476-6cf74feeaf3e/project/5a2934be-0b62-49f3-b715-d1571030f001)


[Demo Repo](https://github.com/thiswallz/react-custom-product-demo)
