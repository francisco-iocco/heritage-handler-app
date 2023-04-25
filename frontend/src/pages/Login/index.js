import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Modal from "components/Modal";
import UserForm from "components/UserForm";
import Presentation from "./components/Presentation";
import StyledLogin from "./styles";

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleModal = () => setShowModal(!showModal);
  const handleClick = () => {
    handleModal();
  }

  if (localStorage.getItem("userId")) return <Navigate to="/home" />;

  return (
    <StyledLogin>
      <Presentation showModal={showModal} />
      <div>
        <UserForm
          title="Log into your account"
          btnTitle="Log in"
          usage="login"
          inputs={{ username: true, password: true }}
          onSubmit={() => navigate("/home")}
        />
        <div className="divider"></div>
        <button onClick={handleClick}>Create a new account</button>
      </div>
      {showModal && (
        <Modal onClose={handleModal}>
          <UserForm
            title="Register"
            btnTitle="Create account"
            usage="register"
            inputs={{ username: true, password: true, heritage: true }}
            onSubmit={() => navigate("/home")}
          />
        </Modal>
      )}
    </StyledLogin>
  );
}
