import styled from "@emotion/styled";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  width: 80%;
  z-index: 1; 

  & h3 {
    align-self: center;
    border-bottom: 1px solid lightblue;
    font-size: 1.2em;
    margin-bottom: 15px;
    padding: 5px 0;
    text-align: center;
    width: 80%;
  }

  & input {
    margin: 15px 0 10px 0;
    outline: none;
    padding: 10px;
  }

  & button {
    background-color: #2424d2;
    border-radius: 15px;
    border: none;
    color: #fff;
    margin: 15px 0;
    padding: 10px;
  }
`

export default StyledForm;