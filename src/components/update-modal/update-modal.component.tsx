import { FC, useState, useEffect, Fragment } from "react";
import { registerSW } from "virtual:pwa-register";
import BasicModal from "../basic-modal/basic-modal.component";

type UpdateModalProps = {
  handleUpdate: () => Promise<void>;
};

const UpdateModal: FC<UpdateModalProps> = ({ handleUpdate }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const unregisterSW = registerSW({
      onNeedRefresh() {
        // Show the modal when a new version is available
        setShowModal(true);
      },
    });

    return () => {
      // Cleanup the SW registration to avoid multiple listeners
      unregisterSW();
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleUpdateAndClose = async () => {
    await handleUpdate(); // Perform the update
    setShowModal(false); // Close the modal after performing the update
  };

  return (
    <Fragment>
      {showModal && (
        <BasicModal
          modalTitle="New Version Available"
          modalText="A new version of the app is available. Load new version?"
          closeModal={closeModal}
          confirmButton
          onConfirm={handleUpdateAndClose}
        />
      )}
    </Fragment>
  );
};

export default UpdateModal;
