import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import JWTContext from "contexts/JWTContext";
import StyledForm from "./styles";
import useForm from "./hook";

export default function Form({ title }) {
  const { setJWT } = useContext(JWTContext);
  const navigate = useNavigate();
  const {
    email,
    password,
    emailError,
    passwordError,
    updateEmail,
    updatePassword,
    setEmailError,
    setPasswordError,
  } = useForm();

  const handleEmailValue = ({ target: { value } }) => updateEmail(value);
  const handlePasswordValue = ({ target: { value } }) => updatePassword(value);
  
  const cleanEmailError = () => setEmailError(false, "");
  const cleanPasswordError = () => setPasswordError(false, "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `http://localhost:4000?email=${email}&password=${password}`
    );
    response = await response.json();
    if (response.token) {
      setJWT(response.token);
      navigate("/home");
    }

    if (response.emailError) {
      setEmailError(true, response.errorMessage);
    } else if (response.passwordError) {
      setPasswordError(true, response.errorMessage);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>{title}</h3>
      <input
        onChange={handleEmailValue}
        onFocus={cleanEmailError}
        placeholder="Email"
        type="email"
        value={email}
      />
      {emailError.has && <p>{emailError.message}</p>}
      <input
        onChange={handlePasswordValue}
        onFocus={cleanPasswordError}
        placeholder="Password"
        type="password"
        value={password}
      />
      {passwordError.has && <p>{passwordError.message}</p>}
      <a>Forgot your password?</a>
      <button type="submit">Log in</button>
    </StyledForm>
  );
}
