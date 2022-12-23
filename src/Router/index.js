import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "pages/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}