import {IonList} from "@ionic/react";
import {Card} from "../card/Card";
import {useBeerList} from "../../store";
import {lazy, Suspense, useState} from "react";

import cls from './BeerList.module.css'

const Modal = lazy(() => import('../modal/Modal').then((module) => ({default: module.Modal})))

export const BeerList = () => {
  const {beers, setCurrentBeer} = useBeerList()
  const [isOpen, setIsOpen] = useState(false)
  const onClick = (data: any) => {

    return () => {
      setCurrentBeer(data)
      setIsOpen(true)
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
        <Suspense fallback={'Loading'}>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </Suspense>
      </div>
  )
};