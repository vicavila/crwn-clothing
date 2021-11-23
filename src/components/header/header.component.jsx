import React from 'react';
import { Link } from 'react-router-dom';
// this is a special sintax y React for importing SVG
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';

import './header.styles.scss';

const Header = ({ currentUser }) => (
 <div className="header">
  <Link className="logo-container" to="/">
   <Logo className="logo" to="/" />
  </Link>
  <div className="options">
   <Link className="option" to="/shop">
    SHOP
   </Link>
   <Link className="option" to="/contact">
    CONTACT
   </Link>
   {currentUser ? (
    <div className="option" onClick={() => auth.signOut()}>
     SIGN OUT
    </div>
   ) : (
    <Link to="/signin">SIGN IN</Link>
   )}
   <CartIcon />
  </div>
 </div>
);

const mapStateToProps = (state) => ({
 currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
