import { useState, useEffect, useContext } from "react";
import ResultsContext from "contexts/ResultsContext";
import SearchResultContext from "contexts/SearchResultContext";
import Result from "../Result";

export default function ListOfResults({ searchInputValue }) {
  const { isPermanent, isIncome, isRemittance } = useContext(SearchResultContext);
  const { results } = useContext(ResultsContext);
  const [ renderResults, setRenderResults ] = useState(results);
  
  useEffect(() => {
    setRenderResults(results)
  }, [ results ]);

  useEffect(() => {
    let info = results;

    if(isPermanent) info = info.filter(result => result.isPermanent);
    if(isIncome) info = info.filter(result => result.amount > 0);
    if(isRemittance) info = info.filter(result => result.amount < 0);

    setRenderResults(info);

    if (searchInputValue) {
      info = info.filter((result) =>
        result.description.toLowerCase().includes(searchInputValue)
      );
    }

    setRenderResults(info);
  }, [ searchInputValue, isPermanent, isIncome, isRemittance, results ]);

  return renderResults.map((result) => {
    return (
      <Result
        amount={result.amount}
        description={result.description}
        isPermanent={result.isPermanent}
        time={result.time}
        key={result._id}
        resultId={result._id}
      />
    );
  });
}