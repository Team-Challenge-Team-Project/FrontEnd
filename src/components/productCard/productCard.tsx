import './productCard.style.css';
import { ImageFinder } from '../../Helper';
import Icon from '../ui/icon';
import { Card, TPropsCard } from '../ui/card';

type TProps = TPropsCard & {
  src?: string;
  title?: string;
  description?: string;
  price?: string;
};

export const ProductCard = ({
  src = 'girl.jpg',
  title = 'Brand Name',
  description = 'Text Text Text',
  price = '£154',
  ...props
}: TProps) => {
  return (
    <Card
      {...props}
      coverClassName="product__head"
      cover={
        <>
          <div className="product__head-like">
            <Icon type="Heart" className="product__head-like_svg" />
          </div>
          <div className="product__head-img">
            <ImageFinder
              src={src}
              className="product__head-img_image"
              alt="product"
            />
          </div>
        </>
      }
      bodyClassName="product__body"
      body={
        <>
          <h4 className="product__brand">{title}</h4>
          <p className="product__info">{description}</p>
          <p className="product__price">{price}</p>
        </>
      }
    />
  );
};
