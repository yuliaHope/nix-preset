import classnames from 'classnames';
import { Link } from 'react-router-dom';

import { Rating } from '../rating';
import { Price } from './Price';
import { AddToCartButton } from '../add-to-cart-cta';

import './index.css';

export function PresetCard({ title, rating, id, reviews, price, salePrice, img, className, addToCart, showRating = true }) {
  return (
    <Link className={classnames('preset-card', className)} target="_blank" to={`/product/${id}`}>
      <div className="card-body">
        <img src={img} alt="preset-cover" />
        <div className="title">{title}</div>
        {showRating && <Rating rating={rating} reviews={reviews} />}
        <Price price={price} salePrice={salePrice} />
        {!!addToCart && <AddToCartButton id={id}/>}
      </div>
      <div className="card-background"></div>
    </Link>
  );
}
