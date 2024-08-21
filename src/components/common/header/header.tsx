import './header.styled.css';
import { Link } from 'react-router-dom';
import DropDown from '../../ui/dropDown';
import { menuItems } from 'src/utils/headerData';
import Typography, { ETypographyVariant } from 'src/components/ui/typography';
import clsx from 'clsx';
import { BurgerMenu } from 'src/components/common/burgerMenu';
import { HeaderLinks } from './headerLinks';

export const Header = () => {
  // const dispatch = useDispatch();

  // const handleCartClick = () => {
  //   dispatch(toggleCart());
  // };

  return (
    <header className="header">
      <nav className="nav-bar__count">
        <ul className="nav__list">
          {menuItems.map((menu) => (
            <DropDown
              trigger="hover"
              key={menu.key}
              classes={{ dropDown: 'nav__list-item' }}
            >
              <DropDown.Button
                classes={{ dropDownButton: 'nav__list-item_button' }}
              >
                {menu.category}
              </DropDown.Button>
              <DropDown.Panel
                menu={
                  menu.children &&
                  menu.children.map((item) => (
                    <Link
                      key={item}
                      to={`/categories/${menu.category}/${item}`}
                      className="dropdown__panel-item"
                    >
                      <Typography
                        as="span"
                        color={clsx(item === 'SALE' && 'red')}
                        variant={ETypographyVariant.TextS18Regular}
                      >
                        {item}
                      </Typography>
                    </Link>
                  ))
                }
                classes={{ dropDownPanel: 'nav__list-item_panel' }}
              />
            </DropDown>
          ))}
          <li className="nav__list-item">
            <Link to="/journal">The Journal</Link>
          </li>
        </ul>
      </nav>

      <Typography
        as="h1"
        variant={ETypographyVariant.H1MediumHeading}
        className="header-wearhouse"
      >
        <Link to="/">WEARHOUSE</Link>
      </Typography>

      <HeaderLinks className="links__count" />
      <BurgerMenu />
    </header>
  );
};
