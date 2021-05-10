import { useState, useContext } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import { IsMobileContext } from '../../context';

import { Navigation } from './navigation';
import { ReactComponent as FireIcon } from '../../assets/images/fire.svg';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import { ReactComponent as Search } from '../../assets/images/search.svg';
import { ReactComponent as Bag } from '../../assets/images/bag.svg';

import './index.css';
import classNames from 'classnames';

export function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const isMobile = useContext(IsMobileContext);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <header>
      <div className="promotion">
        <FireIcon />
        BUY 2 GET 1 BUNDLE SALE ENDS SOON
        <FireIcon />
      </div>
      <h1 className="header-title">Nix - Mobile presets</h1>
      <div className="header-navigation-container">
        <Navbar color="faded" light>
          {isMobile && <NavbarToggler onClick={toggleNavbar} />}
          <NavbarBrand href="/">
            <Logo />
          </NavbarBrand>
          {isMobile ? (
            <div className={classNames({'open': !collapsed}, 'mobile-menu')}>
              <Navigation onClick={setCollapsed} />
            </div>
          ) : (
            <Navigation className="desctop-menu" />
          )}
          <div className="search-shop">
            <Search className="search-icon" />
            <div className="snipcart-checkout">
              <Bag className="bag-icon" />
              {/* <div id="my-store-45132370" data-layout="MEDIUM_ICON_COUNTER" className="ec-cart-widget"></div> */}
              <div className="cart-badge snipcart-items-count">0</div>
            </div>
          </div>
        </Navbar>
      </div>
    </header>
  );
}
