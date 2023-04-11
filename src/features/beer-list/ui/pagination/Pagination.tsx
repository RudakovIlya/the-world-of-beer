import ReactPaginate from 'react-paginate'
import {type FC} from 'react'
import {paginationClasses} from './constants'
import {IonIcon} from '@ionic/react'
import {caretBack, caretForward} from 'ionicons/icons'
import cls from './pagination.module.css'

interface IPagination {
  pageCount: number
  handlePageClick: (selectedItem: { selected: number }) => void
}

export const Pagination: FC<IPagination> = ({pageCount, handlePageClick}) => {
  return <ReactPaginate
      {...paginationClasses}

      nextLabel={<IonIcon className={cls.icon} icon={caretForward}/>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel={<IonIcon className={cls.icon} icon={caretBack}/>}
      renderOnZeroPageCount={null}/>
}
