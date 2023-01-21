import { useState, useEffect, useContext } from "react";
import ResultsContext from "contexts/ResultsContext";
import SearchResultContext from "contexts/SearchResultContext";
import Result from "../Result";
import deleteResult from "services/deleteResult";

export default function ListOfResults({ searchInputValue }) {
  const { isPermanent, isIncome, isRemittance } = useContext(SearchResultContext);
  const { results, updateResults } = useContext(ResultsContext);
  const [ renderResults, setRenderResults ] = useState(results);
  
  useEffect(() => setRenderResults(results), [ results ]);

  useEffect(() => {
    if (searchInputValue) {
      setRenderResults(results.filter((result) =>
        result.description.toLowerCase().includes(searchInputValue)
      ));
    } else {
      setRenderResults(results);
    }
  }, [ searchInputValue ]);

  useEffect(() => {
    let info = results;

    isPermanent ? info = info.filter(result => result.isPermanent) : info = info;
    isIncome ? info = info.filter(result => result.amount > 0) : info = info;
    isRemittance ? info = info.filter(result => result.amount < 0) : info = info;

    setRenderResults(info);
  }, [ isPermanent, isIncome, isRemittance ]);

  const handleDelete = async (id) => {
    await deleteResult({ type: "income", id });
    updateResults();
  };

  return renderResults.map((result) => {
    return (
      <Result
        amount={result.amount}
        description={result.description}
        isPermanent={result.isPermanent}
        time={result.time}
        key={result._id}
        id={result._id}
        onDelete={() => handleDelete(result._id)}
      />
    );
  });
}
