import './Home.styled.css'
import ProductCard from '../../components/productCard/productCard'
import JournalCard from '../../components/jornalCard/journalCard'
import { ImageFinder, SvgFinder } from '../../Helper'
import { FilerButton } from '../../components/common/filerButton/filterButton'


export const Home = () => {

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
        <FilerButton/>
        <button className='filter__button'>Women</button>
        <button className='filter__button'>Men</button>
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
