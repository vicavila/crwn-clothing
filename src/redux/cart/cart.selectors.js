import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

// this level will be used on the dropdown component
export const selectCartItems = createSelector(
 // could be multiple selectors as well in which case
 // we add to the array y and the parameter list below
 [selectCart],
 (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
 [selectCart],
 (cart) => cart.hidden
);

// this level will be used on the bag count
export const selectCartItemsCount = createSelector(
 [selectCartItems],
 (cartItems) =>
  cartItems.reduce(
   (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
   0
  )
);
