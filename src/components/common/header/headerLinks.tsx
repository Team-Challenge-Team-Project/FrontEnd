import { SvgFinder } from 'src/Helper';
import Auth from '../auth/auth';
import Button from 'src/components/ui/button';
import { useAppDispatch } from '../../../store/hooks'
import { toggleCart } from 'src/store/features/cartSlice';

type THeaderLinksProps = {
  className?: string;
  onClick?: () => void;
};
export const HeaderLinks = ({
  className = 'links__count',
  onClick,
}: THeaderLinksProps) => {
  const dispatch = useAppDispatch();

  const handleCartClick = () => {
    dispatch(toggleCart());
    if (onClick) onClick();
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
      <Button.Link
        to="/favorites"
        icon="Heart"
        onClick={onClick}
        className="links__button"
      />
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
