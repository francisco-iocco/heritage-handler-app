import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from "contexts/UserDataContext";
import useUserForm from "hooks/useUserForm";
import useHandleUser from "hooks/useHandleUser";
import { TfiLock, TfiMoney, TfiEmail, TfiInfoAlt } from "react-icons/tfi";
import StyledForm from "./styles";

export default function UserForm({
  title = "",
  btnTitle = "",
  render = { email: false, password: false, heritage: false },
  note = "",
}) {
  const { userData } = useContext(UserDataContext);
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
  const { logUser, registerUser, updateUser } = useHandleUser();

  const handleEmailValue = ({ target: { value } }) => updateEmail(value);
  const handlePasswordValue = ({ target: { value } }) => updatePassword(value);
  const handleHeritageValue = ({ target: { value } }) => updateHeritage(value);

  const cleanEmailError = () => setEmailError(false, "");
  const cleanPasswordError = () => setPasswordError(false, "");
  const cleanHeritageError = () => setHeritageError(false, "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Veryfing if all the inputs were filled.

    render.email && !email && setEmailError("Email is required...");
    render.password && !password && setPasswordError("Password is required...");
    render.heritage && !heritage && setHeritageError("Heritage is required...");
    
    if (emailError || passwordError || heritageError) return;
    
    // Veryfing if the response isn't OK. (E.g. "User doesn't exist for logging").

    let errors;
    if(render.email && render.password && render.heritage) {
      errors = await registerUser({ email, password, heritage });
    } else if(render.email && render.password) {
      errors = await logUser({ email, password });
    } else if(render.email) {
      errors = await updateUser({ emailToBeLinked: email });
    }

    if(errors) {
      errors.heritageError && setHeritageError(true, errors.heritageError);
      errors.emailError && setEmailError(true, errors.emailError);
      errors.passwordError && setPasswordError(true, errors.passwordError);
      return;
    }

    // If everything went well, navigate.
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
          {emailError && <p>{emailError}</p>}
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
          {passwordError && <p>{passwordError}</p>}
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
          {heritageError && <p>{heritageError}</p>}
        </>
      )}
      {(render.email && render.password && !render.heritage) && <a>Forgot your password?</a>}
      {note && (
        <p className="note"><span><TfiInfoAlt /></span> Note: {note}</p>
      )}
      <button type="submit">{btnTitle}</button>
    </StyledForm>
  );
}
