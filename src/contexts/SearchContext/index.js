import { createContext } from "react";
import useSearch from "./hook";

const SearchContext = createContext({});

export function SearchContextProvider({ children }) {
  const {
    convertToIncome,
    convertToRemittance,
    toggleSearchInput,
    toggleIsPermanent,
    reset,
    isSearchInputActive,
    isPermanent,
    isIncome,
    isRemittance,
  } = useSearch();

  return (
    <SearchContext.Provider
      value={{
        convertToIncome,
        convertToRemittance,
        toggleSearchInput,
        toggleIsPermanent,
        reset,
        isSearchInputActive,
        isPermanent,
        isIncome,
        isRemittance,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
