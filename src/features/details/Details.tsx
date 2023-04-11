import {IonContent, IonPage, IonTitle, IonToast} from '@ionic/react'
import {type FC, useEffect} from 'react'
import {useBeer} from './store'
import {useParams} from 'react-router'
import {Header} from '../../common/components/header/Header'
import {BeerCard} from './ui/beer-card/BeerCard'
import {SkeletonCard} from '../../common/components/skeleton-card/SkeletonCard'
import {Footer} from './ui/footer/Footer'
import {beerSelector, errorMessageSelector, getBeerSelector, statusSelector} from "./selectors";

export const Details: FC = () => {
  const beer = useBeer(beerSelector)
  const getBeer = useBeer(getBeerSelector)
  const status = useBeer(statusSelector)
  const errorMessage = useBeer(errorMessageSelector)

  const {id} = useParams<{ id: string }>()

  useEffect(() => {
    getBeer(+id)
  }, [id, getBeer])

  return (
      <IonPage>
        <Header isLoading={status === 'loading'} title={`Beer: ${beer.name}`}/>
        <IonContent>
          {status === 'success' && <BeerCard beer={beer}/>}
          {status === 'loading' && <SkeletonCard/>}
          {status === 'failed' && <IonTitle style={{textAlign: 'center'}} color={'danger'}>{errorMessage}</IonTitle>}
        </IonContent>
        <Footer to={id}/>
        <IonToast position={'middle'}
                  color={'danger'}
                  isOpen={status === 'failed'}
                  message={`${errorMessage}`}
                  duration={2000}/>
      </IonPage>
  )
}
