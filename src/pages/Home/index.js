import { useEffect, useContext, useState } from "react";
import JWTContext from "contexts/JWTContext";
import ResultsContext from "contexts/ResultsContext";
import Nav from "components/Nav";
import Information from "./components/Information";
import Percentajes from "./components/Percentajes";
import StyledHome from "./styles";
import getHeritage from "services/getHeritage";

export default function Home() {
  const [amount, setAmount] = useState(0);
  const { JWT } = useContext(JWTContext);
  const { results } = useContext(ResultsContext);

  useEffect(() => {
    (async () => { 
      const { amount } = await getHeritage({ JWT })
      setAmount(amount);
    })();
  }, [ results ]);

  return (
    <StyledHome className="section">
      <Nav />
      <Information />
      <Percentajes />
      <div className="current-heritage-container">
        <h3>Current Heritage</h3>
        <p>${amount}</p>
      </div>
    </StyledHome>
  );
}
