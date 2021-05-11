import { useEffect, useState } from 'react';

import { PresetCard } from '../../components/preset';

import './index.css';

export function SavePage() {
  const [products, setProducts] = useState([]);
  const [added, increase] = useState(0);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/all-presets`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <div className="app-container">
        <h2 className="save-title">BUY 2 GET 1 FREE!</h2>
        <p className="save-sub-title">every 3 preset is free</p>
        {!!products.length && (
          <div className="cards-grid">
            {products.map((product) => (
              <PresetCard addToCart {...product} buyPrice={(added % 3) === 2 ? 0 : product.salePrice || product.price} onBuyClick={() => increase(added + 1)} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
