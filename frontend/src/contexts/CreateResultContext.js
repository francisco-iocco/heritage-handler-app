import { createContext, useReducer } from "react";

const CreateResultContext = createContext({});

const INITIAL_STATE = {
  description: "",
  amount: "",
  isPermanent: false,
  time: null,
  id: null
};

const ACTIONS = {
  CHANGE_DESCRIPTION: "CHANGE_DESCRIPTION",
  CHANGE_AMOUNT: "CHANGE_AMOUNT",
  TOGGLE_IS_PERMANENT: "TOGGLE_IS_PERMANENT",
  CHANGE_TIME: "CHANGE_TIME",
  CHANGE_ID: "CHANGE_ID",
  RESET: "RESET"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_DESCRIPTION:
      return { ...state, description: action.payload };
    case ACTIONS.CHANGE_AMOUNT:
      return { ...state, amount: action.payload };
    case ACTIONS.TOGGLE_IS_PERMANENT:
      let time = state.time;
      !state.isPermanent && !state.time ? time = "per day" : time = time; 
      return { ...state, isPermanent: !state.isPermanent, time };
    case ACTIONS.CHANGE_TIME:
      return { ...state, time: action.payload };
    case ACTIONS.CHANGE_ID:
      return { ...state, id: action.payload };
    case ACTIONS.RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export function CreateResultContextProvider({ children }) {
  const [ { description, amount, isPermanent, time, id }, dispatch ] = useReducer(
    reducer,
    INITIAL_STATE
  );

  return (
    <CreateResultContext.Provider
      value={{
        description,
        amount,
        isPermanent,
        time,
        id,
        changeDescription: (description) =>
          dispatch({ type: ACTIONS.CHANGE_DESCRIPTION, payload: description }),
        changeAmount: (amount) =>
          dispatch({ type: ACTIONS.CHANGE_AMOUNT, payload: amount }),
        toggleIsPermanent: () =>
          dispatch({ type: ACTIONS.TOGGLE_IS_PERMANENT }),
        changeTime: (time) =>
          dispatch({ type: ACTIONS.CHANGE_TIME, payload: time }),
        changeId: (id) =>
          dispatch({ type: ACTIONS.CHANGE_ID, payload: id }),
        reset: () =>
          dispatch({ type: ACTIONS.RESET }),
      }}
    >
      {children}
    </CreateResultContext.Provider>
  );
}

export default CreateResultContext;
