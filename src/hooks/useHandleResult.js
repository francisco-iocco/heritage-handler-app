import { useContext } from "react";
import JWTContext from "contexts/JWTContext";
import ResultsContext from "contexts/ResultsContext";
import createResult from "services/createResult";
import editResult from "services/editResult";
import deleteResult from "services/deleteResult";

export default function useHandleResult() {
  const { JWT } = useContext(JWTContext);
  const { updateResults } = useContext(ResultsContext);
  return {
    createResult: async ({ data, type }) => {
      await createResult({ data, type, JWT });
      updateResults();
    },
    editResult: async ({ data, type, id }) => {
      await editResult({ data, id, type, JWT });
      updateResults();
    },
    deleteResult: async ({ id, type }) => {
      await deleteResult({ id, type, JWT });
      updateResults();
    },
  };
}
