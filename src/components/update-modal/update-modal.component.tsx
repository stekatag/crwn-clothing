import { useState, Fragment } from "react";
import { registerSW } from "virtual:pwa-register";
import BasicModal from "../basic-modal/basic-modal.component";

const UpdateModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleUpdate = async () => {
    const updateSW = registerSW({
      onNeedRefresh() {
        // show a prompt to user
        setShowModal(true);
      },
    });

    await updateSW(true); // Perform the update

    // After performing the update, trigger a page reload to get the new content
    window.location.reload();
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
      {/* <BasicModal
        modalTitle="New Version Available"
        modalText="A new version of the app is available. Load new version?"
        closeModal={closeModal}
        confirmButton
        onConfirm={handleUpdate}
      /> */}
    </Fragment>
  );
};

export default UpdateModal;
