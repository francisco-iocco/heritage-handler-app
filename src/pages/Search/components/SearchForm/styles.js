import styled from "@emotion/styled";

const StyledSearchForm = styled.form`
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

  input[type="checkbox"],
  input[type="radio"] {
    margin: 0 15px;
    transform: scale(2);
  }

  div {
    align-items: center;
    display: flex;
  }

  div button {
    background-color: #1ac31a;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-size: 20px;
    margin: 0 10px;
    padding: 15px;
  }

  div button[type="submit"] {
    background-color: #2424d2;
  }
`;

export default StyledSearchForm;
