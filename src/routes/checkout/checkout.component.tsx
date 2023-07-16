import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDetectAdblock } from "detect-adblock-react";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import { resetCartState } from "../../store/cart/cart.action";

import {
  setModalContent,
  setIsModalOpen,
  resetCheckoutState,
} from "../../store/checkout/checkout.action";

import {
  selectModalContent,
  selectIsModalOpen,
} from "../../store/checkout/checkout.selector";

import AdblockWarning from "../../components/adblock-warning/adblock-warning.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import BasicModal from "../../components/basic-modal/basic-modal.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.style";
import { StripeError } from "@stripe/stripe-js";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const { adBlockDetected } = useDetectAdblock();
  const isModalOpen = useSelector(selectIsModalOpen);
  const modalContent = useSelector(selectModalContent);

  const handlePaymentSuccess = () => {
    // Dispatch action to set the modal content
    dispatch(
      setModalContent({
        modalTitle: "Payment Successful ✅",
        modalText: "Your payment was successful!",
      })
    );
    // Dispatch action to set the modal open state to true
    dispatch(setIsModalOpen(true));

    // Dispatch action to reset the cart state
    dispatch(resetCartState());
  };

  const handlePaymentError = (error: StripeError) => {
    // Dispatch action to set the modal content
    dispatch(
      setModalContent({
        modalTitle: "Transaction declined ❌",
        modalText: error.message,
      })
    );

    // Dispatch action to set the modal open state to true
    dispatch(setIsModalOpen(true));
  };

  const closeModal = () => {
    // Dispatch action to set the modal open state to false
    dispatch(setIsModalOpen(false));

    // Dispatch action to reset the checkout state
    dispatch(resetCheckoutState());
  };

  return (
    <Fragment>
      {adBlockDetected ? (
        <AdblockWarning />
      ) : (
        <CheckoutContainer>
          <CheckoutHeader>
            <HeaderBlock>
              <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Remove</span>
            </HeaderBlock>
          </CheckoutHeader>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <Total>Total: ${cartTotal}</Total>
          {cartItems.length > 0 && (
            <PaymentForm
              handlePaymentSuccess={handlePaymentSuccess}
              handlePaymentError={handlePaymentError}
            />
          )}
        </CheckoutContainer>
      )}
      {isModalOpen && (
        <BasicModal
          modalTitle={modalContent.modalTitle}
          modalText={modalContent.modalText}
          closeModal={closeModal}
        />
      )}
    </Fragment>
  );
};

export default Checkout;
