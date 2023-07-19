import { FC } from "react";
import Modal from "@mui/material/Modal";
import { Fade } from "@mui/material";

import { CheckoutModalContent } from "../../store/checkout/checkout.types";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ModalBox,
  ModalText,
  ModalTitle,
  ButtonsContainer,
} from "./basic-modal.style";

type BasicModalProps = {
  closeModal: () => void;
  confirmButton?: boolean;
  onConfirm?: () => void;
} & CheckoutModalContent;

const BasicModal: FC<BasicModalProps> = ({
  modalTitle,
  modalText,
  closeModal,
  onConfirm,
  confirmButton = false,
}) => {
  return (
    <div>
      <Modal
        open={true}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={true} timeout={400}>
          <ModalBox>
            <ModalTitle id="modal-modal-title">{modalTitle}</ModalTitle>
            <ModalText>{modalText}</ModalText>
            <ButtonsContainer>
              {confirmButton && (
                <Button
                  buttonType={BUTTON_TYPE_CLASSES.confirm}
                  onClick={onConfirm}
                >
                  Confirm
                </Button>
              )}
              {confirmButton ? (
                <Button
                  buttonType={BUTTON_TYPE_CLASSES.inverted}
                  onClick={closeModal}
                >
                  Cancel
                </Button>
              ) : (
                <Button onClick={closeModal}>Close</Button>
              )}
            </ButtonsContainer>
          </ModalBox>
        </Fade>
      </Modal>
    </div>
  );
};

export default BasicModal;
