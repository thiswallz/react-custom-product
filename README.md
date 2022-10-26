# react-custom-product

[![npm package][npm-badge]][npm]

A _lightweight_ React component providing customization for your product image.

Demo 
[https://react-custom-product-demo.vercel.app/](https://react-custom-product-demo.vercel.app/)



## Features

- Zero dependencies.
- Multiple animation choices.
- Treeshakable.
- 1.9kb gzipped

## Current components  

- Custom Color
- 3D ShowCase (multiple images are needed)
- Basic Switch   

## Under construction  

- Hotspot
- Hover product
- Masked Product
- Custom Background
- Custom Cover
- Manual Gallery 
- Auto Gallery


# API DEFINITIONS SOON

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
| `initialImage` |  `Number` | 0 | Image you want to be show at first (array position) |
| `css` |  `CSSProperties` | {} | pass styles to the container |
| `throttle` |  `Number` | .04 | Milliseconds the mouse will be read to calculate and mvoe right/left. |
| `pxThreshold` |  `Number` | 4 | How many pixels are needed in order to make the decition of movement. |


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
| `css` |  `CSSProperties` | {} | pass styles to the container |
| `width` |  `String` | 100% |  |
| `height` |  `String` | 100% |  |
| `duration` |  `String` | 1 | Milliseconds animation will last. |



[npm-badge]: https://img.shields.io/npm/v/react-custom-product.svg
[npm]: https://www.npmjs.org/package/react-custom-product


[Demo Repo](https://github.com/thiswallz/react-custom-product-demo)