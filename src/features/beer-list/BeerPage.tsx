import { IonContent, IonPage, IonTitle, IonToast } from '@ionic/react'
import { useBeerList } from './store'
import { useEffect, useRef } from 'react'
import { BeerList } from './ui/beer-list/BeerList'
import { Footer } from './ui/footer/Footer'
import { SkeletonList } from '../../common/components/SkeletonList/SkeletonList'
import { Favorites } from './ui/favorites/Favorites'
import { Header } from '../../common/components/header/Header'

export const BeerPage = () => {
  const setBeerList = useBeerList(state => state.setBeerList)
  const currentPage = useBeerList(state => state.currentPage)
  const status = useBeerList(state => state.status)
  const error = useBeerList(state => state.errorMessage)

  useEffect(() => {
    setBeerList()
  }, [setBeerList, currentPage])

  const ref = useRef<null | HTMLIonContentElement>(null)

  const scrollToTop = (ms: number): void => {
    if (ref?.current) {
      void ref.current.scrollToTop(ms)
    }
  }

  useEffect(() => {
    scrollToTop(500)
  }, [currentPage])

  return (
    <>
      <IonPage>
        <Header title={'The World of Beer'}/>
        <IonContent fullscreen ref={ref} scrollEvents={true}>
          {status === 'loading' && <SkeletonList/>}
          {status === 'success' && <BeerList/>}
          {status === 'failed' && <IonTitle color={'danger'}>{error}</IonTitle>}
        </IonContent>
        <Favorites/>
        <Footer/>
        <IonToast position={'top'}
                  color={'danger'}
                  isOpen={status === 'failed'}
                  message={`${error}`}
                  duration={3000}/>
      </IonPage>
    </>
  )
}
