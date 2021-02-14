import React, { useState, Fragment } from 'react'
import { PicComponent } from './style'

interface Props {
  regularImage: string
  webpImage: string
  filterColor?: string
  filterOpacity?: number
  blur?: string
  errorImage?: string
  alt?: string
  errorImageAlt?: string
  borderRadius?: string
}

export const SafePic = ({
  regularImage,
  webpImage,
  filterColor,
  filterOpacity,
  blur,
  errorImage,
  alt,
  borderRadius
}: /*   errorImageAlt */
Props) => {
  const [error, setError] = useState(false)
  const [image, setImage] = useState(regularImage)

  const onError = () => {
    setError(true)
  }

  const onError2 = () => {
    setImage(String(errorImage))
  }

  return (
    <PicComponent
      filterColor={filterColor ? filterColor : ''}
      filterOpacity={filterOpacity ? filterOpacity : 1}
      blur={blur}
      borderRadius={borderRadius}
    >
      <picture>
        {!error && (
          <Fragment>
            <source srcSet={webpImage} type='image/webp' />
            <source srcSet={regularImage} type='image/jpg' />
          </Fragment>
        )}

        {!error ? (
          <img
            src={regularImage}
            srcSet={regularImage}
            alt={alt}
            onError={onError}
          />
        ) : (
          <img src={image} srcSet={image} alt={alt} onError={onError2} />
        )}
      </picture>
    </PicComponent>
  )
}
