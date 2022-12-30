import Nav from "components/Nav";
import Information from "./components/Information";
import Percentajes from "./components/Percentajes";
import "./index.css";

/* This page isn't finished yet, this is just a model so we can start imagine how it will be in the future */

export default function Home() {
  return (
    <div className="section">
      <Nav />
      <Information />
      <Percentajes />
      <div className="current-money-container"></div>
    </div>
  );
}