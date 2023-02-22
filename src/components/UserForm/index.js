import { useContext, useReducer, useEffect, useState } from "react";
import UserDataContext from "contexts/UserDataContext";
import useHandleUser from "hooks/useHandleUser";
import { TfiLock, TfiMoney, TfiUser, TfiInfoAlt } from "react-icons/tfi";
import StyledForm from "./styles";

const INITIAL_STATE = {
  username: "",
  password: "",
  heritage: "",
};

const ACTIONS = {
  UPDATE_USERNAME: "UPDATE_USERNAME",
  UPDATE_PASSWORD: "UPDATE_PASSWORD",
  UPDATE_HERITAGE: "UPDATE_HERITAGE",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_USERNAME:
      return { ...state, username: action.payload };
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
    username: false,
    password: false, 
    heritage: false
  });
  const [
    { username, password, heritage }, 
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
        setInputs({ username: true, password: true, heritage: true });
        break;
      case "login":
        setInputs({ username: true, password: true });
        break;
      case "link-existing":
      case "change-username":
        setInputs({ username: true });
        break;
      case "change-password":
        setInputs({ password: true });
        break;
      default:
        break;
    }
  }, []);

  const handleUsernameValue = ({ target: { value } }) => 
    dispatch({ type: ACTIONS.UPDATE_USERNAME, payload: value });
  const handlePasswordValue = ({ target: { value } }) => 
    dispatch({ type: ACTIONS.UPDATE_PASSWORD, payload: value });
  const handleHeritageValue = ({ target: { value } }) => 
    dispatch({ type: ACTIONS.UPDATE_HERITAGE, payload: value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;
    switch (usage) {
      case "register":
        hasError = await registerUser({ username, password, heritage });
        break;
      case "register-and-link":
        hasError = await registerUser({
          idToBeLinked: userData._id,
          username,
          password,
          heritage,
        });
        break;
      case "login":
        hasError = await logUser({ username, password });
        break;
      case "link-existing":
        hasError = await updateUser({ usernameToBeLinked: username });
        break;
      case "change-username":
        hasError = await updateUser({ username });
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
      {inputs.username && (
        <>
          <div className="input-container">
            <label htmlFor="username">
              <TfiUser />
            </label>
            <input
              onChange={handleUsernameValue}
              onFocus={() => cleanError("username")}
              placeholder="Username"
              type="text"
              value={username}
              id="username"
            />
          </div>
          {errors.username && <p>{errors.username}</p>}
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
