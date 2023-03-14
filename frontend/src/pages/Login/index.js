import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Modal from "components/Modal";
import UserForm from "components/UserForm";
import StyledLogin from "./styles";

export default function Login() {
  const [isModalActive, setIsModalActive] = useState(false);
  const handleModal = () => setIsModalActive(!isModalActive);
  const navigate = useNavigate();

  if (localStorage.getItem("userId")) return <Navigate to="/home" />;

  return (
    <StyledLogin>
      <div className="section">
        <header>
          <h1>Heritage Handler App</h1>
          <h2>Quick, smart, easy to use... All in one place!</h2>
        </header>
      </div>
      <div className="section">
        <UserForm
          title="Log into your account"
          btnTitle="Log in"
          usage="login"
          inputs={{ username: true, password: true }}
          onSubmit={() => navigate("/home")}
        />
        <div className="divider"></div>
        <button className="registerBtn" onClick={handleModal}>
          Create a new account
        </button>
      </div>
      {isModalActive && (
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
