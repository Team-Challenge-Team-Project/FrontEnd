import React, { useState } from 'react';
import clsx from 'clsx';
import './burgerMenu.styled.css';
import { Drawer } from 'src/components/ui/drawer';
import { Tab, Tabs } from 'src/components/ui/tabs/tabs';
import Typography, { ETypographyVariant } from 'src/components/ui/typography';
import { HeaderLinks } from '../header/headerLinks';
import { Link } from 'react-router-dom';
import { menuItems } from 'src/utils/headerData';

export const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <div
        className={clsx('burger-menu__icon', { open: isOpen })}
        onClick={toggleMenu}
      >
        <span className="burger-menu__line" />
        <span className="burger-menu__line" />
        <span className="burger-menu__line" />
      </div>
      <Drawer
        isOpen={isOpen}
        onClose={toggleMenu}
        className={clsx('burger-menu__content', { open: isOpen })}
        closeIcon={false}
      >
        <HeaderLinks
          onClick={toggleMenu}
          className="burger-menu__header-links"
        />
        <div className="burger-menu__header-journal">
          <Link to="/journal" onClick={toggleMenu}>
            The Journal
          </Link>
        </div>
        <Tabs>
          {menuItems.map((menu) => (
            <Tab label={menu.category} key={menu.key}>
              {menu.children.map((item) => (
                <Link
                  key={item}
                  to={`/categories/${menu.category}/${item}`}
                  className="dropdown__panel-item"
                  onClick={toggleMenu}
                >
                  <Typography
                    as="span"
                    color={clsx(item === 'SALE' && 'red')}
                    variant={ETypographyVariant.TextS18Regular}
                  >
                    {item}
                  </Typography>
                </Link>
              ))}
            </Tab>
          ))}
        </Tabs>
      </Drawer>
    </div>
  );
};
