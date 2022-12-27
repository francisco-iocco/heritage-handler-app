import { FaHome, FaSearch, FaRegUserCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import StyledNav from "./styles";

export default function Nav() {
  const { pathname } = useLocation();
  
  return (
    <StyledNav>
      <li className={pathname === "/search" ? "active" : undefined}>
        <FaSearch />
      </li>
      <li className={pathname === "/home" ? "active" : undefined}>
        <FaHome />
      </li>
      <li className={pathname === "/account" ? "active" : undefined}>
        <FaRegUserCircle />
      </li>
    </StyledNav>
  );
}