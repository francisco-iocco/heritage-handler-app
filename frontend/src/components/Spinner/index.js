import StyledSpinner from "./styles";

export default function Spinner({ showText = true }) {
  return (
    <StyledSpinner>
      <div></div>
      {showText && <p>Just wait for a moment</p>}
    </StyledSpinner>
  )
}