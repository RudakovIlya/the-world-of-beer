import cls from './SkeletonItem.module.css'
import {IonCard, IonItem, IonLabel, IonSkeletonText} from '@ionic/react'
import {type FC} from 'react'

export const SkeletonItem: FC<{ className?: string }> = () => {
  return <IonItem className={cls.item}>
    <IonCard className={cls.card}>
      <IonLabel>
        <h3>
          <IonSkeletonText className={cls.thumb} animated={true}></IonSkeletonText>
        </h3>
        <p>
          <IonSkeletonText className={cls.text} animated={true}></IonSkeletonText>
        </p>
        <p>
          <IonSkeletonText className={cls.title} animated={true}></IonSkeletonText>
        </p>
      </IonLabel>
    </IonCard>
  </IonItem>
}
