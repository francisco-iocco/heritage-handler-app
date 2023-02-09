import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TfiLock, TfiMoney, TfiEmail, TfiInfoAlt } from "react-icons/tfi";
import UserDataContext from "contexts/UserDataContext";
import StyledForm from "./styles";
import useUserForm from "hooks/useUserForm";
import logUser from "services/logUser";
import createUser from "services/createUser";

export default function UserForm({
  title,
  btnTitle,
  usage = "",
  note = ""
}) {
  const [ render, setRender ] = useState({ 
    email: false, 
    password: false, 
    heritage: false 
  });
  const { setUserData } = useContext(UserDataContext);
  const navigate = useNavigate();
  const {
    email,
    password,
    heritage,
    updateEmail,
    updatePassword,
    updateHeritage,
    errors: { emailError, passwordError, heritageError },
    setEmailError,
    setPasswordError,
    setHeritageError,
  } = useUserForm();

  useEffect(() => {
    switch (usage) {
      case "register":
        setRender({ email: true, password: true, heritage: true });
        break;
      case "login":
        setRender({ email: true, password: true });
        break;
      case "link-existing-account":
        setRender({ email: true });
        break;
      case "link-new-account":
        setRender({ email: true, password: true, heritage: true });
        break;
      default:
        break;
    }
  }, []);

  const handleEmailValue = ({ target: { value } }) => updateEmail(value);
  const handlePasswordValue = ({ target: { value } }) => updatePassword(value);
  const handleHeritageValue = ({ target: { value } }) => updateHeritage(value);

  const cleanEmailError = () => setEmailError(false, "");
  const cleanPasswordError = () => setPasswordError(false, "");
  const cleanHeritageError = () => setHeritageError(false, "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Veryfing if all the inputs were filled.

    render.email && !email && setEmailError(true, "Email is required...");
    render.password && !password && setPasswordError(true, "Password is required...");
    render.heritage && !heritage && setHeritageError(true, "Heritage is required...");
    
    if (emailError.status || passwordError.status || heritageError.status) return;
    
    const response = render.heritage
      ? await createUser({ data: { email, password, heritage } })
      : await logUser({ email, password });

    // Veryfing if the response isn't OK. (E.g. "User doesn't exist for logging").

    response.heritageError && setHeritageError(true, response.errorMessage);
    response.emailError && setEmailError(true, response.errorMessage);
    response.passwordError && setPasswordError(true, response.errorMessage);

    if (response.emailError || response.passwordError || response.heritageError) return;

    // If everything went well, storage user's data and navigate.
    setUserData(response);
    navigate("/home");
  };

  return (
    <StyledForm onSubmit={handleSubmit} title={title}>
      <h3>{title}</h3>
      {render.email && (
        <>
          <div className="input-container">
            <label htmlFor="email">
              <TfiEmail />
            </label>
            <input
              onChange={handleEmailValue}
              onFocus={cleanEmailError}
              placeholder="Email"
              type="email"
              value={email}
              id="email"
            />
          </div>
          {emailError.status && <p>{emailError.message}</p>}
        </>
      )}
      {render.password && (
        <>
          <div className="input-container">
            <label htmlFor="password">
              <TfiLock />
            </label>
            <input
              onChange={handlePasswordValue}
              onFocus={cleanPasswordError}
              placeholder="Password"
              type="password"
              value={password}
            />
          </div>
          {passwordError.status && <p>{passwordError.message}</p>}
        </>
      )}
      {render.heritage && (
        <>
          <div className="input-container">
            <label htmlFor="heritage">
              <TfiMoney />
            </label>
            <input
              onChange={handleHeritageValue}
              onFocus={cleanHeritageError}
              placeholder="Your current heritage"
              type="number"
              id="heritage"
              value={heritage}
            />
          </div>
          {heritageError.status && <p>{heritageError.message}</p>}
        </>
      )}
      {usage === "login" && <a>Forgot your password?</a>}
      {note && (
        <p className="note"><span><TfiInfoAlt /></span> Note: {note}</p>
      )}
      <button type="submit">{btnTitle}</button>
    </StyledForm>
  );
}
