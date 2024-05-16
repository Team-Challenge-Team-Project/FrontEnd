import './productCard.style.css'
import { ImageFinder, SvgFinder } from '../../Helper'


const ProductCard = () => {
  return <div className='product__count'>
    <div className='product__like'>
      <SvgFinder
        src='heart.svg'
        className='product__like_svg'
        alt='heart'
      />
    </div>
    <div className='product__img'>
      <ImageFinder
        src='girl.jpg'
        className='product__img_com'
        alt='product'
      />
    </div>
    <h4 className='product__brand'>Brand Name</h4>
    <p className='product__info'>Text Text Text</p>
    <p className='product__prise'>100$</p>
  </div>
}
export default ProductCard