import {FC, memo} from "react";
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonItem, IonText} from "@ionic/react";
import {BeerResponse} from "../../beer.types";
import cls from './Card.module.css'

interface ICard {
  beer: Pick<BeerResponse, 'image_url' | 'name' | 'tagline' | 'abv'>
  onClick: () => void
}

export const Card: FC<ICard> = memo(({onClick, beer: {tagline, name, image_url, abv}}) => {

  return (
      <IonItem className={cls.item} onClick={onClick}>
        <IonCard className={cls.card}>
          <IonImg className={cls.img} src={image_url} alt={name}/>
          <IonCardHeader>
            <IonText className={cls.text}>Alcohol by volume: {abv}</IonText>
            <IonCardTitle className={cls.title}>{name}</IonCardTitle>
            <IonCardSubtitle className={cls.subtitle}>{tagline}</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
      </IonItem>
  )
})