import { useContext, useState } from "react";
import SearchResultContext from "contexts/SearchResultContext";
import StyledSearchForm from "./styles";
import { StyledCheckbox } from "components/UserForm/styles";

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
  } = useContext(SearchResultContext);
  const [animation, setAnimation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setAnimation("click-search");
    onSubmit(e);
    toggleSearchInput();
  };

  const handleClear = (e) => {
    e.preventDefault();
    setAnimation("click-clear");
    reset();
  };

  return (
    <StyledSearchForm 
      title={title} 
      animation={animation}
      onAnimationEnd={() => setAnimation("")}
    >
      <h2>{title}</h2>
      <StyledCheckbox>
        <label htmlFor="permanent">Permanent</label>
        <input
          checked={isPermanent}
          id="permanent"
          onChange={toggleIsPermanent}
          type="checkbox"
        />
      </StyledCheckbox>
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
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
        <button onClick={handleSearch}>Search</button>
      </div>
    </StyledSearchForm>
  );
}
