export enum CHECKOUT_ACTION_TYPES {
  SET_MODAL_CONTENT = "checkout/SET_MODAL_CONTENT",
  SET_IS_MODAL_OPEN = "checkout/SET_IS_MODAL_OPEN",
  RESET_CHECKOUT_STATE = "checkout/RESET_CHECKOUT_STATE",
}

export type CheckoutModalContent = {
  modalTitle: string;
  modalText: string | undefined;
};
