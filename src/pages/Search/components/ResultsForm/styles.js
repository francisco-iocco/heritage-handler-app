import styled from "@emotion/styled";

const StyledResultsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  padding: 10px;

  h1 {
    text-align: center;
    padding: 10px;
    color: ${(props) => props.title.includes("income") ? "#1ac31a" : "#dc1616"}
  }

  input {
    margin: 15px 0 10px 0;
    outline: none;
    padding: 10px;
  }

  button[type="submit"] {
    background-color: #2424d2;
    font-size: 20px;
    padding: 15px;
    border: none;
    border-radius: 10px;
    color: #fff;
  }
`;

export default StyledResultsForm;
