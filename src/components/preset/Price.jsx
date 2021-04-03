import classnames from 'classnames';

import './Price.css';

export function Price({ price, salePrice, showLabel = true }) {
  return (
    <div className="price-wrapper">
      {salePrice !== null && <span className="price">${salePrice}</span>}
      <span className={classnames('price', { 'old-price': salePrice !== null })}>${price}</span>
      {showLabel && salePrice !== null && <span className="sale">sale</span>}
    </div>
  );
}
