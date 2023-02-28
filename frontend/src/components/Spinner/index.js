import StyledSpinner from "./styles";
import Logo from "assets/logo.png";

export default function Spinner() {
  return (
    <StyledSpinner>
      <div>
        <img src={Logo}></img>
      </div>
      <p>Just wait for a moment</p>
    </StyledSpinner>
  )
}