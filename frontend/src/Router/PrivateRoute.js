import { ResultsContextProvider } from "contexts/ResultsContext";
import { Navigate, useLocation } from "react-router-dom";
import Nav from "components/Nav";

export default function PrivateRoute({ component: Component }) {
  const { pathname } = useLocation();

  if(!localStorage.getItem("userId")) return <Navigate to="/" />; 
  return pathname === "/account"
    ? <>
        <Component />
        <Nav />
      </>
    : <ResultsContextProvider>
        <Component />
        <Nav />
      </ResultsContextProvider>
}