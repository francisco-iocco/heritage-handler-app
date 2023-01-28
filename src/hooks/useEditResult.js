import { useContext } from "react";
import JWTContext from "contexts/JWTContext";
import ResultsContext from "contexts/ResultsContext";
import editResult from "services/editResult";

export default function useEditResult() {
  const { JWT } = useContext(JWTContext);
  const { updateResults } = useContext(ResultsContext);
  return {
    editResult: async ({data, type, id}) => {
      await editResult({data, id, type, JWT});
      updateResults();
    }
  };
}