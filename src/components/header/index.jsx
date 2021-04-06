import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useLocalStorage from 'use-local-storage';

import { Navigation } from './navigation';
import { ReactComponent as FireIcon } from '../../assets/images/fire.svg';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import { ReactComponent as Search } from '../../assets/images/search.svg';
import { ReactComponent as Bag } from '../../assets/images/bag.svg';

import './index.css';

const LS_KEY_CART = 'cartItems';

export function Header() {
  const [cartItemsDefault] = useLocalStorage(LS_KEY_CART, []);
  const [cartItems, setCartItems] = useState(cartItemsDefault);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === LS_KEY_CART) {
        setCartItems(e.value);
      }
    };
    window.addEventListener('setLSItemEvent', handler);
    return () => {
      window.removeEventListener('setLSItemEvent', handler);
    };
  });

  return (
    <header>
      <div className="promotion">
        <FireIcon />
        BUY 2 GET 1 BUNDLE SALE ENDS SOON
        <FireIcon />
      </div>
      <h1 className="header-title">Nix - Mobile presets</h1>
      <div className="header-navigation-container">
        <div className="app-container header-navigation">
          <Logo />
          <Navigation />
          <div className="search-shop">
            <Search className="search-icon" />
            <Link to="/cart">
              <Bag className="bag-icon" />
              {!!cartItems && <div className="cart-badge">{cartItems.length}</div>}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
