import { useContext, useState } from "react";
import UserDataContext from "contexts/UserDataContext";
import ResultsContext from "contexts/ResultsContext";
import createResultService from "services/createResult";
import editResultService from "services/editResult";
import deleteResultService from "services/deleteResult";

export default function useHandleResult() {
  const { userData } = useContext(UserDataContext);
  const { updateResults } = useContext(ResultsContext);
  const [ errors, setErrors ] = useState({});
  const cleanError = (error) => setErrors((prevErrors) => {
    let newErrors = {};
    for (const prevError in prevErrors) {
      if (prevError === error) continue;
      newErrors[prevError] = prevErrors[prevError];
    }
    return newErrors;
  })

  const inputsValidation = ({ description, amount }) => {
    let hasError = false;
    if (!amount) {
      hasError = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, amount: "Amount is required..." } 
      });
    }
    if (!description) {
      hasError = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, description: "Description is required..." } 
      });
    }
    return hasError;
  }

  const createResult = async ({
    description,
    amount,
    isPermanent,
    time,
    type
  }) => {
    const hasError = inputsValidation({ description, amount });
    if(hasError) return hasError;

    const response = await createResultService({ 
      description,
      amount,
      isPermanent,
      time,
      type,
      userId: userData._id
    });
    if (response?.errors) {
      setErrors(response.errors);
      return true;
    }
    
    updateResults();
  }

  const editResult = async ({
    description,
    amount,
    isPermanent,
    time,
    type,
    resultId,
  }) => {
    console.log(resultId)
    const hasError = inputsValidation({ description, amount });
    if(hasError) return hasError;

    const response = await editResultService({ 
      description,
      amount,
      isPermanent,
      time,
      type,
      resultId,
      userId: userData._id
    });
    if (response?.errors) {
      setErrors(response.errors);
      return true;
    }

    updateResults();
  }

  const deleteResult = async ({ resultId, type }) => {
    const response = await deleteResultService({ 
      resultId,
      type,
      userId: userData._id
    });
    if (response?.errors) {
      setErrors(response.errors);
      return true;
    }

    updateResults();
  }

  return {
    createResult,
    editResult,
    deleteResult,
    errors,
    cleanError
  };
}
