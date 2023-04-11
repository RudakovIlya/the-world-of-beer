import {IonFooter, IonToolbar} from '@ionic/react'
import {Link} from 'react-router-dom'
import {type FC, memo} from 'react'
import cls from './Footer.module.css'
import {useHistory} from "react-router";

interface IFooter {
  to: string
}

export const Footer: FC<IFooter> = memo(({to}) => {
  const {goBack} = useHistory()
  return (
      <IonFooter>
        <IonToolbar>
          <div className={cls.wrapper}>
            <span onClick={goBack} className={cls.link}>Back</span>
            <Link to={`/beer/${+to + 1}`} className={`${cls.link} ${+to >= 100 ? cls.disabled : ''}`}>Next</Link>
          </div>
        </IonToolbar>
      </IonFooter>
  )
})
