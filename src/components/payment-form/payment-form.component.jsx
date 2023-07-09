import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import BasicModal from "../basic-modal/basic-modal.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  PaymentFormContainer,
  FormContainer,
  PaymentTitle,
  PaymentButton,
} from "./payment-form.style";

const PaymentForm = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    text: "",
  });
  const [isOpenModal, setIsOpenModal] = useState(false);
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
      setModalContent({
        title: "Transaction declined ❌",
        text: paymentResult.error.message,
      });
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        setModalContent({
          title: "Payment Successful ✅",
          text: "Your payment was successful!",
        });
      }
    }

    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsPaymentSuccessful(false);
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <PaymentTitle>Credit Card Payment: </PaymentTitle>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>

      {isOpenModal && (
        <BasicModal
          modalTitle={modalContent.title}
          modalText={modalContent.text}
          closeModal={closeModal}
        />
      )}
    </PaymentFormContainer>
  );
};

export default PaymentForm;
