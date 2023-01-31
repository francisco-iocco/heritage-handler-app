import { useEffect, useContext, useState } from "react";
import Nav from "components/Nav";
import Information from "./components/Information";
import Percentajes from "./components/Percentajes";
import JWTContext from "contexts/JWTContext";
import ResultsContext from "contexts/ResultsContext";
import useResultsRate from "hooks/useResultsRate";
import getHeritage from "services/getHeritage";
import StyledHome from "./styles";

export default function Home() {
  const [amount, setAmount] = useState(0);
  const { JWT } = useContext(JWTContext);
  const { results } = useContext(ResultsContext);
  const {
    remittancesAmount,
    incomesAmount,
    remittancesPercentaje,
    incomesPercentaje,
    setResultsTime,
  } = useResultsRate(results);

  useEffect(() => {
    (async () => {
      const { amount } = await getHeritage({ JWT });
      setAmount(amount);
    })();
  }, [results]);

  return (
    <StyledHome className="section">
      <Nav />
      <Information
        remittancesAmount={remittancesAmount}
        incomesAmount={incomesAmount}
      />
      <Percentajes
        remittancesPercentaje={remittancesPercentaje}
        incomesPercentaje={incomesPercentaje}
        setResultsTime={setResultsTime}
      />
      <div className="current-heritage-container">
        <h3>Current Heritage</h3>
        <p>${amount}</p>
      </div>
    </StyledHome>
  );
}
