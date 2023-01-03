import styled from "@emotion/styled";

const StyledSearchForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  padding: 10px;

  h2 {
    font-size: 30px;
    letter-spacing: 2px;
    text-align: center;
    padding: 10px;
    ${(props) => {
      if (props.title.includes("income")) {
        return "color: #1ac31a";
      } else if (props.title.includes("remittance")) {
        return "color: #dc1616"; 
      }
    }}
  }

  label {
    font-size: 20px;
  }

  input[type="checkbox"] {
    margin: 0 15px;
    transform: scale(2);
  }

  div {
    display: flex;
    align-items: center;
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

export default StyledSearchForm;
