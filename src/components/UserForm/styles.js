import styled from "@emotion/styled";

const StyledForm = styled.form`
  border-radius: 15px;
  box-shadow: 0 0 30px -10px #000;
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  padding: 25px 15px;
  position: relative;
  width: 80%;
  z-index: 1;

  h3 {
    align-self: center;
    border-bottom: 1px solid lightblue;
    font-size: 1.2em;
    margin-bottom: 15px;
    padding: 5px 0;
    text-align: center;
    width: 80%;
  }

  input {
    margin: 15px 0 10px 0;
    outline: none;
    padding: 10px;
  }

  p {
    color: red;
    font-size: 10px;
    margin: 5px 1px;
  }

  button {
    background-color: #2424d2;
    border-radius: 15px;
    border: none;
    color: #fff;
    margin: 15px 0;
    padding: 10px;
  }

  a {
    color: #2424d2;
    margin: 10px;
    text-align: center;
  }
`;

export default StyledForm;
