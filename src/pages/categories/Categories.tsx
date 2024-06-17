import { ImageFinder, SvgFinder } from '../../Helper'
import { Breadcrumb } from '../../components/common/breadcrumb/breadcrumb'
import { Pagination } from '../../components/common/pagination/pagination'
import ProductCard from '../../components/productCard/productCard'
import { categoriesData } from '../../utils/fakeCategoriesData'
import './Categories.style.css'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { filterSlice } from '../../store/features/filterSlice'
import { RootState } from '../../store/store'

export const Categories = () => {

  const dispatch = useAppDispatch ()
  const { openFilter } = filterSlice.actions
  const isOpen = useAppSelector ((state: RootState) => state.filter.isOpen)

  const handleClick = () => {
    dispatch (openFilter (!isOpen))
  }

  return (
    <main className='categories'>
      <Breadcrumb />

      <div className='categories__filters'>
        <div className='categories__row'>
          <button className='categories__filters-button-filters' onClick={handleClick}>
            Filters <SvgFinder src='filter.svg' className='' alt='filter' />
          </button>
          <button className='categories__filters-button-sort'>
            Sort by
            <SvgFinder src='arrow-bottom.svg' />
          </button>
        </div>
      </div>

      <div className='categories__cards cards'>
        {categoriesData.map ((category) => (
          <ProductCard src={category.img} key={category.id} />
        ))}
      </div>

      <div className='categories__pagination'>
        <Pagination />
      </div>
    </main>
  )
}
