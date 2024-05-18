import './productCard.style.css';
import { ImageFinder, SvgFinder } from '../../Helper';

type Props = {
  src: string;
};

const ProductCard = ({ src }: Props) => {
  console.log(src);

  return (
    <div className="product__count">
      <div className="product__like">
        <SvgFinder src="heart.svg" className="product__like_svg" alt="heart" />
      </div>
      <div className="product__img">
        <ImageFinder src={src} className="product__img_com" alt="product" />
      </div>
      <div className="product__header">
        <h4 className="product__title">Brand Name</h4>
        <p className="product__info">Text Text Text</p>
        <p className="product__prise">100$</p>
      </div>
    </div>
  );
};
export default ProductCard;
