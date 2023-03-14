import { useState, createContext, useEffect } from "react";
import getUserData from "services/getUserData";

const UserDataContext = createContext({});

export function UserDataContextProvider({ children }) {
  const [ userData, setUserData ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    (async () => {
      if (!userData._id) {
        const userId = localStorage.getItem("userId");
        userId && setUserData(await getUserData({ userId }));
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <UserDataContext.Provider
      value={{ userData, setUserData, isLoading, setIsLoading }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataContext;
