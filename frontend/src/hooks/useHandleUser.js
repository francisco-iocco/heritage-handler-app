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
  const [isLoading, setIsLoading] = useState(false);
  const cleanError = (error) => setErrors((prevErrors) => {
    let newErrors = {};
    for(const prevError in prevErrors) {
      if(prevError === error) continue;
      newErrors[prevError] = prevErrors[prevError];
    }
    return newErrors;
  });

  const inputsValidation = async (inputs = {}, callback) => {
    let err = false;
    for(let input in inputs) {
      inputs[input] = inputs[input].trim();
      if(!inputs[input]) {
        if(input.includes("username")) input = "username";
        err = true;
        setErrors((prevErrors) =>
          ({ ...prevErrors, [input]: `${input} is required...` }));
        continue;
      }
      if(input.includes("username") || input === "password") {
        if(inputs[input].length < 6) {
          if(input.includes("username")) input = "username";
          err = true;
          setErrors(prevErrors =>
            ({ ...prevErrors, [input]: `${input} is too short...`}));
            continue;
        }
      }
    }   
      
    if(Object.keys(errors).length) return true;
    if(err) return true;

    setIsLoading(true);
    err = await callback(inputs);
    setIsLoading(false);
    if(err) return err;
  }

  const logUser = async ({ username, password }) => {
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
    logUser: ({ username, password }) =>
      inputsValidation({ username, password }, logUser),
    registerUser: ({ username, password, heritage, idToBeLinked }) => {
      return inputsValidation(
        { username, password, heritage },
        (checkedData) => registerUser({ ...checkedData, idToBeLinked })
      );
    },
    updateLastConnection: ({ lastConnection }) =>
      inputsValidation({}, () => updateUser({ lastConnection })),
    linkUser: ({ usernameToBeLinked }) =>
      inputsValidation({ usernameToBeLinked }, updateUser),
    unlinkUser: ({ idToBeUnlinked }) =>
      inputsValidation({}, () => updateUser({ idToBeUnlinked })),
    handleUserResponse: ({ linkUserResponse }) =>
      inputsValidation({}, () => updateUser({ linkUserResponse })),
    changeUsername: ({ username }) => 
      inputsValidation({ username }, updateUser),
    changePassword: ({ password }) => 
      inputsValidation({ password }, updateUser),
    deleteUser: () => inputsValidation({}, deleteUser),
    changeUser: ({ userId }) => 
      inputsValidation({}, () => changeUser({ userId })),
    validateCredentials: ({ password }) =>
      inputsValidation({ password }, validateCredentials),
    isLoading,
    errors,
    cleanError
  };
}
