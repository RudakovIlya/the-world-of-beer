import {
  IonButton,
  IonButtons, IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon, IonItem, IonLabel, IonList,
  IonModal,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import {heart, trashOutline} from "ionicons/icons";
import {useState} from "react";
import {useBeerList} from "../../store";
import cls from './Favorites.module.css'

export const Favorites = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {favorites, removeFavorite} = useBeerList()
  const favItems = favorites.map(({name, tagline, abv, image_url, id}) => {
    return (
        <IonItem className={`${cls.item}`} key={name} lines="none">
          <img src={image_url} alt={name}/>
          <IonLabel className={cls.label}>
            <h2>{name}</h2>
            <p>{tagline}</p>
            <p>Alcohol by volume: {abv}</p>
          </IonLabel>
          <IonButton color={'danger'} onClick={() => removeFavorite(id)}>
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
            <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {favItems.length ? (
                <IonList>
                  {favItems}
                </IonList>
            ) :
            <IonTitle color={'warning'}>Favorites list is empty</IonTitle>
        }

      </IonContent>
    </IonModal>
    <IonFab onClick={() => setIsOpen(true)} slot="fixed" vertical="top" horizontal="end">
      <IonFabButton size="small">
        <IonIcon icon={heart}/>
      </IonFabButton>
    </IonFab>
  </>
};