import Rating from 'react-rating';
import classnames from 'classnames';
import { Button } from 'reactstrap';
import { ReactComponent as StarIcon } from '../../assets/images/star.svg';

import './index.css';

export function PresetCard({ title, rating, reviews, price, salePrice, img, className, addToCart }) {
  return (
    <div className={classnames('preset-card', className)}>
      <div className="card-body">
        <img src={img} alt="preset-cover" />
        <div className="title">{title}</div>
        {typeof rating === 'number' && (
          <div className="rating">
            <Rating
              emptySymbol={<StarIcon className="star empty-star" />}
              fullSymbol={<StarIcon className="star" />}
              initialRating={rating}
            />
            <span className="rating-counter">({reviews})</span>
          </div>
        )}
        <div className="price-wrapper">
          {!!salePrice && <span className="price">${salePrice}</span>}
          <span className={classnames('price', { 'old-price': !!salePrice })}>${price}</span>
          {!!salePrice && <span className="sale">sale</span>}
        </div>
        {!!addToCart && <Button className="add-to-cart">Add to cart</Button>}
      </div>
      <div className="card-background"></div>
    </div>
  );
}
