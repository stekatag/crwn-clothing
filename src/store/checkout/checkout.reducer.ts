import { AnyAction } from "redux";

import { CheckoutModalContent } from "./checkout.types";

import {
  setModalContent,
  setIsModalOpen,
  resetCheckoutState,
} from "./checkout.action";

export type CheckoutState = {
  readonly isModalOpen: boolean;
  readonly modalContent: CheckoutModalContent;
};

export const CHECKOUT_INITIAL_STATE: CheckoutState = {
  isModalOpen: false,
  modalContent: {
    title: "",
    text: "",
  },
};

export const checkoutReducer = (
  state = CHECKOUT_INITIAL_STATE,
  action: AnyAction
) => {
  if (setModalContent.match(action)) {
    return {
      ...state,
      modalContent: action.payload,
    };
  }

  if (setIsModalOpen.match(action)) {
    return {
      ...state,
      isModalOpen: action.payload,
    };
  }

  if (resetCheckoutState.match(action)) {
    return {
      ...CHECKOUT_INITIAL_STATE,
    };
  }

  return state;
};
