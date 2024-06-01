import { Carousel } from '../../ui/carousel/carousel';
import { ProductCard } from 'src/components/productCard';
import { TLookDataProps } from './types';

export const LookComponent = ({ look }: TLookDataProps) => {
  return (
    <div className="carousel__look">
      <Carousel arrows={false} dots dotsClassName="carousel__pagination">
        {look.map(({ img, title, description, price }) => (
          <ProductCard
            size="middle"
            src={img}
            key={title}
            description={description}
            price={price}
          />
        ))}
      </Carousel>
      <button className="carousel__button">View This Product</button>
    </div>
  );
};
