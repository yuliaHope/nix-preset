import useLocalStorage from 'use-local-storage';
import { Link } from 'react-router-dom';

import empty_cart from '../../assets/images/empty_cart.png';

import './index.css';

export function Cart({}) {
  const [cartItems] = useLocalStorage('cartItems', []);

  if (!cartItems.length) {
    return (
      <div className="app-container empty-cart">
        <img src={empty_cart} alt="empty cart"></img>
        <p>YOUR CART IS EMPTY</p>
        <Link to="/shop" className="btn add-to-cart">
          SHOP OUR PRODUCTS
        </Link>
      </div>
    );
  }

  return <div className="app-container cart"></div>;
}
