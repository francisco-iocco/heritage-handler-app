import StyledPercentajes from "./styles";

export default function Percentajes() {
  return (
    <StyledPercentajes>
      <div>
        <div className="title">
          <h4>Results in porcentaje</h4>
          <select>
            <option>This day</option>
            <option>This week</option>
            <option>This month</option>
            <option>This year</option>
          </select>
        </div>
        <div className="data">
          <div className="remittances-data">
            <h5>Remittances</h5>
            <p>30%</p>
          </div>
          <div className="incomes-data">
            <h5>Incomes</h5>
            <p>70%</p>
          </div>
        </div>
      </div>
    </StyledPercentajes>
  );
}
