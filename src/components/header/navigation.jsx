import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { NavItem, Nav } from 'reactstrap';

import { scrollToTop } from '../../utils/scrollTo';
import { ReactComponent as CoinIcon } from '../../assets/images/coin.svg';

export function Navigation({ className, onClick }) {
  const handleClick = (e) => {
    scrollToTop();
    onClick && onClick(e);
  };
  return (
    <Nav navbar className={classNames(className, 'app-navigation')}>
      <NavItem>
        <NavLink onClick={handleClick} activeClassName="selected" to="/home">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink onClick={handleClick} activeClassName="selected" to="/shop">
          Shop
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink onClick={handleClick} activeClassName="selected" to="/save">
          Save <CoinIcon className="coin-icon" />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink onClick={handleClick} activeClassName="selected" to="/how-to-install">
          How to install
        </NavLink>
      </NavItem>
    </Nav>
  );
}
