# react-safe-pic

<p> A react library for image compatibillity and a definitive solution to google's "Serve images in next-gen formats" warning </p>

## Install

```bash
npm install react-safe-pic
```

```bash
yarn add react-safe-pic
```

## Usage

```tsx
import React from 'react'
import { SafePic } from 'react-safe-pic'

const App = () => {
  return (
    <SafePic
      regularImage={'your-jpg-png-image'}
      webpImage={'your-webp-image'}
    />
  )
}
```

## How it works and when to use it?

<p>React-safe-pic main job is to keep image compatibility in all browsers. </p>

<p>Also react-safe-pic it has 2 fallbacks to keep it safe and easy. If .WEBP fails it will load the JPG/PNG/SVG image, and if JPG/PNG/SVG image fails as well you can handle the error and showing a default error image! :D </p>

## Customize your picture?

<p>You can blur you image, rounded it, put it a mask (even a gradient one) and handle opacity. More feature will be added, stay in tune! </p>

## Props

| Prop         | Description |
| ------------ | ----------- |
| <b>regularImage</b> | type: string. here goes the JPG/PNG/SVG image |
| <b>webpImage</b> | type:string. hero goes the .WEBP images |
| <b>filterColor (optional)</b> | type: string. change the color of the filter |
| <b>filterOpacity (optional)</b> | type: number. Set the opacity of the filter mask |
| <b>blur: (optional)</b> | type: string. blur the image |
| <b>errorImage (optional)</b> | type: string. here goes the error image you want to show |
| <b>alt (optional)</b> | type: string. The alt attribute of the images |
| <b>errorImageAlt (optional)</b> | type: string. The alt attribute of the error image |
| <b>borderRadius (optional)</b> | type: string. Put border radius to the image |

## License

MIT © [kristain](https://github.com/kristain)
