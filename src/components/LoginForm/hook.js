import { useReducer } from "react";

const INITIAL_STATE = {
  email: "",
  emailError: { has: false, message: "" },
  password: "",
  passwordError: { has: false, message: "" },
};

const ACTIONS = {
  SET_EMAIL_ERROR: "EMAIL_ERROR",
  SET_PASSWORD_ERROR: "PASSWORD_ERROR",
  UPDATE_EMAIL: "UPDATE_EMAIL",
  UPDATE_PASSWORD: "UPDATE_PASSWORD",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_EMAIL_ERROR:
      return { ...state, emailError: action.payload };
    case ACTIONS.SET_PASSWORD_ERROR:
      return { ...state, passwordError: action.payload };
    case ACTIONS.UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case ACTIONS.UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

export default function useForm() {
  const [ { email, emailError, password, passwordError }, dispatch ] = useReducer(
    reducer,
    INITIAL_STATE
  );

  return {
    email,
    emailError,
    password,
    passwordError,
    setEmailError: (has, message) =>
      dispatch({ type: ACTIONS.SET_EMAIL_ERROR, payload: { has, message } }),
    setPasswordError: (has, message) =>
      dispatch({ type: ACTIONS.SET_PASSWORD_ERROR, payload: { has, message } }),
    updateEmail: (email) =>
      dispatch({ type: ACTIONS.UPDATE_EMAIL, payload: email }),
    updatePassword: (password) =>
      dispatch({ type: ACTIONS.UPDATE_PASSWORD, payload: password }),
  };
}
