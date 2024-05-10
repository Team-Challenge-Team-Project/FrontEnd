import './Product.style.css'
import { ImageFinder, SvgFinder } from '../../Helper'

export const Product = () => {
  return (<div className='product'>
    <section className='main__product'>
      <ImageFinder src='Rectangle 634 (1).png' alt='img' className='main__product_img' />
      <div className='main__product_info'>
        <div className='product__brand_count'>
          <h2 className='product__brand_title'>Chocoolate</h2>
          <div className='product__brand_like'>
            <SvgFinder src='heart.svg' className='product__brand_svg' alt='svg' />
          </div>
        </div>
        <div className='product__type_count'>
          <h3 className='product__type_title'>Cotton Denim Jacket</h3>
          <p className='product__type_prise'>£ 154.00</p>
        </div>
        <div className='product__size_count'>
          <p className='product__size_title'>Size</p>
          <p className='product__guide_prise'>Size Guide</p>
        </div>
        <div className='product__size_buttons_count'>
          <button className='product__size_button'>XS</button>
          <button className='product__size_button'>S</button>
          <button className='product__size_button'>M</button>
          <button className='product__size_button'>L</button>
          <button className='product__size_button'>XL</button>
          <button className='product__size_button'>XLL</button>
        </div>
        <button>Only one left</button>
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </section>
  </div>)
}
