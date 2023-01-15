import styled from "@emotion/styled";

const StyledCreateForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  padding: 10px;

  h2 {
    ${(props) => {
      if (props.title.includes("income")) {
        return "color: #1ac31a";
      } else if (props.title.includes("remittance")) {
        return "color: #dc1616"; 
      }
    }}
    font-size: 30px;
    letter-spacing: 2px;
    padding: 10px;
    text-align: center;
  }

  label {
    font-size: 20px;
  }

  input[type="checkbox"] {
    margin: 0 15px;
    transform: scale(2);
  }

  input[type="text"], input[type="number"] {
    margin: 15px 0 10px 0;
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
  }
`;

export default StyledCreateForm;
