import Nav from "components/Nav";
import Information from "./components/Information";
import Percentajes from "./components/Percentajes";
import CurrentHeritage from "./components/CurrentHeritage";

export default function Home() {
  return (
    <div className="section">
      <Nav />
      <Information />
      <Percentajes />
      <CurrentHeritage />
    </div>
  );
}