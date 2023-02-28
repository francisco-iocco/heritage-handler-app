import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import SEO from "components/SEO";
import Home from "pages/Home";
import Login from "pages/Login";
import Search from "pages/Search";
import Account from "pages/Account";
import Error from "pages/Error";

export default function Router() {
  return (
    <BrowserRouter>
      <SEO />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute component={Home} />} />
        <Route path="/search" element={<PrivateRoute component={Search} />} />
        <Route path="/account" element={<PrivateRoute component={Account} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
