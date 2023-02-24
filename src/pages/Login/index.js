import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "components/SEO";
import UserForm from "components/UserForm";
import Modal from "components/Modal";
import StyledDiv from "./styles";

export default function Login() {
  const [isModalActive, setIsModalActive] = useState(false);
  const navigate = useNavigate();
  const handleModal = () => setIsModalActive(!isModalActive);

  return (
    <>
      <SEO />
      <StyledDiv>
        <div className="section section-1">
          <header>
            <h1>Heritage Handler App</h1>
            <h2>Quick, smart, easy to use... All in one place!</h2>
          </header>
        </div>
        <div className="section section-2">
          <UserForm
            title="Log into your account"
            btnTitle="Log in"
            usage="login"
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
              onSubmit={() => navigate("/home")}
            />
          </Modal>
        )}
      </StyledDiv>
    </>
  );
}
