import { Button } from 'reactstrap';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Carousel, Arrow } from '../../components/carousel';
import { IsMobileContext } from '../../context';
import { Rating } from '../../components/rating';
import { AddToCartButton } from '../../components/add-to-cart-cta';
import { PresetCard } from '../../components/preset';
import { Price } from '../../components/preset/Price';
import { ReactComponent as LeftArrow } from '../../assets/images/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../assets/images/right-arrow.svg';
import { ReviewCard } from '../../components/review-card';

import './index.css';

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

export function ProductPage() {
  const isMobile = useContext(IsMobileContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/all-presets/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
    fetch(`${process.env.REACT_APP_API}/all-presets?id_nin=${id}&_limit=3`)
      .then((response) => response.json())
      .then((data) => {
        setDeals(data);
        const query = data.reduce((acc, cur) => `${acc}&id_nin=${cur.id}`, '');
        fetch(`${process.env.REACT_APP_API}/all-presets?id_nin=${id}${query}&_limit=3`)
          .then((response) => response.json())
          .then((data) => {
            setRelated(data);
          });
      });
  }, [id]);

  const { title, img = {}, examples = [], rating, reviews = [] } = product;
  const { dealPrice, dealSalePrice } = deals.length
    ? [product, ...deals].reduce(
        (acc, cur) => {
          acc.dealPrice += cur.price;
          acc.dealSalePrice += cur.salePrice || 0;
          return acc;
        },
        { dealPrice: 0, dealSalePrice: 0 }
      )
    : {};

  return (
    <div className="app-container product">
      <div className="row product-data">
        <img className="product-cover" src={`${process.env.REACT_APP_API}${img.url}`} alt="product" />
        <div>
          <ProductDetailsCard {...product}>
            {isMobile && (
              <Carousel
                items={[...examples, ...examples]}
                settings={examplesCarouselSettings}
                component={ExamplesCarouselItem}
              />
            )}
          </ProductDetailsCard>
          <h1 className="product-title">TRANSFORM YOUR IMAGES WITH ONE PRESETS "BLK TONES" PRESET PACK!</h1>
        </div>
      </div>
      <div className="row">
        {!isMobile && (
          <div className="product-examples">
            {examples.map(({ url }) => (
              <img className="" src={`${process.env.REACT_APP_API}${url}`} alt="example" />
            ))}
          </div>
        )}
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
      {!!deals.length && (
        <section className="deal-wrapper">
          <h2>
            <a href="#deal">buy 2 get 2 free!</a>
          </h2>
          <div className="deal">
            {[product, ...deals].map((product) => (
              <PresetCard showRating={false} {...product} />
            ))}
          </div>
          <div className="deal-total">
            <h6>Total:</h6>
            <Price showLabel={false} price={dealPrice} salePrice={dealSalePrice} />
          </div>
          <AddToCartButton
            id={`${id}-deal`}
            price={dealSalePrice || dealPrice}
            title={`${title} DEAL`}
            url={`/product/${id}#deal`}
            img={img.url}
          />
        </section>
      )}
      {!!reviews.length && (
        <section className="reviews-wrapper">
          <div className="info">
            <Rating text="Reviews" rating={rating} reviews={reviews} />
            <Button className="review-btn">Write a review</Button>
          </div>
          {isMobile && <hr />}
          <div className="product-reviews">
            {reviews.map((review) => (
              <ReviewCard {...review} />
            ))}
          </div>
        </section>
      )}

      {!!related.length && (
        <section className="also-like">
          <h3>YOU MAY ALSO LIKE</h3>
          <div className="cards-grid">
            {related.map((product) => (
              <PresetCard {...product} />
            ))}
          </div>
        </section>
      )}
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

const ProductDetailsCard = ({ rating, price, reviews, salePrice, id, children, title, img = {} }) => {
  return (
    <div className="product-details">
      {children}
      <div className="data">
        <div className="product-title">TOP MOBILE TONES</div>
        <Rating rating={rating} reviews={reviews} />
        <Price price={price} salePrice={salePrice} />
        <div className="buttons">
          <AddToCartButton
            className="btn-outline"
            id={id}
            price={salePrice || price}
            title={title}
            url={`/product/${id}`}
            img={img.url}
          />
          <Button className="add-to-cart">Buy it now</Button>
        </div>
      </div>
    </div>
  );
};

function ExamplesCarouselItem({ url, className }) {
  return (
    <img className={className} alt="instagram look" style={{ width: 67 }} src={`${process.env.REACT_APP_API}${url}`} />
  );
}

const examplesCarouselSettings = {
  customPaging: function (i) {
    return <div className="nix-carousel-dot"></div>;
  },
  className: 'slider variable-width',
  variableWidth: true,
  dots: true,
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <Arrow icon={RightArrow} />,
  prevArrow: <Arrow icon={LeftArrow} />,
};
