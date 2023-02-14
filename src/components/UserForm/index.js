import { useContext } from "react";
import UserDataContext from "contexts/UserDataContext";
import useUserForm from "hooks/useUserForm";
import useHandleUser from "hooks/useHandleUser";
import { TfiLock, TfiMoney, TfiEmail, TfiInfoAlt } from "react-icons/tfi";
import StyledForm from "./styles";

export default function UserForm({
  title = "",
  btnTitle = "",
  render = { email: false, password: false, heritage: false },
  usage = "",
  note = "",
  onSubmit = () => {},
}) {
  const { userData } = useContext(UserDataContext);
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
  const { logUser, registerUser, updateUser, deleteUser } = useHandleUser();

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
    if (
      render.email && !email ||
      render.password && !password ||
      render.heritage && !heritage
    ) return;

    // Veryfing if the response isn't OK. (E.g. "User doesn't exist for logging").

    let errors;
    switch (usage) {
      case "register":
        errors = await registerUser({ email, password, heritage });
        break;
      case "register-and-link":
        errors = await registerUser({
          idToBeLinked: userData._id,
          email,
          password,
          heritage,
        });
        break;
      case "login":
        errors = await logUser({ email, password });
        break;
      case "link-existing":
        errors = await updateUser({ emailToBeLinked: email });
        break;
      case "change-email":
        errors = await updateUser({ email });
        break;
      case "change-password":
        errors = await updateUser({ password });
      case "delete-account":
        errors = await deleteUser();
        break;
      default:
        break;
    }

    if (errors) {
      errors.heritageError && setHeritageError(errors.heritageError);
      errors.emailError && setEmailError(errors.emailError);
      errors.passwordError && setPasswordError(errors.passwordError);
      return;
    }

    // If everything went well, execute the parent callback.
    onSubmit();
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
      {note && (
        <p className="note">
          <span>
            <TfiInfoAlt />
          </span>{" "}
          Note: {note}
        </p>
      )}
      <button type="submit">{btnTitle}</button>
    </StyledForm>
  );
}
