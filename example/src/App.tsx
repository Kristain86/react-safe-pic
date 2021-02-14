import React from 'react'
import { SafePic } from 'safe-pic'



const App = () => {
  return (
    <>
      <SafePic
        regularImage={'https://www.gstatic.com/webp/gallery/1.jpg'}
        webpImage={'https://www.gstatic.com/webp/gallery/2.webp'}
        errorImage={'https://placehold.it/404x404'}
        alt={'this is the way'}
        errorImageAlt={'this is not the way'}
        /*  blur={'2px'} */
        filterColor={
          'linear-gradient(0deg, rgba(233,233,233,1) 38%, rgba(219,255,141,1) 54%, rgba(51,162,186,1) 100%)'
        }
        filterOpacity={0.5}
     
      />

      <SafePic
        regularImage={'https://www.gstatic.com/webp/gallery/1.jpg'}
        webpImage={'https://www.gstatic.com/webp/gallery/2.webp'}
        errorImage={'https://placehold.it/202x202'}
        alt={'this is my way'}
        errorImageAlt={'this is not the way, really'}
        /*  blur={'2px'} */

        /*   filterColor={"#00afb9"}
  filterOpacity={0.5} */
      />
    </>
  )
}

export default App
