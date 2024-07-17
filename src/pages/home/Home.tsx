import './Home.styled.css';
import { ProductCard } from 'src/components/productCard';
import { ETypographyVariant, Typography } from 'src/components/ui/typography';
import Button from 'src/components/ui/button';
import { OurLooksCarousel } from 'src/components/ourLooksCarousel';
import { JournalCard } from 'src/components/journalCard';
import { FilterButton } from '../../components/common/filterButton/filterButton'

export const Home = () => {
  return (
    <div className="main">
      <section className="main-board">
        <div className="main-board__count">
          <div className="main-board__button-count">
            <Button classes={{ button: 'main-board__button' }}>
              Shop for Her
            </Button>
            <Button classes={{ button: 'main-board__button' }}>
              Shop for Him
            </Button>
          </div>
        </div>
      </section>
      <section className="new-in">
        <Typography
          className="new-in__title"
          as="h2"
          variant={ETypographyVariant.H2BoldHeading}
        >
          New In
        </Typography>

        <div className="filter__buttons_count">
          <FilerButton />
          <Button classes={{ button: 'filter__button' }}>Women</Button>
          <Button classes={{ button: 'filter__button' }}>Men</Button>
        </div>
        <div className="products__count cards">
          <ProductCard src="newin1.jpeg" />
          <ProductCard src="newin2.jpeg" />
          <ProductCard src="newin3.jpeg" />
          <ProductCard src="newin4.jpeg" />
        </div>
        <Button classes={{ button: 'new-products__button' }}>
          Shop New Arrivals
        </Button>
      </section>
      <section className="our-looks__count">
        <Typography
          className="our-looks__title"
          as="h2"
          variant={ETypographyVariant.H2BoldHeading}
        >
          Our Looks
        </Typography>
        <OurLooksCarousel />
      </section>
      <section className="journal">
        <Typography
          className="journal__title"
          as="h2"
          variant={ETypographyVariant.H2BoldHeading}
        >
          The Journal
        </Typography>
        <div className="journal__count">
          <JournalCard />
          <JournalCard />
          <JournalCard />
          <JournalCard />
        </div>
        <Button classes={{ button: 'journal__button' }}>
          View More Stories
        </Button>
      </section>
    </div>
  );
};
