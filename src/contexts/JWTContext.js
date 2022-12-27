import { useState, createContext } from "react";

const JWTContext = createContext({});

export function JWTContextProvider({ children }) {
  const [JWT, setJWT] = useState("");

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
