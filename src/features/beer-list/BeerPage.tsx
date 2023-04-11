import {IonContent, IonPage, IonTitle, IonToast} from '@ionic/react'
import {useBeerList} from './store'
import {useEffect, useRef} from 'react'
import {BeerList} from './ui/beer-list/BeerList'
import {Footer} from './ui/footer/Footer'
import {Header} from '../../common/components/header/Header'
import {FavoritesModal} from "../../widgets/favorites-modal/FavoritesModal";
import {SkeletonList} from "../../common/components/skeleton-list/SkeletonList";
import {currentPageSelector, errorMessageSelector, fetchBeerListSelector, fetchStatusSelector} from "./selectors";

export const BeerPage = () => {
  const setBeerList = useBeerList(fetchBeerListSelector)
  const page = useBeerList(currentPageSelector)
  const status = useBeerList(fetchStatusSelector)
  const error = useBeerList(errorMessageSelector)

  useEffect(() => {
    setBeerList()
  }, [setBeerList, page])

  const ref = useRef<null | HTMLIonContentElement>(null)

  const scrollToTop = (ms: number): void => {
    if (ref?.current) {
      void ref.current.scrollToTop(ms)
    }
  }

  useEffect(() => {
    scrollToTop(500)
  }, [])

  return (
      <>
        <IonPage>
          <Header title={'The World of Beer'}/>
          <IonContent fullscreen ref={ref} scrollEvents={true}>
            {status === 'loading' && <SkeletonList/>}
            {status === 'success' && <BeerList/>}
            {status === 'failed' && <IonTitle color={'danger'}>{error}</IonTitle>}
          </IonContent>
          <FavoritesModal/>
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
