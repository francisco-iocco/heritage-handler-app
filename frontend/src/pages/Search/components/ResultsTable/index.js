import { useContext, useState } from "react";
import SearchResultContext from "contexts/SearchResultContext";
import ResultsContext from "contexts/ResultsContext";
import Spinner from "components/Spinner";
import ListOfResults from "./components/ListOfResults";
import StyledResultsDiv from "./styles";

export default function ResultsTable() {
  const { isSearchInputActive, reset } = useContext(SearchResultContext);
  const { isLoading } = useContext(ResultsContext);
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleInputValue = ({ target: { value } }) => {
    setSearchInputValue(value);
  };

  const closeSearchInput = () => {
    reset();
    setSearchInputValue("");
  };

  if(isLoading) return <Spinner />;

  return (
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
  );
}
