import { useState, createContext, useEffect } from "react";
import getUserData from "services/getUserData";

const UserDataContext = createContext({});

export function UserDataContextProvider({ children }) {
  const [ userData, setUserData ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    (async () => {
      const userId = localStorage.getItem("userId");
      !userId && setIsLoading(false);
      userId && setUserData(await getUserData({ userId }));
    })();
  }, []);

  useEffect(() => { userData._id && setIsLoading(false) }, [ userData ]);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData,
        isLoading
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataContext;
