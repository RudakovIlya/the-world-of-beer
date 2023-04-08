import ReactPaginate from "react-paginate";
import {FC} from "react";
import {paginationClasses} from "./constants";

interface IPagination {
  pageCount: number
  handlePageClick: (selectedItem: { selected: number }) => void
}

export const Pagination: FC<IPagination> = ({pageCount,handlePageClick}) => {
  return <ReactPaginate
      {...paginationClasses}
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="< previous"
      breakLabel="..."
      renderOnZeroPageCount={null}/>
};