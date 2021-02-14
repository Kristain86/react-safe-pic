# react-safe-pic

<p> a react library for image compatibillity and a definitive solution to google's "Serve images in next-gen formats" warning </p>

## Install

```bash
npm install --save safe-pic
```

```bash
yarn add --save safe-pic
```

## Usage

```tsx
import React, { Component } from 'react'

import React from 'react'
import { SafePic } from 'safe-pic'

const App = () => {
  return (
    <SafePic
      regularImage={'your-jpg-png-image'}
      webpImage={'your-webp-image'}
      errorImage={'you-default-if-images-cant-load'}
      alt={'this is the way'}
      errorImageAlt={'this is not the way'}
    />
  )
}
```

## How it works and when to use it?

<p>react-safe-pic main job is to keep image compatibility in all browsers, an example of this is: if we charged and .webP extension image and a .jpg/png extension image, in safari will render the jpg/png image and in Chrome, Firefox, etc. the next gen .webP image.</p>

<p>Also react-safe-pic it has 2 fallbacks to keep it safe and easy. If webp fails it will load the jpg/png image, and if jpg/png image fails as well you can handle the error and showing a default error image! This is great also if you want to decide to show either a diferent .webp and jpg/png picture in the same component! </p>

## Customize your picture?

<p>You can blur you image, rounded it, put it a mask (even a gradient one) and handle opacity. More feature will be added, stay in tune! </p>

## Props

| Prop    | Description |
| ------- | ----------- |
| example | example     |
|         |             |
|         |             |

## License

MIT © [kristain](https://github.com/kristain)
