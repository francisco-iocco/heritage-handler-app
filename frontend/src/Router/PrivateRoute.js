import { Navigate } from "react-router-dom";
import Nav from "components/Nav";

export default function PrivateRoute({ component: Component }) {
  return localStorage.getItem("userId")
    ? <><Component /><Nav /></>
    : <Navigate to="/" />
}