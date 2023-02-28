import { useEffect, useContext, useState } from "react";
import UserDataContext from "contexts/UserDataContext";
import ResultsContext from "contexts/ResultsContext";
import useResultsRate from "hooks/useResultsRate";
import Spinner from "components/Spinner";
import Information from "./components/Information";
import Percentajes from "./components/Percentajes";
import StyledHome from "./styles";

export default function Home() {
  const { userData, isLoading } = useContext(UserDataContext);
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
      setResultsTime({ target: { value: "This day" } });
    })();
  }, []);

  return (
    <>
      {isLoading 
        ? <Spinner />
        : (
          <StyledHome className="section">
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
              <p>${userData.heritage.amount}</p>
            </div>
          </StyledHome>
        )
      }
    </>
  );
}
