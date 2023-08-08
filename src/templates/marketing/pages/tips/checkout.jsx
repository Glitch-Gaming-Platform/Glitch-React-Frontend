import React, { useState } from 'react';
import {useStripe, useElements, ExpressCheckoutElement} from '@stripe/react-stripe-js';

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();

  const onConfirm = async (event) => {
    if (!stripe) {
      // Stripe.js hasn't loaded yet.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const {error: submitError} = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret
    const res = await fetch('/create-intent', {
      method: 'POST',
    });
    const {client_secret: clientSecret} = await res.json();

    // Confirm the PaymentIntent using the details collected by the Express Checkout Element
    const {error} = await stripe.confirmPayment({
      // `elements` instance used to create the Express Checkout Element
      elements,
      // `clientSecret` from the created PaymentIntent
      clientSecret,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setErrorMessage(error.message);
    } else {
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url`.
    }
  };

  return (
    <div id="checkout-page">
      <ExpressCheckoutElement onConfirm={onConfirm} />
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default CheckoutPage;