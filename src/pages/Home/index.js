import Information from "./components/Information";
import Nav from "components/Nav";
import Percentajes from "./components/Percentajes";
import StyledHome from "./styles";

export default function Home() {
  return (
    <StyledHome className="section">
      <Nav />
      <Information />
      <Percentajes />
      <div className="current-heritage-container">
        <h3>Current Heritage</h3>
        <p>$900000</p>
      </div>
    </StyledHome>
  );
}
