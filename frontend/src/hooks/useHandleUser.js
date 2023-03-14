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
  });

  const inputsValidation = ({ username, password, heritage }) => {
    let hasError = false;

    if(username === "") {
      hasError = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, username: "Username is required..." };
      });
    }
    if(password === "") {
      hasError = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, password: "Password is required..." };
      });
    }
    if(heritage === "") {
      hasError = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, heritage: "Heritage is required..." };
      });
    }

    return hasError;
  }

  // The next functions return errors (in case there are)
  // otherwise they return nothing.

  const logUser = async ({ username, password }) => {
    const hasError = inputsValidation({ username, password });
    if (hasError) return hasError;

    const response = await logUserService({ username, password });
    if (response.errors) {
      setErrors(response.errors);
      return true;
    }

    localStorage.setItem("userId", response.userId);

    const data = await getUserDataService({ userId: response.userId });
    if(data?.errors) return true;
    setUserData(data);
  }

  const registerUser = async ({ username, password, heritage, idToBeLinked }) => {
    let hasError = inputsValidation({ username, password, heritage });
    if(username && username.length < 6) {
      hasError = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, username: "Username is too short..." };
      });
    }
    if(password && password.length < 6) {
      hasError = true;
      setErrors((prevErrors) => {
        return { ...prevErrors, password: "Password is too short..." };
      });
    }
    if (hasError) return hasError;
    
    const response = await registerUserService({
      username,
      password,
      heritage,
      idToBeLinked,
    });
    if (response.errors) {
      setErrors(response.errors);
      return true;
    }

    localStorage.setItem("userId", response.userId);

    const data = await getUserDataService({ userId: response.userId });
    if(data?.errors) return true;
    setUserData(data);
  }

  const updateUser = async ({
    username,
    password,
    lastConnection,
    usernameToBeLinked,
    idToBeUnlinked,
    linkUserResponse,
  }) => {
    const hasError = usernameToBeLinked
      ? inputsValidation({ username: usernameToBeLinked })
      : inputsValidation({ username, password });
    if (hasError) return hasError;
    
    const response = await updateUserService({ 
      userId: userData._id,
      username, 
      password, 
      lastConnection, 
      usernameToBeLinked,
      idToBeUnlinked,
      linkUserResponse
    });
    if (response?.errors) {
      setErrors(response.errors);
      return true;
    }

    if(lastConnection || usernameToBeLinked) return;

    const data = await getUserDataService({ userId: userData._id });
    if(data?.errors) return true;
    setUserData(data);
  }

  const deleteUser = async () => {
    const data = await deleteUserService({ userId: userData._id });
    if(data?.errors) return true;
    setUserData({});
  }

  const changeUser = async ({ userId }) => {
    const data = await getUserDataService({ userId });
    if(data?.errors) return true;
    setUserData(data);
  }

  const validateCredentials = async ({ password }) => {
    if(password !== userData.password) {
      setErrors({ password: "Password is incorrect..."});
      return true;
    }
    const data = await getUserDataService({ userId: userData._id });
    if(data?.errors) return true;
  }

  return {
    logUser,
    registerUser,
    updateUser,
    deleteUser,
    changeUser,
    validateCredentials,
    errors,
    cleanError
  };
}
