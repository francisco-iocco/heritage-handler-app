import StyledInformation from "./styles";

export default function Information({ remittancesAmount, incomesAmount }) {
  return (
    <StyledInformation>
      <div className="remittances-container">
        <h4>Remittances</h4>
        <p>${remittancesAmount}</p>
      </div>
      <div className="incomes-container">
        <h4>Incomes</h4>
        <p>${incomesAmount}</p>
      </div>
    </StyledInformation>
  );
}
