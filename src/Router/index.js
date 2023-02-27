import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "components/Nav";
import SEO from "components/SEO";
import Home from "pages/Home";
import Login from "pages/Login";
import Search from "pages/Search";
import Account from "pages/Account";
import Error from "pages/Error";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <SEO />
              <Login />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <SEO />
              <Home />
              <Nav />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <SEO />
              <Search />
              <Nav />
            </>
          }
        />
        <Route
          path="/account"
          element={
            <>
              <SEO />
              <Account />
              <Nav />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <SEO />
              <Error />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
