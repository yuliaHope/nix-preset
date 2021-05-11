import { useEffect, useState } from 'react';

import { PresetCard } from '../../components/preset';

export function ShopPage() {
  const [products, setProducts] = useState([]);
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
        <h2 className="section-title">SHOP</h2>
        {!!products.length && (
          <div className="cards-grid">
            {products.map((product) => (
              <PresetCard key={product.id} addToCart {...product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
