import { useContext } from 'react';
import { Navigation } from '../header/navigation';
import { IsMobileContext } from '../../context';
import { ReactComponent as InstagramIcon } from '../../assets/images/instagram.svg';
import { ReactComponent as PaymentsIcon } from '../../assets/images/payments.svg';

import './index.css';

export function Footer() {
  const isMobile = useContext(IsMobileContext);
  return (
    <footer>
      {isMobile && (
        <div className="payment-methods">
          <PaymentsIcon />
        </div>
      )}
      <div className="footer-navigation-container">
        <div className="app-container footer-navigation">
          <a className="ig-link" href="https://www.instagram.com/yulia_galuzo/" target="_blank" rel="noreferrer">
            <InstagramIcon />
            instagram
          </a>
          <Navigation className="desctop-menu" />
          {!isMobile && (
            <div className="payment-methods">
              <PaymentsIcon />
            </div>
          )}
        </div>
      </div>
      <div className="copyright">© 2021 Nix presets</div>
    </footer>
  );
}
