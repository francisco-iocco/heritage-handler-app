import styled from "@emotion/styled";

const StyledUserForm = styled.form`
  border-radius: 10px;
  ${props => props.title === ("Log into your account") && "box-shadow: 0 0 30px -10px #aaa;"}
  display: flex;
  flex-direction: column;
  padding: 25px;

  h3 {
    display: inline-block;
    border-bottom: 1px solid #2424d2;
    text-align: center;
    font-size: 1.2em;
    margin: 15px auto;
    padding-bottom: 10px;
  }

  div.input-container {
    margin: 15px 0;
    height: 40px;
  }

  p {
    color: red;
    font-size: 15px;
    margin-bottom: 10px;
  }

  label {
    float: left;
    font-size: 20px;
    color: #2424d2;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 15%;
    border-radius: 10px 0 0 10px;
    box-shadow: 0 0 20px 0 #eee;
  }
  
  input {
    float: right;
    padding: 10px;
    height: 100%;
    width: 85%;
    border-radius: 0 10px 10px 0;
    border: 1px solid #aaa;
    outline: none;
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

  p.note span {
    font-size: 10px;
  }

  p.note {
    font-size: 15px;
    color: #B0E0E6;
  }
`;

export default StyledUserForm;
