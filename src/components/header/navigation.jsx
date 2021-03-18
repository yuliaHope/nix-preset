import { NavLink } from "react-router-dom";

import { ReactComponent as CoinIcon } from '../../assets/images/coin.svg';

export function Navigation() {
    return (
       <nav className="app-navigation">
           <NavLink activeClassName="selected" to="/home">Home</NavLink>
           <NavLink activeClassName="selected" to="/shop">Shop</NavLink>
           <NavLink activeClassName="selected" to="/save">Save <CoinIcon className="coin-icon"/></NavLink>
           <NavLink activeClassName="selected" to="/how-to-install">How to install</NavLink>
       </nav>
    )
}