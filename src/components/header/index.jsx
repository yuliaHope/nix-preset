import { Navigation } from './navigation';
import { ReactComponent as FireIcon } from '../../assets/images/fire.svg';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import { ReactComponent as Search } from '../../assets/images/search.svg';
import { ReactComponent as Bag } from '../../assets/images/bag.svg';

import './index.css';

export function Header() {
  return (
    <header>
      <div className="promotion">
        <FireIcon />
        BUY 2 GET 1 BUNDLE SALE ENDS SOON
        <FireIcon />
      </div>
      <h1 className="header-title">Nix - Mobile presets</h1>
      <div className="header-navigation-container">
        <div className="app-container header-navigation">
          <Logo />
          <Navigation />
          <div className="search-shop">
            <Search className="search-icon" />
            <Bag className="bag-icon" />
          </div>
        </div>
      </div>
    </header>
  );
}
