import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import JWTContext from "contexts/JWTContext";
import useForm from "./hook";
import StyledForm from "./styles";

export default function Form({ title }) {
  const {
    updateEmail,
    updatePassword,
    setEmailError,
    setPasswordError,
    email,
    password,
    emailError,
    passwordError,
  } = useForm();

  const { setJWT } = useContext(JWTContext);

  const navigate = useNavigate();

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
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailValue}
        onFocus={cleanEmailError}
      />
      {emailError.has && <p>{emailError.message}</p>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordValue}
        onFocus={cleanPasswordError}
      />
      {passwordError.has && <p>{passwordError.message}</p>}
      <a>Forgot your password?</a>
      <button type="submit">Log in</button>
    </StyledForm>
  );
}
