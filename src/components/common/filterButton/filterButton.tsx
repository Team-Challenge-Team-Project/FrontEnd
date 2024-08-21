import './filterButton.style.css';
import { SvgFinder } from '../../../Helper';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { filterSlice } from '../../../store/features/filterSlice';
import { RootState } from '../../../store/store';
import { useEffect } from 'react';

export const FilterButton = () => {
  const dispatch = useAppDispatch();
  const { openFilter } = filterSlice.actions;
  const isOpen = useAppSelector((state: RootState) => state.filter.isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const handleClick = () => {
    dispatch(openFilter(!isOpen));
  };

  return (
    <button className="filter__button" onClick={handleClick}>
      Filters <SvgFinder src="filter.svg" className="" alt="filter" />
    </button>
  );
};
