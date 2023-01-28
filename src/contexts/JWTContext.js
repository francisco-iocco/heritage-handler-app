import { useState, createContext } from "react";

const JWTContext = createContext({});

export function JWTContextProvider({ children }) {
  const [ JWT, setJWT ] = useState("63a97e384c7df6dee7864e7d");

  return (
    <JWTContext.Provider
      value={{
        JWT,
        setJWT,
      }}
    >
      {children}
    </JWTContext.Provider>
  );
}

export default JWTContext;
