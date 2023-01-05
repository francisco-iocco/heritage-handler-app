import { useReducer } from "react";

const INITIAL_STATE = {
  showSearchInput: false,
  isPermanent: false,
  isIncome: false,
  isRemittance: false,
};

const ACTIONS = {
  TOGGLE_SEARCH_INPUT: "TOGGLE_SEARCH_INPUT",
  TOGGLE_IS_PERMANENT: "TOGGLE_IS_PERMANENT",
  TOGGLE_IS_INCOME: "TOGGLE_IS_INCOME",
  TOGGLE_IS_REMITTANCE: "TOGGLE_IS_REMITTANCE",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_SEARCH_INPUT:
      return { ...state, showSearchInput: !state.showSearchInput };
    case ACTIONS.TOGGLE_IS_PERMANENT:
      return { ...state, isPermanent: !state.isPermanent };
    case ACTIONS.TOGGLE_IS_INCOME:
      return { ...state, isIncome: !state.isIncome, isRemittance: false };
    case ACTIONS.TOGGLE_IS_REMITTANCE:
      return { ...state, isRemittance: !state.isRemittance, isIncome: false };
    default:
      return state;
  }
}

export default function useSearch() {
  const [{ showSearchInput, isPermanent, isIncome, isRemittance }, dispatch] =
    useReducer(reducer, INITIAL_STATE);

  return {
    toggleSearchInput: () => dispatch({ type: ACTIONS.TOGGLE_SEARCH_INPUT }),
    toggleIsPermanent: () => dispatch({ type: ACTIONS.TOGGLE_IS_PERMANENT }),
    toggleIsIncome: () => dispatch({ type: ACTIONS.TOGGLE_IS_INCOME }),
    toggleIsRemittance: () => dispatch({ type: ACTIONS.TOGGLE_IS_REMITTANCE }),
    showSearchInput,
    isPermanent,
    isIncome,
    isRemittance,
  };
}
