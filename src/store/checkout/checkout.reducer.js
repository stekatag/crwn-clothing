import { CHECKOUT_ACTION_TYPES } from "./checkout.types";

const CHECKOUT_INITIAL_STATE = {
  isModalOpen: false,
  modalContent: {
    title: "",
    text: "",
  },
};

export const checkoutReducer = (
  state = CHECKOUT_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CHECKOUT_ACTION_TYPES.SET_MODAL_CONTENT:
      return {
        ...state,
        modalContent: payload,
      };
    case CHECKOUT_ACTION_TYPES.SET_IS_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: payload,
      };
    case CHECKOUT_ACTION_TYPES.RESET_CHECKOUT_STATE:
      return {
        ...CHECKOUT_INITIAL_STATE,
      };
    default:
      return state;
  }
};
