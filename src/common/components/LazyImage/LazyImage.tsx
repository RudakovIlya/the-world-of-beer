import { type FC } from 'react'
import cls from './LazyImage.module.css'
import { IonSkeletonText } from '@ionic/react'
import { useLazyImage } from '../../hooks/use-lazy-image'

interface ILazyImage {
  loaderSize?: {
    width?: string | number
    height?: string | number
  }
  className: string
  url: string
  alt: string
}

export const LazyImage: FC<ILazyImage> = ({ url, loaderSize, className, alt }) => {
  const { imageLoaded, imagesIsLoading } = useLazyImage(url)
  return <>
    {imagesIsLoading && <IonSkeletonText animated style={loaderSize}/>}
    <img
        onLoad={imageLoaded}
        className={`${className} ${!imagesIsLoading ? cls.visible : cls.img}`}
        src={url} alt={alt}/>
  </>
}
