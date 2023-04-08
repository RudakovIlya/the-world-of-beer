import {
  IonApp,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonContent, IonHeader,
  IonImg, IonTitle, IonToolbar,
  setupIonicReact,
} from '@ionic/react'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'

/* Theme variables */
import {FC, useEffect, useState} from 'react'

import './theme/variables.css'
import {useBeerList} from "./features/beer-list/store";
import {BeerList} from "./features/beer-list/BeerList";

setupIonicReact()


const App: FC = () => {
  return (
      <IonApp>
        <BeerList/>
      </IonApp>
  )
}

export default App
