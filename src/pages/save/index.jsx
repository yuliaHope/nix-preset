import { useEffect, useState } from 'react';

import { PresetCard } from '../../components/preset';

import './index.css';

export function SavePage() {
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
        <h2 className="save-title">BUY 2 GET 1 FREE!</h2>
        <p className="save-sub-title">every 3 preset is free</p>
        {!!products.length && (
          <div className="cards-grid">
            {products.map((product) => (
              <PresetCard addToCart {...product} category="save" />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
