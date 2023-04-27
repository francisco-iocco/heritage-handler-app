import { useLocation, Link } from "react-router-dom";
import { IconSearch, IconHome, IconUser } from "@tabler/icons-react";
import StyledNav from "./styles";

export default function Nav() {
  const { pathname } = useLocation()
  return (
    <StyledNav location={pathname}>
      <div className="select-window">
        <div className="purple-bar"></div>
      </div>
      <div>
        <Link to="/search"><IconSearch size="1em" /></Link>  
      </div>
      <div>
        <Link to="/home"><IconHome size="1em" /></Link>
      </div>
      <div>
        <Link to="/account"><IconUser size="1em" /></Link>
      </div>
    </StyledNav>
  );
}
