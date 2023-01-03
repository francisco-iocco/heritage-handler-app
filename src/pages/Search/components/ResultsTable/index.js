import StyledResultsDiv from "./styles";
import ListOfResults from "./components/ListOfResults";
import { useContext, useState } from "react";
import SearchContext from "contexts/SearchContext";

export default function ResultsTable() {
  const { showSearchInput, setShowSearchInput } = useContext(SearchContext);
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleInputValue = ({ target: { value } }) => {
    setSearchInputValue(value);
  }

  const closeSearchInput = ({ target: { value } }) => {
    setShowSearchInput(false);
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
        {showSearchInput && (
          <div className="search-container">
            <input type="text" autoFocus onChange={handleInputValue} />
            <button onClick={closeSearchInput}>x</button>
          </div>
        )}
      </StyledResultsDiv>
    </>
  );
}
