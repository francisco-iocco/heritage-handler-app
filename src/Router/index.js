import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login";
import Search from "pages/Search";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}