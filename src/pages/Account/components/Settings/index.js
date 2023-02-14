import { useState } from "react";
import StyledSettings from "./styles";
import Modal from "components/Modal";
import UserForm from "components/UserForm";

export default function Settings() {
  const [ checkModal, setCheckModal ] = useState({ active: false, callback: () => {} });
  const [ emailModal, setEmailModal ] = useState(false);
  const [ passwordModal, setPasswordModal ] = useState(false);

  const handleEmailModal = () => setCheckModal({ 
    active: true, 
    callback: () => setEmailModal(true) 
  });

  const handlePasswordModal = () => setCheckModal({ 
    active: true, 
    callback: () => setPasswordModal(true) 
  });

  return (
    <>
      <StyledSettings>
        <h2>Settings</h2>
        <div>
          <h3>Change Email</h3>
          <p>Do it if you aren't satisfied with your current one!</p>
          <button onClick={handleEmailModal}>Change email</button>
        </div>
        <div>
          <h3>Change Password</h3>
          <p>Be careful! try to choose one you will be able to remeber.</p>
          <button onClick={handlePasswordModal}>Change password</button>
        </div>
        <div className="delete-container">
          <h3>Delete Account</h3>
          <p>Once you've deleted it, you can't go back.</p>
          <button>Delete account</button>
        </div>
      </StyledSettings>

      {checkModal.active && (
        <Modal onClose={() => setCheckModal({ active: false })}>
          <UserForm
            title="Checking credentials"
            btnTitle="Send"
            usage="login"
            render={{ email: true, password: true }}
            onSubmit={() => {checkModal.callback(); setCheckModal({ active: false });}}
          />
        </Modal>
      )}

      {emailModal && (
        <Modal onClose={() => setEmailModal(false)}>
          <UserForm
            title="New email"
            btnTitle="Change it"
            render={{ email: true }}
            usage="change-email"
            onSubmit={() => setEmailModal(false)}
          />
        </Modal>
      )}

      {passwordModal && (
        <Modal onClose={() => setPasswordModal(false)}>
          <UserForm
            title="New password"
            btnTitle="Change it"
            render={{ password: true }}
            usage="change-password"
            onSubmit={() => setPasswordModal(false)}
          />
        </Modal>
      )}
    </>
  );
}
