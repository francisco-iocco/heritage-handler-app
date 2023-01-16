import { createContext, useState, useReducer } from "react";

const CreateResultContext = createContext({});

const INITIAL_STATE = {
  description: "",
  amount: "",
  isPermanent: false,
  time: "per day",
};

const ACTIONS = {
  CHANGE_DESCRIPTION: "CHANGE_DESCRIPTION",
  CHANGE_AMOUNT: "CHANGE_AMOUNT",
  TOGGLE_IS_PERMANENT: "TOGGLE_IS_PERMANENT",
  CHANGE_TIME: "CHANGE_TIME",
  RESET: "RESET"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_DESCRIPTION:
      return { ...state, description: action.payload };
    case ACTIONS.CHANGE_AMOUNT:
      return { ...state, amount: action.payload };
    case ACTIONS.TOGGLE_IS_PERMANENT:
      return { ...state, isPermanent: !state.isPermanent };
    case ACTIONS.CHANGE_TIME:
      return { ...state, time: action.payload };
    case ACTIONS.RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export function CreateResultContextProvider({ children }) {
  const [ newResult, setNewResult ] = useState({});
  const [ index, setIndex ] = useState(undefined);
  const [ { description, amount, isPermanent, time }, dispatch ] = useReducer(
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
        newResult,
        index,
        changeDescription: (description) =>
          dispatch({ type: ACTIONS.CHANGE_DESCRIPTION, payload: description }),
        changeAmount: (amount) =>
          dispatch({ type: ACTIONS.CHANGE_AMOUNT, payload: amount }),
        toggleIsPermanent: () =>
          dispatch({ type: ACTIONS.TOGGLE_IS_PERMANENT }),
        changeTime: (time) =>
          dispatch({ type: ACTIONS.CHANGE_TIME, payload: time }),
        reset: () =>
          dispatch({ type: ACTIONS.RESET }),
        setIndex,
        setNewResult,
      }}
    >
      {children}
    </CreateResultContext.Provider>
  );
}

export default CreateResultContext;
