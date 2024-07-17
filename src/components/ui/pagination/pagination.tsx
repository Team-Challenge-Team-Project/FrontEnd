import clsx from 'clsx';
import Button from '../button';
import './pagination.style.css';
// import _ from 'lodash';

type TPaginationProps = {
  itemsCount?: number;
  pageSize?: number;
  currentPage?: number;
  onPageChange?: () => void;
};
export const Pagination = ({
  itemsCount = 16,
  pageSize = 2,
  // onPageChange,
  currentPage = 1,
}: TPaginationProps) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  //   const pages = _.range(1, pagesCount + 1);
  const pages = [1, 2, 3, 4];

  return (
    <nav className="pagination">
      <Button.Icon icon="LeftCircleArrow" className="pagination__btn" />
      <ul>
        {pages.map((page) => (
          <li
            className={clsx('page-item', {
              'page-item__active': page === currentPage,
            })}
            key={'page_' + page}
          >
            <Button
              classes={{ button: 'pagination-link' }}
              // onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          </li>
        ))}
      </ul>
      <Button.Icon icon="RightCircleArrow" className="pagination__btn" />
    </nav>
  );
};
