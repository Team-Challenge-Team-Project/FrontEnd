import { SvgFinder } from '../../../Helper';
import './pagination.style.css';
// import _ from 'lodash';

type Props = {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: void;
};
export const Pagination = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
}: Props) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  //   const pages = _.range(1, pagesCount + 1);
  const pages = [1, 2, 3, 4];

  return (
    <nav className="pagination">
      <button className="pagination__btn">
        <SvgFinder src="left-circle-arrow.svg" />
      </button>
      <ul>
        {pages.map((page) => (
          <li
            className={'page-item ' + (page === currentPage ? 'active' : '')}
            key={'page_' + page}
          >
            <button className="pagination-link">{page}</button>
          </li>
        ))}
      </ul>
      <button className="pagination__btn">
        <SvgFinder src="right-circle-arrow.svg" />
      </button>
    </nav>
  );
};
