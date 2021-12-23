import React from 'react';
// this is a special sintax y React for importing SVG
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
 HeaderContainer,
 LogoContainer,
 OptionsContainer,
 OptionLink,
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
 <HeaderContainer>
  <LogoContainer to="/">
   <Logo className="logo" to="/" />
  </LogoContainer>
  <OptionsContainer>
   <OptionLink to="/shop">SHOP</OptionLink>
   <OptionLink to="/contact">CONTACT</OptionLink>
   {currentUser ? (
    // we can also use as components with as={Component}
    <OptionLink as="div" onClick={() => auth.signOut()}>
     SIGN OUT
    </OptionLink>
   ) : (
    <OptionLink to="/signin">SIGN IN</OptionLink>
   )}
   <CartIcon />
  </OptionsContainer>
  {hidden ? null : <CartDropdown />}
 </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
 currentUser: selectCurrentUser,
 hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
