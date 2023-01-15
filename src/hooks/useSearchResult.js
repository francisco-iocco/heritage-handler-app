import { useContext } from "react";
import SearchResultContext from "contexts/SearchResultContext";

export default function useSearch() {
  const {
    isSearchInputActive,
    isPermanent,
    isIncome,
    isRemittance,
    convertToIncome,
    convertToRemittance,
    toggleSearchInput,
    toggleIsPermanent,
    reset,
  } = useContext(SearchResultContext);

  return {
    isSearchInputActive,
    isPermanent,
    isIncome,
    isRemittance,
    convertToIncome,
    convertToRemittance,
    toggleSearchInput,
    toggleIsPermanent,
    reset,
  };
}
