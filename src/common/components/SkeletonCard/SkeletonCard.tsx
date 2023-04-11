import cls from './SkeletonCard.module.css'
import {IonCard, IonLabel, IonSkeletonText} from '@ionic/react'
import {type FC} from 'react'

export const SkeletonCard: FC = () => {
  return (
      <IonCard className={cls.card}>
        <IonLabel>
          <IonSkeletonText className={cls.thumb} animated={true}/>

          <IonSkeletonText className={cls.text} animated={true}/>

          <IonSkeletonText className={cls.title} animated={true}/>

          <IonSkeletonText className={cls.description} animated={true}/>

        </IonLabel>
      </IonCard>
  )
}
