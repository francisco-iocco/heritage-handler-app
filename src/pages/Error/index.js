import { Link } from "react-router-dom";
import SEO from "components/SEO";
import MoneyLoss from "assets/money_loss.png";
import StyledError from "./styles";

export default function Error() {
  return (
    <>
      <SEO />
      <StyledError>
          <div>
            <h1>404</h1>
            <img src={MoneyLoss} alt="Money loss" />
            <p>This page isn't available...</p>
            <Link to="/">Go to login</Link>
          </div>
      </StyledError>
    </>
  )
}