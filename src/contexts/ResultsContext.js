import { createContext, useEffect, useState } from "react";
import getResults from "services/getResults";

const ResultsContext = createContext({});

export function ResultsContextProvider({ children }) {
  const [ results, setResults ] = useState([]);

  const updateResults = async () => {
    const incomes = await getResults({ type: "income" });
    setResults(incomes);
  }

  useEffect(() => { updateResults() }, []);

  return (
    <ResultsContext.Provider value={{ results, updateResults }}>
      {children}
    </ResultsContext.Provider>
  )
} 

export default ResultsContext;