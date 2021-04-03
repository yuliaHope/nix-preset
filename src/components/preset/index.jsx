import classnames from 'classnames';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Rating } from '../rating';
import { Price } from './Price';

import './index.css';

export function PresetCard({ title, rating, id, reviews, price, salePrice, img, className, addToCart, showRating = true }) {
  return (
    <Link className={classnames('preset-card', className)} target="_blank" to={`/product/${id}`}>
      <div className="card-body">
        <img src={img} alt="preset-cover" />
        <div className="title">{title}</div>
        {showRating && <Rating rating={rating} reviews={reviews} />}
        <Price price={price} salePrice={salePrice} />
        {!!addToCart && <Button className="add-to-cart">Add to cart</Button>}
      </div>
      <div className="card-background"></div>
    </Link>
  );
}
