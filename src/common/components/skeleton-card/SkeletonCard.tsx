import cls from './SkeletonCard.module.css'
import {IonCard, IonLabel, IonSkeletonText} from '@ionic/react'
import {type FC} from 'react'

export const SkeletonCard: FC = () => {
  return (
      <IonCard className={cls.card}>
        <IonLabel>
          <IonSkeletonText className={cls.thumb} animated/>

          <IonSkeletonText className={cls.text} animated/>

          <IonSkeletonText className={cls.title} animated/>

          <IonSkeletonText className={cls.description} animated/>

        </IonLabel>
      </IonCard>
  )
}
