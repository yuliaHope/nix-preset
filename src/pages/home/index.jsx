import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { PresetCard } from '../../components/preset';
import { Carousel } from '../../components/carousel';
import { ReviewCard } from '../../components/review-card';
import { ReactComponent as LeftArrow } from '../../assets/images/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../assets/images/right-arrow.svg';
import igImg1 from '../../assets/images/ig-image-1.png';
import igImg2 from '../../assets/images/ig-image-2.png';
import igImg3 from '../../assets/images/ig-image-3.png';
import igImg4 from '../../assets/images/ig-image-4.png';
import coverImg1 from '../../assets/images/cover-1.jpg';
import coverImg2 from '../../assets/images/cover-2.png';
import coverImg3 from '../../assets/images/cover-3.png';
import coverImg4 from '../../assets/images/cover-4.png';
import coverImg5 from '../../assets/images/cover-5.png';
import ourLook from '../../assets/images/our-look.png';
import review1 from '../../assets/images/review1.png';
import review2 from '../../assets/images/review2.png';
import review3 from '../../assets/images/review3.png';
import review4 from '../../assets/images/review4.png';

import './index.css';

const igImages = [{ src: igImg1 }, { src: igImg2 }, { src: igImg3 }, { src: igImg4 }, { src: igImg1 }];

export const products = [
  {
    title: 'MOBILE MASTER COLLECTION (Mobile & Desctop)',
    id: 1,
    rating: 4,
    reviews: 123,
    price: 59,
    salePrice: 8,
    img: coverImg1,
  },
  {
    title: 'TRAVEL TONES MOBILE PRESET PACK 1.0',
    id: 2,
    rating: 5,
    reviews: 12,
    price: 19,
    salePrice: null,
    img: coverImg2,
  },
  {
    title: 'TRAVEL TONES MOBILE PRESET PACK 2.0',
    id: 3,
    rating: 5,
    reviews: 12,
    price: 19,
    salePrice: 8,
    img: coverImg3,
  },
  {
    title: 'TRAVEL TONES MOBILE PRESET PACK 3.0',
    id: 4,
    rating: 5,
    reviews: 12,
    price: 19,
    salePrice: 8,
    img: coverImg4,
  },
  {
    title: 'TRAVEL TONES MOBILE PRESET PACK 4.0',
    id: 5,
    rating: 5,
    reviews: 12,
    price: 19,
    salePrice: 8,
    img: coverImg5,
  },
  {
    title: 'TRAVEL TONES MOBILE PRESET PACK 5.0',
    id: 6,
    rating: 5,
    reviews: 12,
    price: 19,
    salePrice: 8,
    img: coverImg1,
  },
];

export const reviewItems = [
  {
    name: 'Phoebe B',
    id: 1,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    image: review1,
    rating: 5,
  },
  {
    name: 'Phoebe B',
    id: 1,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    image: review2,
    rating: 5,
  },
  {
    name: 'Phoebe B',
    id: 1,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    image: review3,
    rating: 5,
  },
  {
    name: 'Phoebe B',
    id: 1,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    image: review4,
    rating: 5,
  },
];

export function HomePage() {
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
      <div className="app-container tones">
        <h2 className="section-title">TOP TONES</h2>
        <div className="cards-grid">
          {products.map((product) => (
            <PresetCard key={product.id} addToCart {...product} />
          ))}
        </div>
      </div>
      <div className="app-container reviews">
        <Carousel
          items={[...reviewItems, ...reviewItems]}
          settings={reviewCarouselSettings}
          component={ReviewCarouselItem}
        />
      </div>
      <div className="app-container our-looks">
        <h2 className="section-title">OUR LOOKS</h2>
        <Carousel items={ourLookItems} settings={ourLooksCarouselSettings} component={OurLookCarouselItem} />
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

const ourLookItems = products.map((product) => ({ ...product, src: ourLook }));

function OurLookCarouselItem({ src, ...product }) {
  return (
    <div className="our-looks-item">
      <FollowUsCarouselItem className="our-look-img" src={src} />
      <div>
        <PresetCard key={product.id} {...product} />
        <Link to={`/product/${product.id}`} className="w-100 btn">
          view this product
        </Link>
      </div>
    </div>
  );
}

const ourLooksCarouselSettings = {
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <Arrow icon={RightArrow} />,
  prevArrow: <Arrow icon={LeftArrow} />,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 0.5,
        slidesToScroll: 0.5,
        arrows: false,
      },
    },
  ],
};

function Arrow({ icon: Icon, onClick, className }) {
  return (
    <div className={classnames('slider-arrow', className)} onClick={onClick}>
      <Icon />
    </div>
  );
}

function FollowUsCarouselItem({ src, className }) {
  return <img className={className} alt="instagram look" src={src} />;
}

const followUsCarouselSettings = {
  dots: false,
  infinite: true,
  swipeToSlide: true,
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
