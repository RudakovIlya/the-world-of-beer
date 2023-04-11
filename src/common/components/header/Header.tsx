import { IonHeader, IonSkeletonText, IonTitle, IonToolbar } from '@ionic/react'
import { type FC } from 'react'

export const Header: FC<{ title: string, isLoading?: boolean }> = ({ title, isLoading }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          {!isLoading ? title : <IonSkeletonText style={{ height: '20px' }} animated/>}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}
