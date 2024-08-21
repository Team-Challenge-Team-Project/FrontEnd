import './Product.style.css';
import { ImageFinder, SvgFinder } from '../../Helper';
import { ProductCard } from 'src/components/productCard';
import Typography, { ETypographyVariant } from 'src/components/ui/typography';
import { Collapse } from 'src/components/ui/collapse';

export const Product = () => {
  return (
    <div className="product">
      <section className="main__product">
        <div className="main__product-img">
          <ImageFinder
            src="Rectangle 634 (1).png"
            alt="img"
            className="main__product-image"
          />
        </div>
        <div className="main__product_info">
          <div className="product__brand_count">
            <Typography
              as="h2"
              className="product__brand_title"
              variant={ETypographyVariant.H2MediumHeading}
            >
              Chocoolate
            </Typography>
            <div className="product__brand_like">
              <SvgFinder
                src="heart.svg"
                className="product__brand_svg"
                alt="svg"
              />
            </div>
          </div>
          <div className="product__type_count">
            <Typography as="h3" className="product__type_title">
              Cotton Denim Jacket
            </Typography>
            {/* <h3 className="product__type_title">Cotton Denim Jacket</h3> */}
            <p className="product__type_prise">£ 154.00</p>
          </div>
          <div className="product__size_count">
            <p className="product__size_title">Size</p>
            <p className="product__guide_prise">Size Guide</p>
          </div>
          <div className="product__size_buttons_count">
            <button className="product__size_button">XS</button>
            <button className="product__size_button">S</button>
            <button className="product__size_button">M</button>
            <button className="product__size_button">L</button>
            <button className="product__size_button">XL</button>
            <button className="product__size_button">XLL</button>
          </div>
          <button className="product__only-one" disabled>
            Only one left
          </button>
          <button className="product__add">Add to Cart</button>
          <button className="product__buy">Buy Now</button>
        </div>
      </section>
      <section className="section__details">
        <div className="details__first-img">
          <ImageFinder src="shirt1.png" alt="img" className="details__img" />
        </div>
        <div className="details__second-img">
          <ImageFinder src="shirt2.png" alt="img" className="details__img" />
        </div>
        <div className="product__description">
          <Collapse title="Details" className="product__details" defaultOpen>
            <p>
              Creamy beige, classic collar design, long sleeves, shimmering
              silver-tone buttons, chest flap pockets, side slit pockets, neat
              hemline, buttoned cuffs
            </p>
          </Collapse>

          <Collapse
            title="Materials and Fit"
            className="product__details"
            defaultOpen
          >
            <div className="product__material_count">
              <div className="product__material_point"></div>
              <p className="product__material">Cotton 100%</p>
            </div>
            <div className="product__material_count">
              <div className="product__material_point"></div>
              <p className="product__material">Durable denim</p>
            </div>
            <div className="product__material_count">
              <div className="product__material_point"></div>
              <p className="product__material">Boxy silhouette</p>
            </div>
            <div className="product__material_count">
              <div className="product__material_point"></div>
              <p className="product__material">True to size</p>
            </div>
            <div className="product__material_count">
              <div className="product__material_point"></div>
              <p className="product__material">
                This garment prioritizes resilience over stretching
              </p>
            </div>
          </Collapse>

          <Collapse
            title="Lorem Ipsum"
            className="product__details"
            defaultOpen
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              facilisis sit amet ipsum ac tincidunt. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.{' '}
            </p>
          </Collapse>
          {/* <div className="product__details">
            <div className="product__details_title">
              <h3>Lorem Ipsum</h3>
              <SvgFinder
                src="arrow-bottom.svg"
                className="product__details_arrow"
                alt="svg"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              facilisis sit amet ipsum ac tincidunt. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.{' '}
            </p>
          </div> */}
        </div>
      </section>
      <section className="product__complete">
        <Typography as="h2" variant={ETypographyVariant.H2BoldHeading}>
          Complete the Look
        </Typography>
        <div className="complete__count">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <section className="product__recently">
        <Typography as="h2" variant={ETypographyVariant.H2BoldHeading}>
          Recently Viewed
        </Typography>
        <div className="recently__count">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  );
};
