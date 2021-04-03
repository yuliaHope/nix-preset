import { PresetCard } from '../../components/preset';

import coverImg1 from '../../assets/images/cover-1.jpg';
import coverImg2 from '../../assets/images/cover-2.png';
import coverImg3 from '../../assets/images/cover-3.png';
import coverImg4 from '../../assets/images/cover-4.png';
import coverImg5 from '../../assets/images/cover-5.png';

import './index.css';

const products = [
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

export function SavePage() {
  return (
    <>
      <div className="app-container">
        <h2 className="save-title">BUY 2 GET 1 FREE!</h2>
        <p className="save-sub-title">every 3 preset is free</p>
        <div className="cards-grid">
          {products.map((product) => (
            <PresetCard  addToCart {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
