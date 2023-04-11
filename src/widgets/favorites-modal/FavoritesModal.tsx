import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import {heart, trashOutline} from 'ionicons/icons'
import {type FC, useState} from 'react'
import {useBeerList} from "../../features/beer-list/store";
import cls from './Favorites.module.css'
import {useHistory} from "react-router";
import {favoritesSelector, removeFavoriteSelector} from "../../features/beer-list/selectors";

export const FavoritesModal: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const favorites = useBeerList(favoritesSelector)
  const removeFavorite = useBeerList(removeFavoriteSelector)

  const {push} = useHistory()

  const favItems = favorites.map(({name, tagline, abv, image_url: imageUrl, id}) => {
    return (
        <IonItem onClick={() => push(`/beer/${id}`)} className={`${cls.item}`} key={name} lines="none">
          <img src={imageUrl} alt={name}/>
          <IonLabel className={cls.label}>
            <h2>{name}</h2>
            <p>{tagline}</p>
            <p>Alcohol by volume: {abv}</p>
          </IonLabel>
          <IonButton color={'danger'} onClick={(e) => {
            e.stopPropagation()
            removeFavorite(id)
          }}>
            <IonIcon icon={trashOutline}/>
          </IonButton>
        </IonItem>
    )
  })

  return <>
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favorites</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => {
              setIsOpen(false)
            }}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {favItems.length
            ? (
                <IonList>
                  {favItems}
                </IonList>
            )
            : <IonTitle className={cls.title} color={'warning'}>Favorites list is empty</IonTitle>
        }
      </IonContent>
    </IonModal>
    <IonFab onClick={() => {
      setIsOpen(true)
    }} slot="fixed" vertical="top" horizontal="end">
      <IonFabButton size="small">
        <IonIcon icon={heart}/>
      </IonFabButton>
    </IonFab>
  </>
}