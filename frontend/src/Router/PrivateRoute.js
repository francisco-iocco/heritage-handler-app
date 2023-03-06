import { ResultsContextProvider } from "contexts/ResultsContext";
import { Navigate } from "react-router-dom";
import Nav from "components/Nav";

export default function PrivateRoute({ component: Component }) {
  return localStorage.getItem("userId")
    ? <ResultsContextProvider>
        <Component />
        <Nav />
      </ResultsContextProvider>
    : <Navigate to="/" />
}