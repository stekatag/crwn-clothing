import { CHECKOUT_ACTION_TYPES } from "./checkout.types";

import { createAction } from "../../utils/reducer/reducer.utils";

export const setModalContent = (modalContent) =>
  createAction(CHECKOUT_ACTION_TYPES.SET_MODAL_CONTENT, modalContent);

export const setIsModalOpen = (isModalOpen) =>
  createAction(CHECKOUT_ACTION_TYPES.SET_IS_MODAL_OPEN, isModalOpen);

export const resetCheckoutState = () =>
  createAction(CHECKOUT_ACTION_TYPES.RESET_CHECKOUT_STATE);
