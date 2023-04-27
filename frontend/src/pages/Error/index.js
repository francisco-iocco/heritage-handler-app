import { Link } from "react-router-dom";
import MoneyLoss from "assets/money_loss.png";
import StyledError from "./styles";

export default function Error() {
  return (
    <StyledError>
      <div>
        <h1><span>4</span>0<span>4</span></h1>
        <img src={MoneyLoss} alt="Money loss" />
        <p>This page isn't available...</p>
        <Link to="/">Go to {localStorage.getItem("userId") ? "home" : "login"}</Link>
      </div>
    </StyledError>
  )
}