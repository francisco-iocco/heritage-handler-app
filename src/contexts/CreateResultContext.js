import { createContext, useState } from "react";

const CreateResultContext = createContext({});

export function CreateResultContextProvider({ children }) {
  const [ newResult, setNewResult ] = useState({});

  return (
    <CreateResultContext.Provider value={{ newResult, setNewResult }}>
      {children}
    </CreateResultContext.Provider>
  );
}

export default CreateResultContext;