import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from "contexts/UserDataContext";
import Spinner from "components/Spinner";
import Modal from "components/Modal";
import UserForm from "components/UserForm";
import StyledDiv from "./styles";

export default function Login() {
  const [isModalActive, setIsModalActive] = useState(false);
  const handleModal = () => setIsModalActive(!isModalActive);
  const { userData, isLoading } = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    userData._id && navigate("/home", { replace: true });
  }, [userData._id]);

  return (
    <>
      {isLoading
        ? <Spinner/>
        : (
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
        )
      }
    </>
  );
}
