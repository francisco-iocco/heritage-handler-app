import StyledForm from "./styles";

export default function Form({ title }) {
  return (
    <StyledForm>
      <h3>{title}</h3>
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password" />
      <button type="submit">Log in</button>
    </StyledForm>
  )
}