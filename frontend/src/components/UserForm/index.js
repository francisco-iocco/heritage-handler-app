import { useContext, useReducer, useState } from "react";
import {
  IconUser,
  IconLock,
  IconCoins,
  IconInfoSquareRounded,
} from "@tabler/icons-react";
import UserDataContext from "contexts/UserDataContext";
import useHandleUser from "hooks/useHandleUser";
import Spinner from "components/Spinner";
import { StyledForm, StyledInput } from "./styles";

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
  inputs = { username: false, password: false, heritage: false },
  onSubmit = () => {},
}) {
  const { userData } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(false);
  const [animation, setAnimation] = useState("");
  const [{ username, password, heritage }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE
  );
  const {
    logUser,
    registerUser,
    updateUser,
    deleteUser,
    validateCredentials,
    errors,
    cleanError,
  } = useHandleUser();

  const handleUsernameValue = ({ target: { value } }) =>
    dispatch({ type: ACTIONS.UPDATE_USERNAME, payload: value });
  const handlePasswordValue = ({ target: { value } }) =>
    dispatch({ type: ACTIONS.UPDATE_PASSWORD, payload: value });
  const handleHeritageValue = ({ target: { value } }) =>
    dispatch({ type: ACTIONS.UPDATE_HERITAGE, payload: value });

  const cleanMessage = async (error) => {
    setAnimation(error);
    await new Promise((res) => setTimeout(res, 500));
    cleanError(error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAnimation("click");
    if(Object.keys(errors).length) return;

    setIsLoading(true);
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
      case "validate-account":
        hasError = await validateCredentials({ password });
        break;
      default:
        break;
    }
    setIsLoading(false);

    // If everything went well, execute the parent callback.
    if (!isLoading && !hasError) onSubmit();
  };

  if (isLoading)
    return (
      <StyledForm title={title}>
        <Spinner />
      </StyledForm>
    );

  return (
    <StyledForm
      autoComplete={usage === "login" ? "on" : "off"}
      onSubmit={handleSubmit}
      title={title}
      animation={animation}
      onAnimationEnd={() => setAnimation("")}
    >
      <h3>{title}</h3>
      {inputs.username && (
        <StyledInput
          hasValue={!!username}
          hideText={animation === "username" && animation}
        >
          <div>
            <label htmlFor="username">
              <IconUser stroke={1} size="1.5rem" />
            </label>
            <input
              onChange={handleUsernameValue}
              onFocus={() => errors.username && cleanMessage("username")}
              type="text"
              value={username}
              id="username"
            />
            <span>Username</span>
          </div>
          {errors.username && <p>{errors.username}</p>}
        </StyledInput>
      )}
      {inputs.password && (
        <StyledInput
          hasValue={!!password}
          hideText={animation === "password" && animation}
        >
          <div>
            <label htmlFor="password">
              <IconLock stroke={1} size="1.5rem" />
            </label>
            <input
              onChange={handlePasswordValue}
              onFocus={() => errors.password && cleanMessage("password")}
              type="password"
              value={password}
              id="password"
            />
            <span>Password</span>
          </div>
          {errors.password && <p>{errors.password}</p>}
        </StyledInput>
      )}
      {inputs.heritage && (
        <StyledInput
          hasValue={!!heritage}
          hideText={animation === "heritage" && animation}
        >
          <div>
            <label htmlFor="heritage">
              <IconCoins stroke={1} size="1.5rem" />
            </label>
            <input
              onChange={handleHeritageValue}
              onFocus={() => errors.heritage && cleanMessage("heritage")}
              type="number"
              value={heritage}
              id="heritage"
            />
            <span>Heritage</span>
          </div>
          {errors.heritage && <p>{errors.heritage}</p>}
        </StyledInput>
      )}
      {note && (
        <p className="note">
          <span>
            <IconInfoSquareRounded stroke={1} size="1.5rem" />
          </span>
          Note: {note}
        </p>
      )}
      <button type="submit">{btnTitle}</button>
    </StyledForm>
  );
}
