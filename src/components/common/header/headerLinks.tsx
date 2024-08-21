import { SvgFinder } from 'src/Helper';
import Auth from '../auth/auth';
import Button from 'src/components/ui/button';
import { useDispatch } from 'react-redux';
import { toggleCart } from 'src/store/features/cartSlice';

type THeaderLinksProps = {
  className?: string;
};
export const HeaderLinks = ({
  className = 'links__count',
}: THeaderLinksProps) => {
  const dispatch = useDispatch();

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  return (
    <div className={className}>
      <div className="links__button">
        <SvgFinder
          src="search.svg"
          className="links__button_img"
          alt="search"
        />
      </div>
      <Button.Link to="/favorites" icon="Heart" className="links__button" />
      <div className="links__button">
        <SvgFinder src="earth.svg" className="links__button_img" alt="earth" />
      </div>
      <Auth />

      <Button.Icon
        icon="Bag"
        onClick={handleCartClick}
        className="links__button"
      />
    </div>
  );
};
