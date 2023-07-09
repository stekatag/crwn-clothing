import { useState } from "react";
import Modal from "@mui/material/Modal";

import Button from "../button/button.component";

import { ModalBox, ModalText, ModalTitle } from "./basic-modal.style";

const BasicModal = ({ modalTitle, modalText }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <ModalTitle id="modal-modal-title">{modalTitle}</ModalTitle>
          <ModalText>{modalText}</ModalText>
          <Button onClick={handleClose}>Close</Button>
        </ModalBox>
      </Modal>
    </div>
  );
};

export default BasicModal;