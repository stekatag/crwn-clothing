import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  PaymentFormContainer,
  FormContainer,
  PaymentTitle,
  PaymentButton,
  PaymentInfo,
  PaymentInfoContainer,
} from "./payment-form.style";

const PaymentForm = ({ handlePaymentSuccess, handlePaymentError }) => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      handlePaymentError(paymentResult.error);
    } else {
      handlePaymentSuccess();
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <PaymentInfoContainer>
          <PaymentInfo>
            Please, use the following for test credit card payments
          </PaymentInfo>
          <PaymentInfo>
            VISA: <span>4242 4242 4242 4242</span>{" "}
          </PaymentInfo>
          <PaymentInfo>
            MASTERCARD: <span>5555 5555 5555 4444</span>
          </PaymentInfo>
          <PaymentInfo>Exp: Any Future Date, CVV: Any 3 Digits</PaymentInfo>
        </PaymentInfoContainer>
        <PaymentTitle>Credit Card Payment: </PaymentTitle>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
