import Nav from "components/Nav";
import IncoRemiInfo from "components/IncoRemiInfo";
import IncoRemiPercent from "components/IncoRemiPercent";
import StyledHome from "./styles";

export default function Home() {
  return (
    <StyledHome className="section">
      <Nav />
      <IncoRemiInfo />
      <IncoRemiPercent />
      <div className="current-heritage-container">
        <h3>Current Heritage</h3>
        <p>$900000</p>
      </div>
    </StyledHome>
  );
}