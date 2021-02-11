import React, { useState, Fragment } from 'react'
import { PicComponent } from './style'

interface Props {
  jpgImage: string
  webpImage: string
  filterColor?: string
  filterOpacity?: number
  blur?: string
  errorImage?: string
  alt?: string
  errorImageAlt?: string
}

export const SafePic = ({
  jpgImage,
  webpImage,
  filterColor,
  filterOpacity,
  blur,
  errorImage,
  alt
}: /*   errorImageAlt */
Props) => {
  console.log('no', webpImage, 'no', jpgImage)

  const [error, setError] = useState(false)
  const [image, setImage] = useState(jpgImage)

  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log(e.target)

    setError(true)
  }

  const onError2 = () => {

    setImage(String(errorImage))
    
  }

  console.log(error)

  if (webpImage) {
    console.log('ifff', webpImage, errorImage)
  }

  return (
    <PicComponent
      filterColor={filterColor ? filterColor : ''}
      filterOpacity={filterOpacity ? filterOpacity : 1}
      blur={blur}
    >
      <picture>
        {!error && (
          <Fragment>
            <source srcSet={webpImage} type='image/webp' />
            <source srcSet={jpgImage} type='image/jpg' />
          </Fragment>
        )}

        {!error ? (
          <img
            src={jpgImage}
            srcSet={jpgImage}
            alt={alt}
            className='googd'
            onError={(e) => onError(e)}
          />
        ) : (
          <img src={image} srcSet={image} alt={alt} onError={onError2} />
        )}
      </picture>
    </PicComponent>
  )
}
