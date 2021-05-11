import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { IsMobileContext } from '../../context';
import { PresetCard } from '../../components/preset';
import { Carousel, Arrow } from '../../components/carousel';
import { ReviewCard } from '../../components/review-card';
import { ReactComponent as LeftArrow } from '../../assets/images/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../assets/images/right-arrow.svg';
import igImg1 from '../../assets/images/ig-image-1.png';
import igImg2 from '../../assets/images/ig-image-2.png';
import igImg3 from '../../assets/images/ig-image-3.png';
import igImg4 from '../../assets/images/ig-image-4.png';

import './index.css';

const igImages = [{ src: igImg1 }, { src: igImg2 }, { src: igImg3 }, { src: igImg4 }, { src: igImg1 }];

export function HomePage() {
  const isMobile = useContext(IsMobileContext);
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/all-presets`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
    fetch(`${process.env.REACT_APP_API}/reviews`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <>
      <div className="banner">
        <div className="app-container">
          <h2>TAKE YOUR EDITING</h2>
          <h2>TO THE NEXT LEVEL</h2>
          <p>Lightroom presets</p>
          <Link to="/shop" className="btn">
            shop now
          </Link>
        </div>
      </div>
      {!!products.length && (
        <div className="app-container tones">
          <h2 className="section-title">TOP{isMobile && ' MOBILE'} TONES</h2>
          <div className="cards-grid">
            {products.map((product) => (
              <PresetCard key={product.id} addToCart {...product} />
            ))}
          </div>
        </div>
      )}
      <div className="app-container reviews">
        <Carousel items={reviews} settings={reviewCarouselSettings} component={ReviewCarouselItem} />
      </div>
      <div className="app-container follow-us">
        <h2 className="section-title">FOLLOW US</h2>
        <a href="https://www.instagram.com/yulia_galuzo/" target="_blank" rel="noreferrer" className="ig-tag">
          @Nix_Presets
        </a>
        <Carousel items={igImages} settings={followUsCarouselSettings} component={FollowUsCarouselItem} />
      </div>
    </>
  );
}

function ReviewCarouselItem(props) {
  return <ReviewCard {...props} style={{ width: 213 }} />;
}

const reviewCarouselSettings = {
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
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

function FollowUsCarouselItem({ src, className }) {
  return <img className={className} alt="instagram look" style={{ width: 271 }} src={src} />;
}

const followUsCarouselSettings = {
  className: 'slider variable-width',
  variableWidth: true,
  dots: false,
  infinite: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
      },
    },
  ],
};
