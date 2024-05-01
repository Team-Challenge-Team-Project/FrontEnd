import './productCard.style.css'
import productImg from '../../assets/img/Frame 525.png'
import like from '../../assets/svg/like.svg'


const ProductCard = () => {
  return <div className='product__count'>
    <div className='product__like'>
      <img src={like} alt='like' />
    </div>
    <div className='product__img'>
      <img src={productImg} alt='product' />
    </div>
    <div className='product__brand'>Brand Name</div>
    <div className='product__info'>Text Text Text</div>
    <div className='product__prise'>100$</div>
  </div>
}
export default ProductCard