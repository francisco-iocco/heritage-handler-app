import { createContext, useContext, useEffect, useState } from "react";
import getResults from "services/getResults";
import UserDataContext from "./UserDataContext";

const ResultsContext = createContext({});

export function ResultsContextProvider({ children }) {
  const { userData } = useContext(UserDataContext);
  const [ results, setResults ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const updateResults = async () => {
    const incomes = await getResults({ type: "income", userId: userData._id });
    const remittances = await getResults({ type: "remittance", userId: userData._id });
    let results = [ ...incomes, ...remittances ];
    results = results.sort((a, b) => {
      const firstDate = new Date(a.created_at).getTime();
      const secondDate = new Date(b.created_at).getTime();
      if (firstDate < secondDate) {
        return 1;
      } else if (firstDate > secondDate) {
        return -1;
      }
      return 0;
    });
    setResults(results);
    setIsLoading(false);
  }

  useEffect(() => { userData._id && updateResults() }, [ userData._id ]);

  return (
    <ResultsContext.Provider value={{ results, updateResults, isLoading }}>
      {children}
    </ResultsContext.Provider>
  )
} 

export default ResultsContext;