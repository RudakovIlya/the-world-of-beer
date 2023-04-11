import {useRef, useState} from 'react'

interface UseLazyImage {
  imagesIsLoading: boolean
  imageLoaded: (event: any) => void
}

export const useLazyImage = (image: string): UseLazyImage => {
  const [imagesIsLoading, setLoading] = useState(true)
  const counter = useRef(0)

  const imageLoaded = (): void => {
    counter.current += 1
    if (counter.current <= image.length) {
      setLoading(false)
    }
  }
  return {imagesIsLoading, imageLoaded}
}
