import { createContext, useEffect, useState } from "react";
import getResults from "services/getResults";

const ResultsContext = createContext({});

export function ResultsContextProvider({ children }) {
  const [ results, setResults ] = useState([]);

  const updateResults = async () => {
    const incomes = await getResults({ type: "income" });
    const remittances = await getResults({ type: "remittance" });
    let results = [...incomes, ...remittances];
    results = results.sort((a, b) => {
      const firstDate = new Date(a.updated_at).getTime();
      const secondDate = new Date(b.updated_at).getTime();
      if (firstDate > secondDate) {
        return 1;
      } else if (firstDate < secondDate) {
        return -1;
      }
      return 0;
    });
    setResults(results);
  }

  useEffect(() => { updateResults() }, []);

  return (
    <ResultsContext.Provider value={{ results, updateResults }}>
      {children}
    </ResultsContext.Provider>
  )
} 

export default ResultsContext;