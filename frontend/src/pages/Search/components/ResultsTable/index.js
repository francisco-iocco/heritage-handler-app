import { useState, useContext, useRef } from "react";
import SearchResultContext from "contexts/SearchResultContext";
import ResultsContext from "contexts/ResultsContext";
import { IconX } from "@tabler/icons-react";
import ListOfResults from "./components/ListOfResults";
import { StyledTable, StyledInput, StyledWarning } from "./styles";

export default function ResultsTable() {
  const { showSearchInput, toggleSearchInput } = useContext(SearchResultContext);
  const { results } = useContext(ResultsContext);
  const [inputValue, setInputValue] = useState("");
  const [direction, setDirection] = useState("");
  const lastScrollY = useRef(0);

  const handleScroll = ({ target: { scrollTop } }) => {
    const nextDirection = scrollTop > lastScrollY.current
      ? "down"
      : "up";
    lastScrollY.current = scrollTop;
    direction != nextDirection && setDirection(nextDirection);
  };

  const handleInputValue = ({ target: { value } }) =>
    setInputValue(value);

  const closeSearchInput = () => {
    setInputValue("");
    toggleSearchInput();
  };

  if(!results.length) {
    return <StyledWarning>
      <p>There are neither incomes nor remittances yet!</p>
    </StyledWarning>
  }

  return (
    <>
      <StyledTable onScroll={handleScroll} direction={direction}>
        <thead>
          <tr className="head-row">
            <th>
              <span>Description</span>
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
          <ListOfResults searchInputValue={inputValue.toLowerCase()} />
        </tbody>
      </StyledTable>
      {showSearchInput && <StyledInput>
         <input autoFocus onChange={handleInputValue} type="text" />
         <button onClick={closeSearchInput}><IconX /></button>
      </StyledInput>}
    </>
  );
}
