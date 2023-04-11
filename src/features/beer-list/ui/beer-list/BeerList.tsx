import {IonList} from '@ionic/react'
import {Card} from '../card/Card'
import {useBeerList} from '../../store'

import cls from './BeerList.module.css'
import {useHistory} from 'react-router'
import {type BeerResponse} from '../../beer.types'
import {type FC} from 'react'

export const BeerList: FC = () => {
  const {beers, setCurrentBeer} = useBeerList()
  const history = useHistory()

  const onClick = (data: BeerResponse) => {
    return () => {
      history.push(`/beer/${data.id}`)
      setCurrentBeer(data)
    }
  }

  const listItem = beers.map((beer, i) => {
    return (
        <Card key={i} beer={beer} onClick={onClick(beer)}/>
    )
  })

  return (
      <div className={cls.container}>
        <IonList>
          {listItem}
        </IonList>
      </div>
  )
}
