import StyledSpinner from "./styles";

export default function Spinner({ showText = true, color, size, height }) {
  return (
    <StyledSpinner color={color} size={size} height={height}>
      <div></div>
      {showText && <p>Just wait for a moment</p>}
    </StyledSpinner>
  )
}