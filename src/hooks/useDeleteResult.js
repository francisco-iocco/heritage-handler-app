import { useContext } from "react";
import JWTContext from "contexts/JWTContext";
import ResultsContext from "contexts/ResultsContext";
import deleteResult from "services/deleteResult";

export default function useDeleteResult() {
  const { JWT } = useContext(JWTContext);
  const { updateResults } = useContext(ResultsContext);
  return {
    deleteResult: async ({id, type}) => {
      await deleteResult({id, type, JWT});
      updateResults();
    }
  };
}