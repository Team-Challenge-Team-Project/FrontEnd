import './header.styled.css';
import { SvgFinder } from '../../../Helper';
import { Link } from 'react-router-dom';
import DropDown from '../../ui/dropDown';
import { menuItems } from 'src/utils/headerData';
import { ETypographyVariant, Typography } from 'src/components/ui/typography';
import clsx from 'clsx';
import Auth from '../auth/auth';

export const Header = () => {
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

      <Typography as="h1" variant={ETypographyVariant.H1MediumHeading}>
        <Link to="/">WEARHOUSE</Link>
      </Typography>

      <div className="links__count">
        <div className="links__button">
          <SvgFinder
            src="search.svg"
            className="links__button_img"
            alt="search"
          />
        </div>
        <div className="links__button">
          <SvgFinder
            src="heart.svg"
            className="links__button_img"
            alt="heart"
          />
        </div>
        <div className="links__button">
          <SvgFinder
            src="earth.svg"
            className="links__button_img"
            alt="earth"
          />
        </div>
        <Auth />
        {/* <div className="links__button">
          <SvgFinder
            src="login.svg"
            className="links__button_img"
            alt="login"
          />
        </div> */}
        <div className="links__button">
          <SvgFinder src="bag.svg" className="links__button_img" alt="bag" />
        </div>
      </div>
    </header>
  );
};
