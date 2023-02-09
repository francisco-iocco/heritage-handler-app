import { useContext, useEffect } from "react";
import { ResultsContextProvider } from "contexts/ResultsContext";
import updateLastConection from "services/updateLastConnection";
import UserDataContext from "contexts/UserDataContext";
import Router from "Router";
import "./App.css";

function App() {
  const { userData } = useContext(UserDataContext);

  useEffect(() => {
    window.onclose = () => 
      updateLastConection({ lastConnection: new Date(), JWT: userData.JWT });
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
