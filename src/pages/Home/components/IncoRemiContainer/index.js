import StyledDiv from "./styles";

export default function IncoRemiContainer() {
  return (
    <StyledDiv>
      <div className="incomes-container">
        <h3>
          Incomes per
          <select>
            <option>hour</option>
          </select>
        </h3>
        <p>$500000</p>
      </div>
      <div className="remittances-container">
        <h3>
          Remittances this
          <select>
            <option>hour</option>
          </select>
        </h3>
        <p>$400000</p>
      </div>
    </StyledDiv>
  );
}
