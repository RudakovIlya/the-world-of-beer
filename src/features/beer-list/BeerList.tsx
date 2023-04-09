import {
  IonCard,
  IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent, IonFooter,
  IonHeader,
  IonImg,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import {useBeerList} from "./store";
import {FC, useEffect} from "react";
import {Pagination} from "./ui/pagination/Pagination";

const Card: FC<any> = ({image_url, name, tagline}) => {
  return (
      <IonItem>
        <IonCard>
          <IonImg
              src={image_url}
              alt='The Wisconsin State Capitol building in Madison, WI at night'
          ></IonImg>

          <IonCardHeader>
            <IonCardTitle>{name}</IonCardTitle>
            <IonCardSubtitle>{tagline}</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
      </IonItem>
  )
}

export const BeerList = () => {
  const {beers, setBeerList, currentPage, changeCurrentPage} = useBeerList()

  useEffect(() => {
    setBeerList()
  }, [setBeerList, currentPage])

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected + 1
    changeCurrentPage(newOffset);
  };

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {
              beers.map((beer, i) => {
                return (
                    <Card key={i} {...beer}/>
                )
              })
            }
          </IonList>
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <Pagination pageCount={3} handlePageClick={handlePageClick}/>
          </IonToolbar>
        </IonFooter>
      </IonPage>
  )
};