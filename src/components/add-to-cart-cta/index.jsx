import classnames from 'classnames';
import { Button } from 'reactstrap';

import useLocalStorage from 'use-local-storage';

import './index.css';

const LS_KEY_CART = 'cartItems';

export function AddToCartButton({ className, id }) {
  const [_, setCartItem] = useLocalStorage(LS_KEY_CART, []);
  const handleClick = (e) => {
    e.preventDefault();
    const prevItems = JSON.parse(localStorage.getItem(LS_KEY_CART));
    const newValue = [...prevItems, id];
    setCartItem(newValue);
    const setItemEvent = new Event('setLSItemEvent');
    setItemEvent.key = LS_KEY_CART;
    setItemEvent.value = newValue;
    window.dispatchEvent(setItemEvent);
  };

  return (
    <Button className={classnames('add-to-cart', className)} onClick={handleClick}>
      Add to cart
    </Button>
  );
}
