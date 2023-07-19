import { FC, Fragment } from "react";
import BasicModal from "../basic-modal/basic-modal.component";

type UpdateModalProps = {
  showModal: boolean;
  closeModal: () => void;
  handleUpdate: () => void;
};

const UpdateModal: FC<UpdateModalProps> = ({
  showModal,
  closeModal,
  handleUpdate,
}) => {
  return (
    <Fragment>
      {showModal && (
        <BasicModal
          modalTitle="New Version Available"
          modalText="A new version of the app is available. Load new version?"
          closeModal={closeModal}
          confirmButton
          onConfirm={handleUpdate}
        />
      )}
    </Fragment>
  );
};

export default UpdateModal;
