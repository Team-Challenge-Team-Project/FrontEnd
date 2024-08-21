import Typography, { ETypographyVariant } from 'src/components/ui/typography';
import './Favorites.styled.css';
import Button from 'src/components/ui/button';
import { useNavigate } from 'react-router-dom';

// type TFavoritesProps = {
//     ''
// };

export const Favorites = () => {
  const favorites = [];
  const navigate = useNavigate();
  if (favorites.length === 0) {
    return (
      <div className="favorites">
        <Typography
          as="h3"
          variant={ETypographyVariant.H3Medium}
          className="favorites__empty"
        >
          Want to save the pieces you love?
          <Typography as="p">
            Simply click on the heart icon found on the product image and it
            will be added here.
          </Typography>
        </Typography>
        <Button
          classes={{ button: 'favorites__btn-continue' }}
          onClick={() => navigate('/')}
        >
          CONTINUE BROWSING
        </Button>
      </div>
    );
  }
  return (
    <div className="favorites">
      <Typography
        as="h2"
        variant={ETypographyVariant.H2BoldHeading}
        className="favorites__heading"
      >
        Favorites
      </Typography>

      <div className="favorites__container"></div>
    </div>
  );
};
