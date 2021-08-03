import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IT8wVHZyZDiZUu4Bv0fwBz8vdb39yDyn0R3qqdfrxV3RnAMQ2G9zeZjvkcnReDSQAmXdG60TsbJqY79AmT3uzOJ00ts6d103N'
  
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful!');
    }).catch(error => {
      console.log(`Payment error ${error}`);
      alert(
        'There was an issue with your payment. Please make sure you use the provided credit card'
      );
    });
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}


export default StripeCheckoutButton;