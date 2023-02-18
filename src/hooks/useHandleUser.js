import { useContext, useState } from "react";
import UserDataContext from "contexts/UserDataContext";
import getUserDataService from "services/getUserData";
import logUserService from "services/logUser";
import registerUserService from "services/registerUser";
import updateUserService from "services/updateUser";
import deleteUserService from "services/deleteUser";

export default function useHandleUser() {
  const { userData, setUserData } = useContext(UserDataContext);
  const [ errors, setErrors ] = useState({});
  const cleanError = (error) => setErrors((prevErrors) => {
    let newErrors = {};
    for(const prevError in prevErrors) {
      if(prevError === error) continue;
      newErrors[prevError] = prevErrors[prevError];
    }
    return newErrors;
  })

  const inputsValidation = ({ email, password, heritage }) => {
    let hasError = false;

    if(email === "") {
      hasError = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, email: "Email is required..." };
      });
    }
    if(email && email.length < 6) {
      hasError = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, email: "Email is too short..." };
      });
    }

    if(password === "") {
      hasError = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, password: "Password is required..." };
      });
    }
    if(password && password.length < 6) {
      hasError = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, password: "Password is too short..." };
      });
    }

    if( heritage === "") {
      hasError = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, heritage: "Heritage is required..." };
      });
    }

    return hasError;
  }

  // The next functions return errors (in case there are)
  // otherwise they return nothing.

  const logUser = async ({ email, password }) => {
    const hasError = inputsValidation({ email, password });
    if (hasError) return hasError;

    const response = await logUserService({ email, password });
    if (response.errors) {
      setErrors(response.errors);
      return true;
    }

    const data = await getUserDataService({ userId: response.userId });
    setUserData(data);
  }

  const registerUser = async ({ email, password, heritage, idToBeLinked }) => {
    const hasError = inputsValidation({ email, password, heritage });
    if (hasError) return hasError;
    
    const response = await registerUserService({
      email,
      password,
      heritage,
      idToBeLinked,
    });
    if (response.errors) {
      setErrors(response.errors);
      return true;
    }

    const data = await getUserDataService({ userId: response.userId });
    setUserData(data);
  }

  const updateUser = async ({
    email,
    password,
    lastConnection,
    emailToBeLinked,
    idToBeUnlinked,
    linkUserResponse,
  }) => {
    const hasError = emailToBeLinked
      ? inputsValidation({ email: emailToBeLinked })
      : inputsValidation({ email, password });
    if (hasError) return hasError;
    
    const response = await updateUserService({ 
      userId: userData._id,
      email, 
      password, 
      lastConnection, 
      emailToBeLinked,
      idToBeUnlinked,
      linkUserResponse 
    });
    if (response.errors) {
      setErrors(response.errors);
      return true;
    }

    const data = await getUserDataService({ userId: userData._id });
    setUserData(data);
  }

  const deleteUser = async () => {
    await deleteUserService({ userId: userData._id });
    setUserData({});
  }

  const changeUser = async ({ userId }) => {
    const data = await getUserDataService({ userId });
    setUserData(data);
  }

  return {
    logUser,
    registerUser,
    updateUser,
    deleteUser,
    changeUser,
    errors,
    cleanError
  };
}
