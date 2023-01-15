import { useContext, useReducer } from "react";
import CreateResultContext from "contexts/CreateResultContext";

const INITIAL_STATE = {
  description: "",
  amount: "",
  isPermanent: false,
  time: 0,
};

const ACTIONS = {
  CHANGE_DESCRIPTION: "CHANGE_DESCRIPTION",
  CHANGE_AMOUNT: "CHANGE_AMOUNT",
  TOGGLE_IS_PERMANENT: "TOGGLE_IS_PERMANENT",
  CHANGE_TIME: "CHANGE_TIME",
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
    default:
      return state;
  }
}

export default function useCreateResult() {
  const { newResult, setNewResult } = useContext(CreateResultContext);
  const [{ description, amount, isPermanent, time }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE
  );

  return {
    description,
    amount,
    isPermanent,
    time,
    newResult,
    changeDescription: (description) =>
      dispatch({ type: ACTIONS.CHANGE_DESCRIPTION, payload: description }),
    changeAmount: (amount) =>
      dispatch({ type: ACTIONS.CHANGE_AMOUNT, payload: amount }),
    toggleIsPermanent: () => 
      dispatch({ type: ACTIONS.TOGGLE_IS_PERMANENT }),
    changeTime: (time) =>
      dispatch({ type: ACTIONS.CHANGE_TIME, payload: time }),
    setNewResult,
  };
}
