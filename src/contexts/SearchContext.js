import { createContext, useState } from "react";

const SearchContext = createContext({});

export function SearchContextProvider({ children }) {
  const [showSearchInput, setShowSearchInput] = useState("");

  return (
    <SearchContext.Provider value={{ showSearchInput, setShowSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
