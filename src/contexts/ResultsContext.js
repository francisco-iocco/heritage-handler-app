import { createContext, useContext, useEffect, useState } from "react";
import getResults from "services/getResults";
import UserDataContext from "./UserDataContext";

const ResultsContext = createContext({});

export function ResultsContextProvider({ children }) {
  const [ results, setResults ] = useState([]);
  const { userData } = useContext(UserDataContext);

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
  }

  useEffect(() => { userData._id && updateResults() }, []);

  return (
    <ResultsContext.Provider value={{ results, updateResults }}>
      {children}
    </ResultsContext.Provider>
  )
} 

export default ResultsContext;