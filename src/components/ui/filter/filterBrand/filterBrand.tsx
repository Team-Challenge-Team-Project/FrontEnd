import './filterBrand.style.css'
import { SvgFinder } from '../../../../Helper'


export const FilterBrand = () => {
  return (
    <div className='filter__brand'>
      <div className='filter__brand_title'>
        <h5>Brand</h5>
        <SvgFinder src='filter-arrow.svg' className='filter__brand_arrow' alt='close' />
      </div>
    </div>
  )
}
