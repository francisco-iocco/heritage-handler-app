import styled from "@emotion/styled";

const StyledCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 25px;

  h2 {
    ${(props) => {
      if (props.title.includes("income")) {
        return "color: #1ac31a;";
      } else if (props.title.includes("remittance")) {
        return "color: #dc1616;"; 
      }
    }}
    font-size: 30px;
    letter-spacing: 2px;
    padding: 10px;
    text-align: center;
  }

  p {
    color: red;
    font-size: 15px;
    margin-bottom: 10px;
  }

  input {
    margin: 15px 0;
  }

  label {
    font-size: 20px;
    margin-right: 15px;
  }

  input[type="checkbox"] {
    transform: scale(2);
  }

  input[type="text"], input[type="number"] {
    border-radius: 10px;
    border: 1px solid #aaa;
    outline: none;
    padding: 10px;
  }

  div {
    align-items: center;
    display: flex;
  }

  select {
    outline: none;
    padding: 10px;
  }

  button[type="submit"] {
    background-color: #2424d2;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-size: 20px;
    padding: 15px;
    margin: 15px 0;
  }
`;

export default StyledCreateForm;
