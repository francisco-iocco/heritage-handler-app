import Nav from "components/Nav";
import IncoRemiContainer from "./components/IncoRemiContainer";
import "./index.css";

/* This page isn't finished yet, this is just a model so we can start imagine how it will be in the future */

export default function Home() {
  return (
    <div className="section">
      <Nav />
      <IncoRemiContainer />
      <div className="graph-container"></div>
      <div className="current-money-container"></div>
    </div>
  );
}