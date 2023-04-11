import {IonContent, IonFab, IonFabButton, IonIcon, IonPage} from '@ionic/react'
import {type FC, useEffect} from 'react'
import {useBeer} from './store'
import {useHistory, useParams} from 'react-router'
import {Header} from '../../common/components/header/Header'
import {BeerCard} from './ui/beer-card/BeerCard'
import {SkeletonCard} from '../../common/components/SkeletonCard/SkeletonCard'
import {Footer} from './ui/footer/Footer'
import {home} from 'ionicons/icons'

export const Details: FC = () => {
  const {beer, getBeer, status} = useBeer()
  const {id} = useParams<{ id: string }>()
  const history = useHistory()
  useEffect(() => {
    getBeer(+id)
  }, [id])

  return (
      <IonPage>
        <Header isLoading={status === 'loading'} title={`Beer: ${beer.name}`}/>
        <IonContent>
          {status === 'success' && <BeerCard beer={beer}/>}
          {status === 'loading' && <SkeletonCard/>}
        </IonContent>
        <Footer to={id}/>
        <IonFab>
          <IonFabButton onClick={() => {
            history.push('/')
          }}>
            <IonIcon icon={home}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonPage>
  )
}
