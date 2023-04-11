import cls from './BeerCard.module.css'
import {
  IonButton,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonText,
  IonToast
} from '@ionic/react'
import {heart} from 'ionicons/icons'
import {type FC, memo} from 'react'
import {type BeerResponse} from '../../../beer-list/beer.types'
import {LazyImage} from '../../../../common/components/lazy-image/LazyImage'
import {useBeerList} from "../../../beer-list/store";

interface IBeerCard {
  beer: BeerResponse
}

export const BeerCard: FC<IBeerCard> = memo(({beer}) => {

  const {abv, description, name, image_url: imageUrl, tagline} = beer

  const {addFavorite} = useBeerList()

  const onAddBeerIntoFavorite = () => {
    addFavorite(beer)
  }

  return (
      <>
        <LazyImage className={cls.img} url={imageUrl} alt={name} loaderSize={{height: '350px'}}/>
        <IonCardHeader>
          <IonText className={cls.text}>Alcohol by volume: {abv}</IonText>
          <IonCardTitle className={cls.title}>{name}</IonCardTitle>
          <IonCardSubtitle className={cls.subtitle}>{tagline}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonText className={cls.description}>
            {description}
          </IonText>
          <p>
            <IonButton className={cls.description} onClick={onAddBeerIntoFavorite} id="open-toast">
              <IonIcon slot="start" icon={heart}/>
              Add to favorites
            </IonButton>
          </p>
        </IonCardContent>
        <IonToast color={'success'}
                  trigger="open-toast"
                  animated
                  position={'top'}
                  message={`${name} added to favorites`}
                  duration={500}/>
      </>
  )
})
