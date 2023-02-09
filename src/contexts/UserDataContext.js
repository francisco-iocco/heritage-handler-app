import { useState, createContext } from "react";

const UserDataContext = createContext({});

export function UserDataContextProvider({ children }) {
  const [ userData, setUserData ] = useState({});

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataContext;
