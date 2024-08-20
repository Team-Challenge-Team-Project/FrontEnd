import './productCard.style.css';
import { ImageFinder } from '../../Helper';
import Icon from '../ui/icon';
import { Card, TCardProps } from '../ui/card';
import Typography, { ETypographyVariant } from '../ui/typography';
import { Link } from 'react-router-dom';

type TProps = TCardProps & {
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
            <Link to="/product">
              <ImageFinder
                src={src}
                className="product__head-img_image"
                alt="product"
              />
            </Link>
          </div>
        </>
      }
      bodyClassName="product__body"
      body={
        <>
          <Link to="/product">
            {' '}
            <Typography
              as="h3"
              className="product__brand"
              variant={ETypographyVariant.TextS18Medium}
            >
              {title}
            </Typography>
          </Link>
          <Typography as="p" className="product__info">
            {description}
          </Typography>
          <Typography as="p" className="product__price">
            {price}
          </Typography>
        </>
      }
    />
  );
};
