import {IonList} from '@ionic/react'
import {Card} from '../card/Card'
import {useBeerList} from '../../store'

import cls from './BeerList.module.css'
import {useHistory} from 'react-router'
import {type FC, useCallback} from 'react'

export const BeerList: FC = () => {
  const {beers} = useBeerList()
  const history = useHistory()

  const onClick = useCallback((id: number) => {
    return () => history.push(`/beer/${id}`)
  }, [history])

  const listItem = beers.map((beer, i) => {
    return (
        <Card key={i} beer={beer} onClick={onClick(beer.id)}/>
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
