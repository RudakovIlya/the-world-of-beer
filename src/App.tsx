import {
  IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,
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
import {FC} from 'react'

import './theme/variables.css'
import {BeerPage} from "./features/beer-list/BeerPage";
import {IonReactRouter} from "@ionic/react-router";
import {Route} from "react-router";
import {ellipse} from "ionicons/icons";
import {Tab3} from "./TestPage";

setupIonicReact()


const App: FC = () => {
  return (
      <IonApp>
        <BeerPage/>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/test">
                <Tab3/>
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab2" href="/test">
                <IonIcon aria-hidden="true" icon={ellipse}/>
                <IonLabel>Tab 2</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
  )
}

export default App
