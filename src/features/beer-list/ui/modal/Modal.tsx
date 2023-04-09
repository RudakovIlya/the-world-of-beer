import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon, IonImg,
  IonModal, IonText,
  IonTitle, IonToast,
  IonToolbar
} from "@ionic/react";
import {FC} from "react";
import {useBeerList} from "../../store";
import {heart} from "ionicons/icons";
import cls from "./Modal.module.css";

interface IModal {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const Modal: FC<IModal> = ({isOpen, setIsOpen}) => {
  const {currentBeer: {name, image_url, description, abv, tagline}, addFavorite} = useBeerList()

  return (
      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{name}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonCard className={cls.card}>
          <IonImg className={cls.img} src={image_url} alt={name}/>
          <IonCardHeader>
            <IonText className={cls.text}>Alcohol by volume: {abv}</IonText>
            <IonCardTitle className={cls.title}>{name}</IonCardTitle>
            <IonCardSubtitle className={cls.subtitle}>{tagline}</IonCardSubtitle>
          </IonCardHeader>
          <IonContent className="ion-padding">
            <p className={cls.description}>
              {description}
            </p>
            <IonButton id="open-toast" onClick={addFavorite}>
              <IonIcon slot="start" icon={heart}/>
              Add to favorites
            </IonButton>
            <IonToast color={'success'}
                      trigger="open-toast"
                      message={`${name} added to favorites`}
                      duration={3000}/>
          </IonContent>
        </IonCard>
      </IonModal>
  )
};