import { createSelector } from "reselect";

const selectCheckout = (state) => state.checkout;

export const selectModalContent = createSelector(
  [selectCheckout],
  (checkout) => checkout.modalContent
);

export const selectIsModalOpen = createSelector(
  [selectCheckout],
  (checkout) => checkout.isModalOpen
);
