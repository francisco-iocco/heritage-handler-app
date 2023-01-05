import { createContext } from "react";
import useSearch from "./hook";

const SearchContext = createContext({});

export function SearchContextProvider({ children }) {
  const {
    toggleSearchInput,
    toggleIsPermanent,
    toggleIsIncome,
    toggleIsRemittance,
    showSearchInput,
    isPermanent,
    isIncome,
    isRemittance,
  } = useSearch();

  return (
    <SearchContext.Provider
      value={{
        toggleSearchInput,
        toggleIsPermanent,
        toggleIsIncome,
        toggleIsRemittance,
        showSearchInput,
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
