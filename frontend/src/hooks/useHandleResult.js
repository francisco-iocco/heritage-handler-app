import { useContext, useState, useReducer } from "react";
import UserDataContext from "contexts/UserDataContext";
import getUserData from "services/getUserData";
import ResultsContext from "contexts/ResultsContext";
import createResultService from "services/createResult";
import editResultService from "services/editResult";
import deleteResultService from "services/deleteResult";

const INITIAL_STATE = {
  description: "",
  amount: "",
  isPermanent: false,
  time: null,
};

const ACTIONS = {
  CHANGE_DESCRIPTION: "CHANGE_DESCRIPTION",
  CHANGE_AMOUNT: "CHANGE_AMOUNT",
  TOGGLE_IS_PERMANENT: "TOGGLE_IS_PERMANENT",
  CHANGE_TIME: "CHANGE_TIME",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_DESCRIPTION:
      return { ...state, description: action.payload };
    case ACTIONS.CHANGE_AMOUNT:
      return { ...state, amount: action.payload };
    case ACTIONS.TOGGLE_IS_PERMANENT:
      return {
        ...state,
        isPermanent: !state.isPermanent,
        time: !state.isPermanent ? "per day" : null,
      };
    case ACTIONS.CHANGE_TIME:
      return { ...state, time: action.payload };
    default:
      break;
  }
}

export default function useHandleResult(resultToUpdate) {
  const { userData, setUserData } = useContext(UserDataContext);
  const { updateResults } = useContext(ResultsContext);

  const [{ description, amount, isPermanent, time }, dispatch] = useReducer(
    reducer,
    resultToUpdate ? resultToUpdate : INITIAL_STATE
  );
  const changeDescription = (description) =>
    dispatch({ type: ACTIONS.CHANGE_DESCRIPTION, payload: description });
  const changeAmount = (amount) =>
    dispatch({ type: ACTIONS.CHANGE_AMOUNT, payload: parseInt(amount) });
  const toggleIsPermanent = () =>
    dispatch({ type: ACTIONS.TOGGLE_IS_PERMANENT });
  const changeTime = (time) =>
    dispatch({ type: ACTIONS.CHANGE_TIME, payload: time });
  
  const [errors, setErrors] = useState({});
  const cleanError = (error) =>
    setErrors((prevErrors) => {
      let newErrors = {};
      for (const prevError in prevErrors) {
        if (prevError === error) continue;
        newErrors[prevError] = prevErrors[prevError];
      }
      return newErrors;
    });

  const inputsValidation = ({ description, amount }) => {
    let hasError = false;
    if (!amount) {
      hasError = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, amount: "Amount is required..." };
      });
    }
    if (!description) {
      hasError = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, description: "Description is required..." };
      });
    }
    return hasError;
  };

  const createResult = async ({
    description,
    amount,
    isPermanent,
    time,
    type,
  }) => {
    const hasError = inputsValidation({ description, amount });
    if (hasError) return hasError;
    
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
  };

  const editResult = async ({
    description,
    amount,
    isPermanent,
    time,
    type,
    resultId,
  }) => {
    const hasError = inputsValidation({ description, amount });
    if (hasError) return hasError;

    if(
      description === resultToUpdate.description &&
      amount === resultToUpdate.amount &&
      isPermanent === resultToUpdate.isPermanent &&
      time === resultToUpdate.time
    ) return;

    const response = await editResultService({
      description,
      amount,
      isPermanent,
      time,
      type,
      resultId,
      userId: userData._id,
    });
    if (response?.errors) {
      setErrors(response.errors);
      return true;
    }

    await updateResults();
    setUserData(await getUserData({ userId: userData._id }));
  };

  const deleteResult = async ({ resultId, type }) => {
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
  };

  return {
    data: { description, amount, isPermanent, time },
    changeDescription,
    changeAmount,
    toggleIsPermanent,
    changeTime,
    createResult,
    editResult,
    deleteResult,
    errors,
    cleanError,
  };
}
