import { Rating } from '../rating';

import './index.css';

export function ReviewCard({ image, text, name, rating, style }) {
    return (
      <div className="review-item" style={style}>
        <img src={`${process.env.REACT_APP_API}${image.url}`} alt="contact" />
        <div className="review-card">
          <h6>{name}</h6>
          <Rating rating={rating} />
          <div>{text}</div>
        </div>
      </div>
    );
  }