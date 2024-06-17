import './Home.styled.css'
import ProductCard from '../../components/productCard/productCard'
import JournalCard from '../../components/jornalCard/journalCard'
import { ImageFinder, SvgFinder } from '../../Helper'
import { filterSlice } from '../../store/features/filterSlice'
import { RootState } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../store/hooks'


export const Home = () => {

  const dispatch = useAppDispatch ()
  const { openFilter } = filterSlice.actions
  const isOpen = useAppSelector ((state: RootState) => state.filter.isOpen)

  const handleClick = () => {
    dispatch (openFilter (!isOpen))
  }

  return <div className='main'>
    <section className='main-board'>
      <div className='main-board__count'>
        <div className='main-board__button-count'>
          <button className='main-board__button'>Shop for Her</button>
          <button className='main-board__button'>Shop for Him</button>
        </div>
      </div>
    </section>
    <section className='new-in'>
      <h3 className='new-in__title'>New In</h3>
      <div className='filter__buttons_count'>
        <button className='filter__button filter__button_filters' onClick={handleClick}>
          <p>Filters</p>
          <svg className='arrow-svg' width='20' height='13' viewBox='0 0 20 13' fill='none'
               xmlns='http://www.w3.org/2000/svg'>
            <path d='M0.75 0.780762C0.551088 0.780762 0.360322 0.859779 0.21967 1.00043C0.0790175 1.14108 0 1.33185
              0 1.53076C0 1.72967 0.0790175 1.92044 0.21967 2.06109C0.360322 2.20174 0.551088 2.28076
              0.75 2.28076H19.25C19.4489 2.28076 19.6397 2.20174 19.7803 2.06109C19.921 1.92044 20 1.72967
              20 1.53076C20 1.33185 19.921 1.14108 19.7803 1.00043C19.6397 0.859779 19.4489 0.780762 19.25
              0.780762H0.75ZM4 6.53076C4 6.33185 4.07902 6.14108 4.21967 6.00043C4.36032 5.85978 4.55109 5.78076 4.75
              5.78076H15.25C15.4489 5.78076 15.6397 5.85978 15.7803 6.00043C15.921 6.14108 16 6.33185 16 6.53076C16
              6.72967 15.921 6.92044 15.7803 7.06109C15.6397 7.20174 15.4489 7.28076 15.25 7.28076H4.75C4.55109 7.28076
              4.36032 7.20174 4.21967 7.06109C4.07902 6.92044 4 6.72967 4 6.53076ZM8 11.4688C8 11.2698 8.07902 11.0791
              8.21967 10.9384C8.36032 10.7978 8.55109 10.7188 8.75 10.7188H11.25C11.4489 10.7188 11.6397 10.7978 11.7803
               10.9384C11.921 11.0791 12 11.2698 12 11.4688C12 11.6677 11.921 11.8584 11.7803 11.9991C11.6397 12.1397
               11.4489 12.2188 11.25 12.2188H8.75C8.55109 12.2188 8.36032 12.1397 8.21967 11.9991C8.07902 11.8584 8
               11.6677 8 11.4688Z"
                fill="black"'
            />
          </svg>
        </button>
        <button className='filter__button'>Women</button>
        <button className='filter__button'>Men</button>
        <div className='filter__sort'>
          <p> Sort by</p>
          <SvgFinder
            src='arrow-bottom.svg'
            className='arrow__bottom'
            alt='arrow'
          />
        </div>
      </div>
      <div className='products__count cards'>
        <ProductCard src='newin1.jpeg' />
        <ProductCard src='newin2.jpeg' />
        <ProductCard src='newin3.jpeg' />
        <ProductCard src='newin4.jpeg' />
      </div>
      <button className='new-products__button'>Shop New Arrivals</button>
    </section>
    <section className='our-looks__count'>
      <h3 className='our-looks__title'>Our Looks</h3>
      <div className='carousel__count'>
        <div className='carousel__arrow carousel__left-arrow'>
          <SvgFinder
            src='arrow-left.svg'
            className='arrow__left'
            alt='arrow'
          />
        </div>
        <div className='carousel__main-photo'>
          <ImageFinder
            src='Rectangle 636.png'
            className='big__img'
            alt='IMG'
          />
        </div>
        <div className='carousel__more-info'>
          <ProductCard src='newin1.jpeg' />
          <button className='carousel__button'>View This Product</button>
          <div className='carousel__pagination_count'>
            <div className='carousel__pagination carousel__pagination_active'></div>
            <div className='carousel__pagination'></div>
            <div className='carousel__pagination'></div>
          </div>
        </div>
        <div className='carousel__arrow carousel__right-arrow'>
          <SvgFinder
            src='arrow-right.svg'
            className='arrow__right'
            alt='arrow'
          />
        </div>
      </div>
    </section>
    <section className='journal'>
      <h3 className='journal__title'>The Journal</h3>
      <div className='journal__count'>
        <JournalCard />
        <JournalCard />
        <JournalCard />
        <JournalCard />
      </div>
      <button className='journal__button'>View More Stories</button>
    </section>
  </div>
}
