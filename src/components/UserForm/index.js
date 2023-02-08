import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TfiLock, TfiMoney, TfiEmail } from "react-icons/tfi";
import JWTContext from "contexts/JWTContext";
import StyledForm from "./styles";
import useUserForm from "hooks/useUserForm";
import logUser from "services/logUser";
import createUser from "services/createUser";

export default function UserForm({ title, btnTitle, registerUsage = false }) {
  const { setJWT } = useContext(JWTContext);
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
  const handleEmailValue = ({ target: { value } }) => updateEmail(value);
  const handlePasswordValue = ({ target: { value } }) => updatePassword(value);
  const handleHeritageValue = ({ target: { value } }) => updateHeritage(value);

  const cleanEmailError = () => setEmailError(false, "");
  const cleanPasswordError = () => setPasswordError(false, "");
  const cleanHeritageError = () => setHeritageError(false, "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Veryfing if all the inputs were filled.
    
    !email && setEmailError(true, "Your email is required...");
    !password && setPasswordError(true, "Your password is required...");
    registerUsage && !heritage && setHeritageError(true, "Your heritage is required...")

    if(!email || !password || registerUsage && !heritage) return;

    const response = registerUsage 
      ? await createUser({ data: { email, password, heritage } }) 
      : await logUser({ email, password });

    // Veryfing if the response is OK. (E.g. "User doesn't exist for logging").
    
    response.heritageError && setHeritageError(true, response.errorMessage);
    response.emailError && setEmailError(true, response.errorMessage);
    response.passwordError && setPasswordError(true, response.errorMessage);

    if(response.emailError || response.passwordError || response.heritageError) return;

    // If everything went well, storage JWT and navigate.
    setJWT(response.JWT);
    navigate("/home");
  };

  return (
    <StyledForm onSubmit={handleSubmit} title={title}>
      <h3>{title}</h3>
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
      {title === "Register" && (
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
      {title != "Register" && <a>Forgot your password?</a>}
      <button type="submit">{btnTitle}</button>
    </StyledForm>
  );
}
