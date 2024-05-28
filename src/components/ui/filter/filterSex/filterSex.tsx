import './filterSex.style.css'
import { SvgFinder } from '../../../../Helper'


export const FilterSex = () => {
  return (
    <div className='filter__item'>
      <div className='filter__item_title'>
        <h5>Category</h5>
        <SvgFinder src='filter-arrow.svg' className='filter__item_arrow' alt='close' />
      </div>
    </div>
  )
}
