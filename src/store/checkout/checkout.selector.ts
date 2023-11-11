import { createSelector } from "reselect";

import { RootState } from "../store";

import { CheckoutState } from "./checkout.reducer";

const selectCheckout = (state: RootState): CheckoutState => state.checkout;

export const selectModalContent = createSelector(
  [selectCheckout],
  (checkout) => checkout.modalContent
);

export const selectIsModalOpen = createSelector(
  [selectCheckout],
  (checkout) => checkout.isModalOpen
);

export const selectPaymentSuccess = createSelector(
  [selectCheckout],
  (checkout) => checkout.paymentSuccess
);
