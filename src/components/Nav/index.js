import { FaHome, FaSearch, FaRegUserCircle } from "react-icons/fa";
import Button from "./components/Button";
import StyledNav from "./styles";

export default function Nav() {
  return (
    <StyledNav>
      <Button destination="/search">
        <FaSearch />
      </Button>
      <Button destination="/home">
        <FaHome />
      </Button>
      <Button destination="/account">
        <FaRegUserCircle />
      </Button>
    </StyledNav>
  );
}