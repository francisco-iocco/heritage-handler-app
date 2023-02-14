import { useState } from "react";
import StyledSettings from "./styles";
import Modal from "components/Modal";
import UserForm from "components/UserForm";

export default function Settings() {
  const [ checkModal, setCheckModal ] = useState(false);
  const [ emailModal, setEmailModal ] = useState(false);

  const handleCheckModal = () => setCheckModal(!checkModal);
  const handleEmailModal = () => setEmailModal(!emailModal);

  return (
    <>
      <StyledSettings>
        <h2>Settings</h2>
        <div>
          <h3>Change Email</h3>
          <p>Do it if you aren't satisfied with your current one!</p>
          <button onClick={handleCheckModal}>Change email</button>
        </div>
        <div>
          <h3>Change Password</h3>
          <p>Be careful! try to choose one you will be able to remeber.</p>
          <button onClick={handleCheckModal}>Change password</button>
        </div>
        <div className="delete-container">
          <h3>Delete Account</h3>
          <p>Once you've deleted it, you can't go back.</p>
          <button onClick={handleCheckModal}>Delete account</button>
        </div>
      </StyledSettings>

      {checkModal && (
        <Modal onClose={handleCheckModal}>
          <UserForm
            title="Checking credentials"
            btnTitle="Send"
            render={{ email: true, password: true }}
            onSubmit={() => { handleEmailModal(); handleCheckModal() }}
          />
        </Modal>
      )}

      {emailModal && (
        <Modal onClose={handleEmailModal}>
          <UserForm
            title="New email"
            btnTitle="Change it"
            render={{ email: true }}
            usage="change-email"
            onSubmit={() => { handleEmailModal() }}
          />
        </Modal>
      )}
    </>
  );
}
