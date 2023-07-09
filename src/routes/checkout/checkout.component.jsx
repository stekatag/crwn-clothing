import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDetectAdblock } from "detect-adblock-react";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import { resetCartState } from "../../store/cart/cart.action";

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

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const { adBlockDetected } = useDetectAdblock();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    text: "",
  });

  const handlePaymentSuccess = () => {
    setModalContent({
      title: "Payment Successful ✅",
      text: "Your payment was successful!",
    });
    setIsModalOpen(true);
    dispatch(resetCartState());
  };

  const handlePaymentError = (error) => {
    setModalContent({
      title: "Transaction declined ❌",
      text: error.message,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          {cartItems.map((cartItem) => {
            return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
          })}
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
          modalTitle={modalContent.title}
          modalText={modalContent.text}
          closeModal={closeModal}
        />
      )}
    </Fragment>
  );
};

export default Checkout;
