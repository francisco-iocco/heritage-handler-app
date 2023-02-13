import { useContext, useEffect } from "react";
import { ResultsContextProvider } from "contexts/ResultsContext";
import updateUser from "services/updateUser";
import UserDataContext from "contexts/UserDataContext";
import Router from "Router";
import "./App.css";

function App() {
  const { userData } = useContext(UserDataContext);

  useEffect(() => {
    window.onclose = () => 
      updateUser({ lastConnection: new Date(), userId: userData._id });
  }, []);

  return (
    <ResultsContextProvider>
      <div className="App">
        <Router />
      </div>
    </ResultsContextProvider>
  );
}

export default App;
