import {IonHeader, IonSkeletonText, IonTitle, IonToolbar} from '@ionic/react'
import {type FC, memo} from 'react'
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import cls from './Header.module.css'

interface IHeader {
  title: string
  isLoading?: boolean
}

export const Header: FC<IHeader> = memo(({title, isLoading}) => {
  const location = useLocation()
  const pathname = location.pathname
  return (
      <IonHeader>
        <IonToolbar className={cls.toolbar}>
          <div className={cls.wrapper}>
            {pathname.includes('beer') && <Link to={'/'} className={cls.link}>Home</Link>}
            <IonTitle className={cls.title}>
              {!isLoading ? title : <IonSkeletonText style={{height: '20px'}} animated/>}
            </IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
  )
})
