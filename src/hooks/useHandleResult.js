import { useContext } from "react";
import UserDataContext from "contexts/UserDataContext";
import ResultsContext from "contexts/ResultsContext";
import createResult from "services/createResult";
import editResult from "services/editResult";
import deleteResult from "services/deleteResult";

export default function useHandleResult() {
  const { userData } = useContext(UserDataContext);
  const { updateResults } = useContext(ResultsContext);
  return {
    createResult: async ({ data, type }) => {
      await createResult({ data, type, JWT: userData });
      updateResults();
    },
    editResult: async ({ data, type, id }) => {
      await editResult({ data, id, type, JWT: userData });
      updateResults();
    },
    deleteResult: async ({ id, type }) => {
      await deleteResult({ id, type, JWT: userData });
      updateResults();
    },
  };
}
