import { useState } from "react";
import StyledForm from "./styles";

export default function Form({ title }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailValue = ({ target: { value } }) => setEmail(value); 
  const handlePasswordValue = ({ target: { value } }) => setPassword(value); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch(`http://localhost:4000?email=${email}&password=${password}`);
    response = await response.json();
    console.log(response);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>{title}</h3>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailValue} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordValue} />
      <button type="submit">Log in</button>
      <a>Forgot your password?</a>
    </StyledForm>
  )
}