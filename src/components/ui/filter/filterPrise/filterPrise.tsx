import './filterPrise.style.css'
import { SvgFinder } from '../../../../Helper'


export const FilterPrise = () => {
  return (
    <div className='filter__prise'>
      <div className='filter__prise_title'>
        <h5>Category</h5>
        <SvgFinder src='filter-arrow.svg' className='filter__prise_arrow' alt='close' />
      </div>
    </div>
  )
}
