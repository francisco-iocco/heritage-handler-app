import { IconArrowsSort } from "@tabler/icons-react";
import StyledPercentajes from "./styles";

export default function Percentajes({
  setResultsTime,
  remittancesPercentaje,
  incomesPercentaje,
}) {
  return (
    <StyledPercentajes>
      <div>
        <div className="title">
          <h3>Results in porcentaje</h3>
          <div>
            <select onChange={setResultsTime}>
              <option>This day</option>
              <option>This week</option>
              <option>This month</option>
              <option>This year</option>
            </select>
            <IconArrowsSort className="arrow" stroke={1} size="1.2rem" />
          </div>
        </div>
        <div className="data">
          <div className="remittances-data">
            <h4>Remittances</h4>
            <p>{remittancesPercentaje}%</p>
          </div>
          <div className="incomes-data">
            <h4>Incomes</h4>
            <p>{incomesPercentaje}%</p>
          </div>
        </div>
      </div>
    </StyledPercentajes>
  );
}
