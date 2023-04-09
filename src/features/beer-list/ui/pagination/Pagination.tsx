import ReactPaginate from "react-paginate";
import {FC} from "react";
import {paginationClasses} from "./constants";
import {IonIcon} from '@ionic/react';
import {caretForward} from 'ionicons/icons';
import {caretBack} from 'ionicons/icons';

interface IPagination {
  pageCount: number
  handlePageClick: (selectedItem: { selected: number }) => void
}

export const Pagination: FC<IPagination> = ({pageCount, handlePageClick}) => {
  return <ReactPaginate
      {...paginationClasses}
      nextLabel={<IonIcon size={'40'} icon={caretForward}/>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel={<IonIcon icon={caretBack}/>}
      renderOnZeroPageCount={null}/>
};