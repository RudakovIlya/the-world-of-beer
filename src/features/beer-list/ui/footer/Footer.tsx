import {Pagination} from '../pagination/Pagination'
import {IonFooter, IonToolbar} from '@ionic/react'
import {useBeerList} from '../../store'

export const Footer = () => {
  const {changeCurrentPage} = useBeerList()

  const handlePageClick = (event: { selected: number }): void => {
    const newOffset = event.selected + 1
    changeCurrentPage(newOffset)
  }

  return (
      <>
        <IonFooter>
          <IonToolbar>
            <Pagination pageCount={3} handlePageClick={handlePageClick}/>
          </IonToolbar>
        </IonFooter>
      </>
  )
}
