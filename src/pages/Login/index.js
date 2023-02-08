import { useState } from "react";
import UserForm from "components/UserForm";
import Modal from "components/Modal";
import StyledDiv from "./styles";

export default function Login() {
  const [ isModalActive, setIsModalActive ] = useState(false);

  const handleModal = () => setIsModalActive(!isModalActive);

  return (
    <StyledDiv>
      <div className="section section-1">
        <header>
          <h1>Heritage Handler App</h1>
          <h2>Quick, smart, easy to use... All in one place!</h2>
        </header>
      </div>
      <div className="section section-2">
        <UserForm title="Log into your account" btnTitle="Log in"/>
        <div className="divider"></div>
        <button className="registerBtn" onClick={handleModal}>Create a new account</button>
      </div>
      {isModalActive && (
        <Modal onClose={handleModal}>
          <UserForm title="Register" btnTitle="Create account" registerUsage={true} />
        </Modal>
      )}
    </StyledDiv>
  )
}