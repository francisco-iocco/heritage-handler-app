import { useContext } from "react";
import JWTContext from "contexts/JWTContext";
import ResultsContext from "contexts/ResultsContext";
import createResult from "services/createResult";

export default function useCreateResult() {
  const { JWT } = useContext(JWTContext);
  const { updateResults } = useContext(ResultsContext);
  return {
    createResult: async ({data, type}) => {
      await createResult({data, type, JWT});
      updateResults();
    }
  };
}