import { CHECKOUT_ACTION_TYPES, CheckoutModalContent } from "./checkout.types";

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

export type SetModalContent = ActionWithPayload<
  CHECKOUT_ACTION_TYPES.SET_MODAL_CONTENT,
  CheckoutModalContent
>;

export type SetIsModalOpen = ActionWithPayload<
  CHECKOUT_ACTION_TYPES.SET_IS_MODAL_OPEN,
  boolean
>;

export type ResetCheckoutState =
  Action<CHECKOUT_ACTION_TYPES.RESET_CHECKOUT_STATE>;

export const setModalContent = withMatcher(
  (modalContent: CheckoutModalContent): SetModalContent =>
    createAction(CHECKOUT_ACTION_TYPES.SET_MODAL_CONTENT, modalContent)
);

export const setIsModalOpen = withMatcher(
  (isModalOpen: boolean): SetIsModalOpen =>
    createAction(CHECKOUT_ACTION_TYPES.SET_IS_MODAL_OPEN, isModalOpen)
);

export const resetCheckoutState = withMatcher(
  (): ResetCheckoutState =>
    createAction(CHECKOUT_ACTION_TYPES.RESET_CHECKOUT_STATE)
);
