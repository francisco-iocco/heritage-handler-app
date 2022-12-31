import StyledInformation from "./styles";

export default function Information() {
  return (
    <StyledInformation>
      <div className="remittances-container">
        <h4>Remittances</h4>
        <select>
          <option>This hour</option>
          <option>This day</option>
          <option>This month</option>
          <option>This year</option>
        </select>
        <p>$400000</p>
      </div>
      <div className="incomes-container">
        <h4>Incomes</h4>
        <select>
          <option>Per hour</option>
          <option>Per day</option>
          <option>Per month</option>
          <option>Per year</option>
        </select>
        <p>$500000</p>
      </div>
    </StyledInformation>
  );
}
