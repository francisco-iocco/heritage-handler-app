import { useContext, useState, useReducer } from "react";
import UserDataContext from "contexts/UserDataContext";
import getUserData from "services/getUserData";
import ResultsContext from "contexts/ResultsContext";
import createResultService from "services/createResult";
import editResultService from "services/editResult";
import deleteResultService from "services/deleteResult";

export default function useHandleResult(resultToUpdate) {
  const { userData, setUserData } = useContext(UserDataContext);
  const { updateResults } = useContext(ResultsContext);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const cleanError = (error) => setErrors((prevErrors) => {
    let newErrors = {};
    for (const prevError in prevErrors) {
      if (prevError === error) continue;
      newErrors[prevError] = prevErrors[prevError];
    }
    return newErrors;
  });

  const inputsValidation = async (inputs = {}) => {
    let err = false;
    for(const input in inputs) {
      if(!inputs[input]) {
        err = true;
        setErrors((prevErrors) =>
          ({ ...prevErrors, [input]: `${input} is required...` }));
        continue;
      }
    }

    if(Object.keys(errors).length) return true;
    if(err) return true;
  }

  const createResult = async ({
    description,
    amount,
    isPermanent,
    time,
    type
  }) => {
    const hasError = await inputsValidation({ description, amount });
    if (hasError) return hasError;
    
    setIsLoading(true);
    const response = await createResultService({
      description,
      amount,
      isPermanent,
      time,
      type,
      userId: userData._id,
    });
    if (response?.errors) {
      setErrors(response.errors);
      return true;
    }
    
    await updateResults();
    setUserData(await getUserData({ userId: userData._id }));

    setIsLoading(false);
  };

  const editResult = async ({
    description,
    amount,
    resultId,
    type,
  }) => {
    const hasError = await inputsValidation({ description, amount });
    if (hasError) return hasError;

    if(
      description === resultToUpdate.description &&
      amount === resultToUpdate.amount
    ) return;

    setIsLoading(true);
    const response = await editResultService({
      description,
      amount,
      resultId,
      type,
      userId: userData._id,
    });
    if (response?.errors) {
      setErrors(response.errors);
      return true;
    }
    
    await updateResults();
    setUserData(await getUserData({ userId: userData._id }));

    setIsLoading(false);
  };

  const deleteResult = async ({ resultId, type }) => {
    setIsLoading(true);
    const response = await deleteResultService({
      resultId,
      type,
      userId: userData._id,
    });
    if (response?.errors) {
      setErrors(response.errors);
      return true;
    }

    await updateResults();
    setUserData(await getUserData({ userId: userData._id }));
    setIsLoading(false);
  };

  return {
    createResult,
    editResult,
    deleteResult,
    isLoading,
    errors,
    cleanError,
  };
}
