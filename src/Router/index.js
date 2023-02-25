import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login";
import Search from "pages/Search";
import Account from "pages/Account";
import Error from "pages/Error";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}