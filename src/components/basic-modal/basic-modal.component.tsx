import { FC } from "react";
import Modal from "@mui/material/Modal";
import { Fade } from "@mui/material";

import { CheckoutModalContent } from "../../store/checkout/checkout.types";

import Button from "../button/button.component";

import { ModalBox, ModalText, ModalTitle } from "./basic-modal.style";

type BasicModalProps = {
  closeModal: () => void;
} & CheckoutModalContent;

const BasicModal: FC<BasicModalProps> = ({
  modalTitle,
  modalText,
  closeModal,
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
            <Button onClick={closeModal}>Close</Button>
          </ModalBox>
        </Fade>
      </Modal>
    </div>
  );
};

export default BasicModal;
