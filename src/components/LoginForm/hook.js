import { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
  emailError: { has: false, message: "" },
  passwordError: { has: false, message: "" }
};

const ACTIONS = {
  UPDATE_EMAIL: "UPDATE_EMAIL",
  UPDATE_PASSWORD: "UPDATE_PASSWORD",
  SET_EMAIL_ERROR: "EMAIL_ERROR",
  SET_PASSWORD_ERROR: "PASSWORD_ERROR",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case ACTIONS.UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    case ACTIONS.SET_EMAIL_ERROR:
      return { ...state, emailError: action.payload };
    case ACTIONS.SET_PASSWORD_ERROR:
      return { ...state, passwordError: action.payload };
    default:
      return state;
  }
}

export default function useForm() {
  const [{ email, password, emailError, passwordError }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return {
    updateEmail: (email) => dispatch(
      { type: ACTIONS.UPDATE_EMAIL, payload: email }
    ),
    updatePassword: (password) => dispatch(
      { type: ACTIONS.UPDATE_PASSWORD, payload: password }
    ),
    setEmailError: (has, message) => dispatch(
      { type: ACTIONS.SET_EMAIL_ERROR, payload: {has, message} }
    ),
    setPasswordError: (has, message) => dispatch(
      { type: ACTIONS.SET_PASSWORD_ERROR, payload: {has, message} }
    ),
    email, password, emailError, passwordError
  };
}
