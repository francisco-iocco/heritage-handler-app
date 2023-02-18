import { useContext, useReducer, useEffect, useState } from "react";
import UserDataContext from "contexts/UserDataContext";
import useHandleUser from "hooks/useHandleUser";
import { TfiLock, TfiMoney, TfiEmail, TfiInfoAlt } from "react-icons/tfi";
import StyledForm from "./styles";

const INITIAL_STATE = {
  email: "",
  password: "",
  heritage: "",
};

const ACTIONS = {
  UPDATE_EMAIL: "UPDATE_EMAIL",
  UPDATE_PASSWORD: "UPDATE_PASSWORD",
  UPDATE_HERITAGE: "UPDATE_HERITAGE",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case ACTIONS.UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    case ACTIONS.UPDATE_HERITAGE:
      return { ...state, heritage: action.payload };
    default:
      return state;
  }
}

export default function UserForm({
  title = "",
  btnTitle = "",
  usage = "",
  note = "",
  onSubmit = () => {},
}) {
  const { userData } = useContext(UserDataContext);
  const [ inputs, setInputs ] = useState({
    email: false,
    password: false, 
    heritage: false
  });
  const [
    { email, password, heritage }, 
    dispatch
  ] = useReducer(reducer, INITIAL_STATE);
  const {
    logUser, 
    registerUser, 
    updateUser, 
    deleteUser, 
    errors, 
    cleanError
  } = useHandleUser();

  useEffect(() => {
    switch (usage) {
      case "register":
      case "register-and-link":
        setInputs({ email: true, password: true, heritage: true });
        break;
      case "login":
        setInputs({ email: true, password: true });
        break;
      case "link-existing":
      case "change-email":
        setInputs({ email: true });
        break;
      case "change-password":
        setInputs({ password: true });
        break;
      default:
        break;
    }
  }, []);

  const handleEmailValue = ({ target: { value } }) => 
    dispatch({ type: ACTIONS.UPDATE_EMAIL, payload: value });
  const handlePasswordValue = ({ target: { value } }) => 
    dispatch({ type: ACTIONS.UPDATE_PASSWORD, payload: value });
  const handleHeritageValue = ({ target: { value } }) => 
    dispatch({ type: ACTIONS.UPDATE_HERITAGE, payload: value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;
    switch (usage) {
      case "register":
        hasError = await registerUser({ email, password, heritage });
        break;
      case "register-and-link":
        hasError = await registerUser({
          idToBeLinked: userData._id,
          email,
          password,
          heritage,
        });
        break;
      case "login":
        hasError = await logUser({ email, password });
        break;
      case "link-existing":
        hasError = await updateUser({ emailToBeLinked: email });
        break;
      case "change-email":
        hasError = await updateUser({ email });
        break;
      case "change-password":
        hasError = await updateUser({ password });
        break;
      case "delete-account":
        hasError = await deleteUser();
        break;
      default:
        break;
    }

    // If everything went well, execute the parent callback.
    !hasError && onSubmit();
  };

  return (
    <StyledForm onSubmit={handleSubmit} title={title}>
      <h3>{title}</h3>
      {inputs.email && (
        <>
          <div className="input-container">
            <label htmlFor="email">
              <TfiEmail />
            </label>
            <input
              onChange={handleEmailValue}
              onFocus={() => cleanError("email")}
              placeholder="Email"
              type="email"
              value={email}
              id="email"
            />
          </div>
          {errors.email && <p>{errors.email}</p>}
        </>
      )}
      {inputs.password && (
        <>
          <div className="input-container">
            <label htmlFor="password">
              <TfiLock />
            </label>
            <input
              onChange={handlePasswordValue}
              onFocus={() => cleanError("password")}
              placeholder="Password"
              type="password"
              value={password}
              id="password"
            />
          </div>
          {errors.password && <p>{errors.password}</p>}
        </>
      )}
      {inputs.heritage && (
        <>
          <div className="input-container">
            <label htmlFor="heritage">
              <TfiMoney />
            </label>
            <input
              onChange={handleHeritageValue}
              onFocus={() => cleanError("heritage")}
              placeholder="Your current heritage"
              type="number"
              value={heritage}
              id="heritage"
            />
          </div>
          {errors.heritage && <p>{errors.heritage}</p>}
        </>
      )}
      {note && (
        <p className="note">
          <span><TfiInfoAlt /></span>
          Note: {note}
        </p>
      )}
      <button type="submit">{btnTitle}</button>
    </StyledForm>
  );
}
