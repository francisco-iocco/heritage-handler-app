import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from "contexts/UserDataContext";
import StyledSettings from "./styles";
import Modal from "components/Modal";
import UserForm from "components/UserForm";

export default function Settings() {
  const [ renderModal, setRenderModal ] = useState("");
  const [ checkModalCallback, setCheckModalCallback ] = useState(() => {});
  const { setUserData } = useContext(UserDataContext);
  const navigate = useNavigate();

  const clearRenderModal = () => setRenderModal("");

  const handleCheckModal = (nextModal) => {
    setRenderModal("check"); 
    setCheckModalCallback(() => () => setRenderModal(nextModal));
  }

  const logout = () => {
    localStorage.removeItem("userId");
    setUserData({});
    navigate("/");
  }

  return (
    <>
      <StyledSettings>
        <h2>Settings</h2>
        <div>
          <h3>Change Username</h3>
          <p>Do it if you aren't satisfied with your current one!</p>
          <button onClick={() => handleCheckModal("username")}>Change username</button>
        </div>
        <div>
          <h3>Change Password</h3>
          <p>Be careful! try to choose one you will be able to remeber.</p>
          <button onClick={() => handleCheckModal("password")}>Change password</button>
        </div>
        <div className="delete-container">
          <h3>Delete Account</h3>
          <p>Once you've deleted it, you can't go back.</p>
          <button onClick={() => handleCheckModal("delete")}>Delete account</button>
        </div>
        <div>
          <p>Are you looking for <button onClick={logout}>logging out</button>?</p>
        </div>
      </StyledSettings>

      {renderModal === "check" && (
        <Modal onClose={clearRenderModal}>
          <UserForm
            title="Checking credentials"
            btnTitle="Send"
            usage="validate-account"
            inputs={{ password: true }}
            onSubmit={checkModalCallback}
          />
        </Modal>
      )}

      {renderModal === "username" && (
        <Modal onClose={clearRenderModal}>
          <UserForm
            title="New username"
            btnTitle="Change it"
            usage="change-username"
            inputs={{ username: true }}
            onSubmit={clearRenderModal}
          />
        </Modal>
      )}

      {renderModal === "password" && (
        <Modal onClose={clearRenderModal}>
          <UserForm
            title="New password"
            btnTitle="Change it"
            usage="change-password"
            inputs={{ password: true }}
            onSubmit={clearRenderModal}
          />
        </Modal>
      )}

      {renderModal === "delete" && (
        <Modal onClose={clearRenderModal}>
          <UserForm
            title="Delete account"
            btnTitle="Delete"
            titleColor="#ef0107"
            note="You won't be able to rescue it!"
            usage="delete-account"
            onSubmit={logout}
          />
        </Modal>
      )}
    </>
  );
}
