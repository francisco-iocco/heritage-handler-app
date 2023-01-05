import { useContext, useState } from "react";
import ListOfResults from "./components/ListOfResults";
import SearchContext from "contexts/SearchContext";
import StyledResultsDiv from "./styles";

export default function ResultsTable() {
  const { isSearchInputActive, toggleSearchInput } = useContext(SearchContext);
  const [ searchInputValue, setSearchInputValue ] = useState("");

  const handleInputValue = ({ target: { value } }) => {
    setSearchInputValue(value);
  }

  const closeSearchInput = () => {
    setSearchInputValue("");
    toggleSearchInput();
  }

  return (
    <>
      <StyledResultsDiv>
        <table>
          <thead>
            <tr className="head-row">
              <th>
                <span>Title</span>
              </th>
              <th>
                <span>Amount</span>
              </th>
              <th>
                <span>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <ListOfResults searchInputValue={searchInputValue.toLowerCase()} />
          </tbody>
        </table>
        {isSearchInputActive && (
          <div className="search-container">
            <input type="text" autoFocus onChange={handleInputValue} />
            <button onClick={closeSearchInput}>x</button>
          </div>
        )}
      </StyledResultsDiv>
    </>
  );
}
