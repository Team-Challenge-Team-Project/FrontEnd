import './header.style.css';
import { SvgFinder } from '../../../Helper';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar__count">
        <ul className="nav__list">
          <li className="nav__list_item">Women</li>
          <li className="nav__list_item">Men</li>
          <li className="nav__list_item">The Journal</li>
        </ul>
      </nav>
      <h1 className="title">
        <Link to={'/'}>WEARHOUSE</Link>
      </h1>
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
        <div className="links__button">
          <SvgFinder
            src="login.svg"
            className="links__button_img"
            alt="login"
          />
        </div>
        <div className="links__button">
          <SvgFinder src="bag.svg" className="links__button_img" alt="bag" />
        </div>
      </div>
    </header>
  );
};
