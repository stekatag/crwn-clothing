import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDetectAdblock } from "detect-adblock-react";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import AdblockWarning from "../../components/adblock-warning/adblock-warning.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.style";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const { adBlockDetected } = useDetectAdblock();

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
          <PaymentForm />
        </CheckoutContainer>
      )}
    </Fragment>
  );
};

export default Checkout;
