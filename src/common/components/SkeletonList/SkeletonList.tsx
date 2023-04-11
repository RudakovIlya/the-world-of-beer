import { type FC } from 'react'
import { IonList } from '@ionic/react'
import cls from './Skeleton.module.css'
import { SkeletonItem } from './SkeletonItem/SkeletonItem'

interface ISkeletonList {
  amount?: number
}

export const SkeletonList: FC<ISkeletonList> = ({ amount = 5 }) => {
  const skeletItem = Array.from(new Array(amount)).map((item, index) => <SkeletonItem key={index}/>)
  return (
    <IonList className={cls.container}>
      {skeletItem}
    </IonList>
  )
}
