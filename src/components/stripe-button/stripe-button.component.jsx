import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
 // stripe requires the amount in cents
 const priceForStripe = price * 100;
 const onToken = (token) => {
  console.log(token);
  alert('Payment Successful');
 };
 const publishablekey =
  'pk_test_51K6w4uIF5SNTVQsug5MP9t37QIoSvVtcrZV94zrMaDf69zQVUH6BoG2W8MZc0SyV04RG8xDm2IPObVOOYgH96lGc00hAM3bjoz';
 return (
  <StripeCheckout
   label="Pay Now"
   name="CRWN Clothing Ltd."
   billingAddress
   shippingAddress
   image="https://svgshare.com/i/CUz.svg"
   description={`Your total is ${price}`}
   amount={priceForStripe}
   panelLabel="Pay Now"
   token={onToken}
   stripeKey={publishablekey}
  />
 );
};

export default StripeCheckoutButton;
