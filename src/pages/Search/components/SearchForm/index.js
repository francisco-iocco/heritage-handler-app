import StyledSearchForm from "./styles";
import SearchContext from "contexts/SearchContext";
import { useContext } from "react";

export default function SearchForm({ title, onClose }) {
  const { setShowSearchInput } = useContext(SearchContext);

  const handleSearchButton = () => {
    setShowSearchInput(true);
    onClose();
  }

  return (
    <StyledSearchForm title={title}>
      <h2>{title}</h2>
      <div>
        <label htmlFor="incomes">Incomes</label>
        <input type="checkbox" id="incomes" />
      </div>
      <div>
        <label htmlFor="remittances">Remittances</label>
        <input type="checkbox" id="remittances" />
      </div>
      <div>
        <label htmlFor="permanent">Permanent</label>
        <input type="checkbox" id="permanent" />
      </div>
      <button type="submit" onClick={handleSearchButton}>
        Search
      </button>
    </StyledSearchForm>
  );
}
