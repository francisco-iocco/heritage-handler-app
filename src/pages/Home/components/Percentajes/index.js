import { useEffect } from "react";
import StyledPercentajes from "./styles";

export default function Percentajes({
  setResultsTime,
  remittancesPercentaje,
  incomesPercentaje,
}) {
  useEffect(() => {
    setResultsTime({ target: { value: "This day " } });
  }, []);
  return (
    <StyledPercentajes>
      <div>
        <div className="title">
          <h4>Results in porcentaje</h4>
          <select onChange={setResultsTime}>
            <option>This day</option>
            <option>This week</option>
            <option>This month</option>
            <option>This year</option>
          </select>
        </div>
        <div className="data">
          <div className="remittances-data">
            <h5>Remittances</h5>
            <p>{remittancesPercentaje}%</p>
          </div>
          <div className="incomes-data">
            <h5>Incomes</h5>
            <p>{incomesPercentaje}%</p>
          </div>
        </div>
      </div>
    </StyledPercentajes>
  );
}
