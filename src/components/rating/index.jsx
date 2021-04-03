import RatingStars from 'react-rating';
import { ReactComponent as StarIcon } from '../../assets/images/star.svg';

import './index.css';

export function Rating({ rating, reviews, text, readonly = true, ...props }) {
  return (
    typeof rating === 'number' && (
      <div className="rating">
        <RatingStars
          {...props}
          readonly={readonly}
          emptySymbol={<StarIcon className="star empty-star" />}
          fullSymbol={<StarIcon className="star" />}
          initialRating={rating}
        />
        {!!reviews && <span className="rating-counter">{text ? `${reviews} ${text}` : `(${reviews})`}</span>}
      </div>
    )
  );
}
