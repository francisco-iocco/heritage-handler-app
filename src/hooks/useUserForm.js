import { useReducer } from "react";

const INITIAL_STATE = {
  email: "",
  password: "",
  heritage: "",
  emailError: "",
  passwordError: "",
  heritageError: "",
};

const ACTIONS = {
  SET_EMAIL_ERROR: "EMAIL_ERROR",
  SET_PASSWORD_ERROR: "PASSWORD_ERROR",
  SET_HERITAGE_ERROR: "HERITAGE_ERROR",
  UPDATE_EMAIL: "UPDATE_EMAIL",
  UPDATE_PASSWORD: "UPDATE_PASSWORD",
  UPDATE_HERITAGE: "UPDATE_HERITAGE",
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.SET_EMAIL_ERROR:
      return { ...state, emailError: payload };
    case ACTIONS.SET_PASSWORD_ERROR:
      return { ...state, passwordError: payload };
    case ACTIONS.SET_HERITAGE_ERROR:
      return { ...state, heritageError: payload };
    case ACTIONS.UPDATE_EMAIL:
      return { ...state, email: payload };
    case ACTIONS.UPDATE_PASSWORD:
      return { ...state, password: payload };
    case ACTIONS.UPDATE_HERITAGE:
      return { ...state, heritage: payload };
    default:
      return state;
  }
}

export default function useUserForm() {
  const [ 
    { 
      email, 
      password, 
      heritage, 
      emailError, 
      passwordError, 
      heritageError 
    }, 
    dispatch 
  ] = useReducer(reducer, INITIAL_STATE);

  return {
    email,
    password,
    heritage,
    errors: { emailError, passwordError, heritageError },
    setEmailError: (message) => {
      dispatch({ type: ACTIONS.SET_EMAIL_ERROR, payload: message });
    },
    setPasswordError: (message) =>
      dispatch({ type: ACTIONS.SET_PASSWORD_ERROR, payload: message }),
    setHeritageError: (message) =>
      dispatch({ type: ACTIONS.SET_HERITAGE_ERROR, payload: message }),
    updateEmail: (email) =>
      dispatch({ type: ACTIONS.UPDATE_EMAIL, payload: email }),
    updatePassword: (password) =>
      dispatch({ type: ACTIONS.UPDATE_PASSWORD, payload: password }),
    updateHeritage: (heritage) =>
      dispatch({ type: ACTIONS.UPDATE_HERITAGE, payload: heritage }),
  };
}
