import './filterSize.style.css'
import { SvgFinder } from '../../../../Helper'


export const FilterSize = () => {
  return (
    <div className='filter__size'>
      <div className='filter__size_title'>
        <h5>Category</h5>
        <SvgFinder src='filter-arrow.svg' className='filter__size_arrow' alt='close' />
      </div>
    </div>
  )
}
