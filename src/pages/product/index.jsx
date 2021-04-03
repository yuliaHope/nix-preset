import { Button } from 'reactstrap';

import { Rating } from '../../components/rating';
import { products, reviewItems } from '../home';
import { PresetCard } from '../../components/preset';
import { Price } from '../../components/preset/Price';
import { ReviewCard } from '../../components/review-card';
import coverImg1 from '../../assets/images/cover-1.jpg';
import ex1 from '../../assets/images/ex1.png';
import ex2 from '../../assets/images/ex2.png';
import ex3 from '../../assets/images/ex3.png';

import './index.css';

const product = {
  title: 'MOBILE MASTER COLLECTION (Mobile & Desctop)',
  id: 1,
  rating: 4,
  reviews: 123,
  price: 59,
  salePrice: 8,
  img: coverImg1,
  images: [ex1, ex2, ex3, ex1, ex2, ex3, ex1, ex2, ex3, ex1, ex2, ex3],
};

const deals = [product, { ...products[0], salePrice: 0 }, { ...products[1], salePrice: 0 }, products[2]];

const questions = [
  {
    question: 'Is Lightroom Mobile Free?',
    answer:
      'Yes, Lightroom Mobile can be downloaded for free on the iOS App Store and Google Play store and is free to use.',
  },
  {
    question: 'Are they easy to install?',
    answer:
      'Yes! We include a PDF with every download that will walk you through the steps of installing the presets. A video tutorial will be available soon! There are also plenty of YouTube tutorials out now that can walk you through the steps.',
  },
  {
    question: `I'm a beginner, should I buy these??`,
    answer:
      'Yes! Lightroom Presets are for everyone, whether your a Beginner or a Professional Photographer these presets will help speed your photo editing workflow 10x!',
  },
];

// var COL_COUNT = 3;

export function ProductPage({}) {
  const { title, img, images, rating, reviews, salePrice, price } = product;
  const { dealPrice, dealSalePrice } = deals.reduce(
    (acc, cur) => {
      acc.dealPrice += cur.price;
      acc.dealSalePrice += cur.salePrice || 0;
      return acc;
    },
    { dealPrice: 0, dealSalePrice: 0 }
  );

  return (
    <div className="app-container product">
      <div className="row product-data">
        <img className="product-cover" src={img} alt="product" />
        <div>
          <div className="product-details">
            <div className="product-title">TOP MOBILE TONES</div>
            <Rating rating={rating} reviews={reviews} />
            <Price price={price} salePrice={salePrice} />
            <div className="buttons">
              <Button className="btn-outline add-to-cart">Add to cart</Button>
              <Button className="add-to-cart">Buy it now</Button>
            </div>
          </div>
          <h1 className="product-title">TRANSFORM YOUR IMAGES WITH ONE PRESETS "BLK TONES" PRESET PACK!</h1>
        </div>
      </div>
      <div className="row">
        <div className="product-examples">
          {images.map((img) => (
            <img className="" src={img} alt="example" />
          ))}
        </div>
        <section className="description">
          <p className="text-description">
            Designed by professional photographers, these Lightroom Presets make it EASY to enhance your photos colors
            and change the way you edit.
          </p>
          <h7>What's Included:</h7>
          <ul className="included-list">
            <li>1 Professional Presets For Lightroom Mobile </li>
            <li>Instructional PDF on How to Install Presets on the Mobile Lightroom App</li>
            <li>Email Support </li>
          </ul>
          <p className="product-title">FREQUENTLY ASKED QUESTIONS:</p>
          {questions.map((question) => (
            <QA {...question} />
          ))}
        </section>
      </div>
      <section className="deal-wrapper">
        <h2>buy 2 get 2 free!</h2>
        <div className="deal">
          {deals.map((product) => (
            <PresetCard showRating={false} {...product} />
          ))}
        </div>
        <div className="deal-total">
          <h6>Total:</h6>
          <Price showLabel={false} price={dealPrice} salePrice={dealSalePrice} />
        </div>
        <Button className="add-to-cart">Add to cart</Button>
      </section>
      <section className="reviews-wrapper">
        <div className="info">
          <Rating text="Reviews" rating={rating} reviews={reviews} />
        </div>
        <div className="product-reviews">
          {[...reviewItems, ...reviewItems, reviewItems[0], reviewItems[1]].map((review) => (
            <ReviewCard {...review} />
          ))}
        </div>
      </section>
      <section className="also-like">
        <h3>YOU MAY ALSO LIKE</h3>
        <div className="cards-grid">
          {products.slice(-3).map((product) => (
            <PresetCard {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}

const QA = ({ question, answer }) => {
  return (
    <>
      <h7>{question}</h7>
      <p className="text-description">{answer}</p>
    </>
  );
};
