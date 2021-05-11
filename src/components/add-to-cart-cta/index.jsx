import classnames from 'classnames';
import { Button } from 'reactstrap';

import './index.css';

export function AddToCartButton({ className, id, price, url, img, title, fileId, onClick, category, ...props }) {
  return (
    <Button
      onClick={onClick}
      className={classnames('add-to-cart snipcart-add-item', className)}
      data-item-id={id}
      data-item-price={price}
      data-item-url={url}
      data-item-image={`${process.env.REACT_APP_API}${img}`}
      data-item-name={title}
      data-item-file-guid={fileId}
      data-item-categories={category}
      {...props}
    >
      Add to cart
    </Button>
  );
}
