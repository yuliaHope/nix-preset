import { PresetCard } from '../../components/preset';

const products = [
  {
    title: 'MOBILE MASTER COLLECTION (Mobile & Desctop)',
    rating: 4,
    reviews: 123,
    price: 59,
    salePrice: 8,
    img: 'https://nixpreset.com/wp-content/uploads/2021/01/Mask-6.png',
  },
  {
    title: 'TRAVEL TONES MOBILE PRESET PACK 1.0',
    rating: 5,
    reviews: 12,
    price: 19,
    img: 'https://nixpreset.com/wp-content/uploads/2021/01/Mask-5.png',
  },
  {
    title: 'TRAVEL TONES MOBILE PRESET PACK 2.0',
    rating: 5,
    reviews: 12,
    price: 19,
    img: 'https://nixpreset.com/wp-content/uploads/2021/01/Mask-4.png',
  },
  {
    title: 'TRAVEL TONES MOBILE PRESET PACK 4.0',
    rating: 5,
    reviews: 12,
    price: 19,
    img: 'https://nixpreset.com/wp-content/uploads/2021/01/Mask-6.png',
  },
  {
    title: 'TRAVEL TONES MOBILE PRESET PACK 5.0',
    rating: 5,
    reviews: 12,
    price: 19,
    salePrice: 8,
    img: 'https://nixpreset.com/wp-content/uploads/2021/01/Mask-1.png',
  },
];

export function ShopPage() {
  return (
    <>
      <div className="app-container">
        <h2 className="section-title">SHOP</h2>
        <div className="row">
          {products.map((product) => (
            <PresetCard className="col-md-4 col-sm-12" addToCart {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
