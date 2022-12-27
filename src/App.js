import Router from 'Router';
import { JWTContextProvider } from 'contexts/JWTContext';
import './App.css';

function App() {
  return (
    <JWTContextProvider>
      <div className="App">
        <Router />
      </div>
    </JWTContextProvider>
  );
}

export default App;
