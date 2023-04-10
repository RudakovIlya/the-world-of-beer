import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {FC} from "react";


export const Tab3: FC = () => {
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 3</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonContent>
      </IonPage>
  );
};
