import classnames from 'classnames';
import { Link } from 'react-router-dom';

import { Rating } from '../rating';
import { Price } from './Price';
import { AddToCartButton } from '../add-to-cart-cta';

import './index.css';

export function PresetCard({
  title,
  id,
  reviews = [],
  price,
  salePrice,
  fileId,
  img = {},
  className,
  addToCart,
  category,
  showRating = true,
  ...props
}) {
  const rating = reviews.reduce((acc, cur) => acc + cur.rating, 0);
  return (
    <>
      <Link {...props} className={classnames('preset-card', className)} target="_blank" to={`/product/${id}`}>
        <div className="card-body">
          <img src={`${process.env.REACT_APP_API}${img.url}`} alt="preset-cover" />
          <div className="title">{title}</div>
          {showRating && <Rating rating={rating} reviews={reviews.length} />}
          <Price price={price} salePrice={salePrice} />
          {!!addToCart && (
            <AddToCartButton
              id={id}
              price={salePrice || price}
              title={title}
              url={`${process.env.REACT_APP_API}/snipcartParser`}
              img={img.url}
              fileId={fileId}
              category={category}
            />
          )}
        </div>
        <div className="card-background"></div>
      </Link>
    </>
  );
}
