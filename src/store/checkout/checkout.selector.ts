import { createSelector } from "reselect";

import { CheckoutState } from "./checkout.reducer";

const selectCheckout = (state): CheckoutState => state.checkout;

export const selectModalContent = createSelector(
  [selectCheckout],
  (checkout) => checkout.modalContent
);

export const selectIsModalOpen = createSelector(
  [selectCheckout],
  (checkout) => checkout.isModalOpen
);
