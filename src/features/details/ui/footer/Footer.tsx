import { IonFooter, IonToolbar } from '@ionic/react'
import { Link } from 'react-router-dom'
import { type FC } from 'react'

interface IFooter {
  to: string
}

export const Footer: FC<IFooter> = ({ to }) => {
  return (
    <IonFooter>
      <IonToolbar>
        <Link to={`/beer/${+to - 1}`} >Back</Link>
        <Link to={`/beer/${+to + 1}`} >Next</Link>
      </IonToolbar>
    </IonFooter>
  )
}
