import StyledSpinner from "./styles";

export default function Spinner({ size, showText = true }) {
  return (
    <StyledSpinner size={size}>
      <div></div>
      {showText && <p>Just wait for a moment</p>}
    </StyledSpinner>
  )
}