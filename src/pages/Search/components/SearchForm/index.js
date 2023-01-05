import { useContext } from "react";
import SearchContext from "contexts/SearchContext";
import StyledSearchForm from "./styles";

export default function SearchForm({ title, onSubmit }) {
  const {
    toggleSearchInput,
    toggleIsPermanent,
    convertToIncome,
    convertToRemittance,
    isPermanent,
    isIncome,
    isRemittance,
    reset,
  } = useContext(SearchContext);

  const handleSearchButton = (e) => {
    e.preventDefault();
    toggleSearchInput();
    onSubmit(e);
  };

  return (
    <StyledSearchForm title={title} onSubmit={handleSearchButton}>
      <h2>{title}</h2>
      <div>
        <label htmlFor="permanent">Permanent</label>
        <input
          checked={isPermanent}
          id="permanent"
          onClick={toggleIsPermanent}
          type="checkbox"
        />
      </div>
      <div>
        <label htmlFor="incomes">Incomes</label>
        <input
          checked={isIncome}
          id="incomes"
          name="type"
          onChange={convertToIncome}
          type="radio"
        />
      </div>
      <div>
        <label htmlFor="remittances">Remittances</label>
        <input
          checked={isRemittance}
          id="remittances"
          name="type"
          onChange={convertToRemittance}
          type="radio"
        />
      </div>
      <div>
        <button type="button" onClick={reset}>
          Clear
        </button>
        <button type="submit">Search</button>
      </div>
    </StyledSearchForm>
  );
}
