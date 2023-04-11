import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'

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

import { type FC, lazy, Suspense } from 'react'

import './theme/variables.css'
import { IonReactRouter } from '@ionic/react-router'
import { Route, Switch } from 'react-router'
import { SkeletonCard } from './common/components/SkeletonCard/SkeletonCard'
import { SkeletonList } from './common/components/SkeletonList/SkeletonList'

const Details = lazy(() => import('./features/details/Details').then((module) => ({ default: module.Details })))

const BeerPage = lazy(() => import('./features/beer-list/BeerPage').then((module) => ({ default: module.BeerPage })))

setupIonicReact()

const App: FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<SkeletonList/>}>
                <BeerPage/>
              </Suspense>
            </Route>
            <Route exact path="/beer/:id">
              <Suspense fallback={<SkeletonCard/>}>
                <Details/>
              </Suspense>
            </Route>
          </Switch>
        </IonRouterOutlet>

      </IonReactRouter>
    </IonApp>
  )
}

export default App
