import './filter.style.css'
import { SvgFinder } from '../../../Helper'
import { FilterItem } from './filterItem/filterItem'
import { filterItemPropsData } from './filertData'


export const Filter = () => {

  return (
    <aside className='filter'>
      <div className='filter__count'>
        <div className='filter__title_count'>
          <h4>Filter</h4>
          <SvgFinder src='close.svg' className='filter__close' alt='close' />
        </div>
        <div className='filter__item_count'>
          {filterItemPropsData.map (i => <FilterItem key={i.id} {...i} />)}
        </div>
        <div className='filter__buttons'>
          <button className='filter__button_clear'>Clear All</button>
          <button className='filter__buttons_apply'>Apply</button>
        </div>
      </div>
    </aside>
  )
}
