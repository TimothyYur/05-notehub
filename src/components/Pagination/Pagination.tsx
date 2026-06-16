import ReactPaginateModule from 'react-paginate';
import css from './Pagination.module.css';

// @ts-expect-error react-paginate ESM compatibility
const ReactPaginate = ReactPaginateModule?.default || ReactPaginateModule;

interface PaginationProps {
  pageCount: number;
  forcePage: number;
  onPageChange: (selectedPage: number) => void;
}

export default function Pagination({
  pageCount,
  forcePage,
  onPageChange,
}: PaginationProps) {
  const handlePageClick = (selectedItem: { selected: number }) => {
    onPageChange(selectedItem.selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={css.pagination}
      activeClassName={css.active}
      forcePage={forcePage - 1}
    />
  );
}
