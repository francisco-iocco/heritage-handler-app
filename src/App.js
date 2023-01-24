import Router from 'Router';
import { JWTContextProvider } from 'contexts/JWTContext';
import { ResultsContextProvider } from 'contexts/ResultsContext';
import './App.css';

function App() {
  return (
    <JWTContextProvider>
      <ResultsContextProvider>
        <div className="App">
          <Router />
        </div>
      </ResultsContextProvider>
    </JWTContextProvider>
  );
}

export default App;
