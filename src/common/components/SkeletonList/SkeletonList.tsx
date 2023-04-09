import {FC} from "react";
import {IonCard, IonItem, IonLabel, IonList, IonSkeletonText} from "@ionic/react";
import cls from './Skeleton.module.css'

interface ISkeletonList {
  amount?: number
}

export const SkeletonList: FC<ISkeletonList> = ({amount = 5}) => {

  const skeletItem = Array.from(new Array(amount)).map((item, index) => <IonItem key={index} className={cls.item}>
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
  </IonItem>)
  return <IonList className={cls.container}>
    {skeletItem}
  </IonList>
};