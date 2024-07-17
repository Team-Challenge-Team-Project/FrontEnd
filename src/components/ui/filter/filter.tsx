import './filter.style.css'
import classNames from 'classnames'
import { SvgFinder } from '../../../Helper'
import { FilterItem } from './filterItem/filterItem'
import { filterItemPropsData } from './filertData'
import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import { filterSlice } from '../../../store/features/filterSlice'
import { RootState } from '../../../store/store'
import { useEffect, useState } from 'react'

export const Filter = () => {
  const dispatch = useAppDispatch ()
  const { openFilter } = filterSlice.actions
  const isOpen = useAppSelector ((state: RootState) => state.filter.isOpen)
  const [isInitialRender, setIsInitialRender] = useState (true)
  const [clearFilter, setClearFilter] = useState (false)

  useEffect (() => {
    setIsInitialRender (false)
  }, [])

  const closeFilter = () => {
    dispatch (openFilter (!isOpen))
  }

  if (isInitialRender) {
    return null
  }

  const resetAllFilter = () => {
    setClearFilter (true)
    setTimeout (() => setClearFilter (false), 0)
  }

  return (
    <aside className={classNames ('filter', { 'filter__open': isOpen })} onClick={closeFilter}>
      <div className={classNames ('filter__count', { 'filter__count__open': isOpen })}
           onClick={e => e.stopPropagation ()}>
        <div className='filter__title_count'>
          <h4>Filter</h4>
          <div className='filter__img_count' onClick={closeFilter}>
            <SvgFinder src='close.svg' className='filter__img_close' alt='close' />
          </div>
        </div>
        <div className='filter__item_count'>
          {filterItemPropsData.map (i => <FilterItem key={i.id} {...i} clearFilter={clearFilter} />)}
        </div>
        <div className='filter__buttons'>
          <button className='filter__button_clear' onClick={resetAllFilter}>Clear All</button>
          <button className='filter__buttons_apply'>Apply</button>
        </div>
      </div>
    </aside>
  )
}
