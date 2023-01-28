import { useState, useEffect, useContext } from "react";
import ResultsContext from "contexts/ResultsContext";
import SearchResultContext from "contexts/SearchResultContext";
import useDeleteResult from "hooks/useDeleteResult";
import Result from "../Result";

export default function ListOfResults({ searchInputValue }) {
  const { isPermanent, isIncome, isRemittance } = useContext(SearchResultContext);
  const { results, updateResults } = useContext(ResultsContext);
  const [ renderResults, setRenderResults ] = useState(results);
  const { deleteResult } = useDeleteResult();
  
  useEffect(() => setRenderResults(results), [ results ]);

  useEffect(() => {
    let info = results;

    isPermanent ? info = info.filter(result => result.isPermanent) : info = info;
    isIncome ? info = info.filter(result => result.amount > 0) : info = info;
    isRemittance ? info = info.filter(result => result.amount < 0) : info = info;

    setRenderResults(info);

    if (searchInputValue) {
      info = info.filter((result) =>
        result.description.toLowerCase().includes(searchInputValue)
      );
    }

    setRenderResults(info);
  }, [ searchInputValue, isPermanent, isIncome, isRemittance, results ]);

  const handleDelete = async (id, type) => {
    await deleteResult({ type, id });
    updateResults();
  };

  return renderResults.map((result) => {
    const onDelete = () => {
      const type = result.amount > 0 ? "income" : "remittance";
      handleDelete(result._id, type);
    };
    return (
      <Result
        amount={result.amount}
        description={result.description}
        isPermanent={result.isPermanent}
        time={result.time}
        key={result._id}
        id={result._id}
        onDelete={onDelete}
      />
    );
  });
}
