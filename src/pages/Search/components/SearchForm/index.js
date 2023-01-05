import StyledSearchForm from "./styles";
import SearchContext from "contexts/SearchContext";
import { useContext } from "react";

export default function SearchForm({ title, onSubmit }) {
  const {
    toggleSearchInput,
    toggleIsPermanent,
    toggleIsIncome,
    toggleIsRemittance,
    isPermanent,
    isIncome,
    isRemittance,
  } = useContext(SearchContext);

  const handlePermanentButton = () => toggleIsPermanent();
  const handleIncomeButton = () => toggleIsIncome();
  const handleRemittanceButton = () => toggleIsRemittance();
  
  const handleSearchButton = (e) => onSubmit(e, () => toggleSearchInput());

  return (
    <StyledSearchForm title={title}>
      <h2>{title}</h2>
      <div>
        <label htmlFor="permanent">Permanent</label>
        <input
          type="checkbox"
          id="permanent"
          onClick={handlePermanentButton}
          defaultChecked={isPermanent}
        />
      </div>
      <div>
        <label htmlFor="incomes">Incomes</label>
        <input
          type="checkbox"
          id="incomes"
          onChange={handleIncomeButton}
          checked={isIncome}
        />
      </div>
      <div>
        <label htmlFor="remittances">Remittances</label>
        <input
          type="checkbox"
          id="remittances"
          onChange={handleRemittanceButton}
          checked={isRemittance}
        />
      </div>
      <button type="submit" onClick={handleSearchButton}>
        Search
      </button>
    </StyledSearchForm>
  );
}
