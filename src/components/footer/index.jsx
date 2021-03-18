import { Navigation } from '../header/navigation';
import { ReactComponent as InstagramIcon } from '../../assets/images/instagram.svg';
import { ReactComponent as PaymentsIcon } from '../../assets/images/payments.svg';

import './index.css';

export function Footer() {
  return (
    <footer>
      <div className="footer-navigation-container">
        <div className="app-container footer-navigation">
          <a className="ig-link" href="https://www.instagram.com/yulia_galuzo/" target="_blank" rel="noreferrer">
            <InstagramIcon />
            instagram
          </a>
          <Navigation />
          <div className="payment-methods">
            <PaymentsIcon />
          </div>
        </div>
      </div>
      <div className="copyright">© 2021 Nix presets</div>
    </footer>
  );
}
