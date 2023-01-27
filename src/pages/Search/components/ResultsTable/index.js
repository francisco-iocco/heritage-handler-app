import { useContext, useState } from "react";
import ListOfResults from "./components/ListOfResults";
import SearchResultContext from "contexts/SearchResultContext";
import StyledResultsDiv from "./styles";

export default function ResultsTable() {
  const { isSearchInputActive, reset } = useContext(SearchResultContext);
  const [ searchInputValue, setSearchInputValue ] = useState("");

  const handleInputValue = ({ target: { value } }) => {
    setSearchInputValue(value);
  }

  const closeSearchInput = () => {
    reset();
    setSearchInputValue("");
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
            <input autoFocus onChange={handleInputValue} type="text" />
            <button onClick={closeSearchInput}>x</button>
          </div>
        )}
      </StyledResultsDiv>
    </>
  );
}
