import { createContext, useReducer } from "react";

const SearchResultContext = createContext({});

const INITIAL_STATE = {
  showSearchInput: false,
  isPermanent: false,
  isIncome: false,
  isRemittance: false,
};

const ACTIONS = {
  TOGGLE_SEARCH_INPUT: "TOGGLE_SEARCH_INPUT",
  TOGGLE_IS_PERMANENT: "TOGGLE_IS_PERMANENT",
  CONVERT_TO_INCOME: "CONVERT_TO_INCOME",
  CONVERT_TO_REMITTANCE: "CONVERT_TO_REMITTANCE",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_SEARCH_INPUT:
      return { ...state, showSearchInput: !state.showSearchInput };
    case ACTIONS.TOGGLE_IS_PERMANENT:
      return { ...state, isPermanent: !state.isPermanent };
    case ACTIONS.CONVERT_TO_INCOME:
      return { ...state, isIncome: true, isRemittance: false };
    case ACTIONS.CONVERT_TO_REMITTANCE:
      return { ...state, isRemittance: true, isIncome: false };
    case ACTIONS.RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export function SearchResultContextProvider({ children }) {
  const [
    { showSearchInput, isPermanent, isIncome, isRemittance },
    dispatch,
  ] = useReducer(reducer, INITIAL_STATE);

  return (
    <SearchResultContext.Provider
      value={{
        showSearchInput,
        isPermanent,
        isIncome,
        isRemittance,
        convertToIncome: () => 
          dispatch({ type: ACTIONS.CONVERT_TO_INCOME }),
        convertToRemittance: () =>
          dispatch({ type: ACTIONS.CONVERT_TO_REMITTANCE }),
        toggleSearchInput: () =>
          dispatch({ type: ACTIONS.TOGGLE_SEARCH_INPUT }),
        toggleIsPermanent: () =>
          dispatch({ type: ACTIONS.TOGGLE_IS_PERMANENT }),
        reset: () => 
          dispatch({ type: ACTIONS.RESET }),
      }}
    >
      {children}
    </SearchResultContext.Provider>
  );
}

export default SearchResultContext;
