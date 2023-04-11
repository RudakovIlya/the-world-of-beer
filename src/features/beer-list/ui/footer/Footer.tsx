import {Pagination} from '../pagination/Pagination'
import {IonFooter, IonToolbar} from '@ionic/react'
import {useBeerList} from '../../store'
import {useCallback} from "react";
import {changeCurrentPageSelector, currentPageSelector} from "../../selectors";

export const Footer = () => {
  const page = useBeerList(currentPageSelector)
  const onChangePage = useBeerList(changeCurrentPageSelector)

  const handlePageClick = useCallback((event: { selected: number }): void => {
    const newOffset = event.selected + 1
    onChangePage(newOffset)
  }, [onChangePage])

  return (
      <IonFooter>
        <IonToolbar>
          <Pagination page={page - 1} pageCount={3} handlePageClick={handlePageClick}/>
        </IonToolbar>
      </IonFooter>
  )
}
