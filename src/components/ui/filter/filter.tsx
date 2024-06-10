import './filter.style.css'
import { SvgFinder } from '../../../Helper'
import { FilterItem } from './filterItem/filterItem'


export const Filter = () => {
  return (
    <aside className='filter'>
      <div className='filter__count'>
        <div className='filter__title_count'>
          <h4>Filter</h4>
          <SvgFinder src='close.svg' className='filter__close' alt='close' />
        </div>
        <div className='filter__item_count'>
          <FilterItem />
          <FilterItem />
          <FilterItem/>
          <FilterItem/>
        </div>
        <div className='filter__buttons'>
          <button className='filter__button_clear'>Clear All</button>
          <button className='filter__buttons_apply'>Apply</button>
        </div>
      </div>
    </aside>
  )
}
