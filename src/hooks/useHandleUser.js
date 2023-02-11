import { useContext } from "react";
import UserDataContext from "contexts/UserDataContext";
import getUserData from "services/getUserData";
import logUser from "services/logUser";
import registerUser from "services/registerUser";
import updateUser from "services/updateUser";

export default function useHandleUser() {
  const {
    userData: { _id },
    setUserData,
  } = useContext(UserDataContext);

  return {
    logUser: async ({ email, password }) => {
      const { userId, errors } = await logUser({ email, password });

      if(errors) return errors;

      const userData = await getUserData({ userId });
      setUserData(userData);
    },
    registerUser: async ({ email, password, heritage }) => {
      const { userId } = await registerUser({ email, password, heritage });
      const userData = await getUserData({ userId });
      setUserData(userData);
    },
    updateUser: async ({
      email,
      password,
      heritage,
      lastConnection,
      emailToBeLinked,
      linkedUserResponse,
    }) => {
      await updateUser({  
        userId: _id,  
        email,
        password,
        heritage,
        lastConnection,
        emailToBeLinked,
        linkedUserResponse
      });
      const userData = await getUserData({ userId: _id });
      setUserData(userData);
    },
  };
}
