import { useContext, useEffect } from "react";
import { ResultsContextProvider } from "contexts/ResultsContext";
import updateLastConection from "services/updateLastConnection";
import JWTContext from "contexts/JWTContext";
import Router from "Router";
import "./App.css";

function App() {
  const { JWT } = useContext(JWTContext);

  useEffect(() => {
    window.onbeforeunload = () => 
      updateLastConection({ lastConnection: new Date(), JWT });
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
