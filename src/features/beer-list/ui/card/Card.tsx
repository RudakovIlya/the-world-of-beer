import {type FC, memo} from 'react'
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonText} from '@ionic/react'
import {type BeerResponse} from '../../beer.types'
import cls from './Card.module.css'
import {LazyImage} from '../../../../common/components/lazy-image/LazyImage'

interface ICard {
  beer: Pick<BeerResponse, 'image_url' | 'name' | 'tagline' | 'abv' | 'id'>
  onClick: () => void
}

export const Card: FC<ICard> = memo(({onClick, beer: {tagline, name, image_url: imageUrl, abv}}) => {
  return (
      <IonItem className={cls.item} onClick={onClick}>
        <IonCard className={cls.card}>
          <LazyImage className={cls.img} url={imageUrl} alt={name} loaderSize={{height: '250px'}}/>
          <IonCardHeader>
            <IonText className={cls.text}>Alcohol by volume: {abv}</IonText>
            <IonCardTitle className={cls.title}>{name}</IonCardTitle>
            <IonCardSubtitle className={cls.subtitle}>{tagline}</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
      </IonItem>
  )
})
