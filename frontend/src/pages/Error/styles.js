import styled from "@emotion/styled";

const StyledError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  div {
    box-shadow: 0 0 15px -5px #bbb;
    text-align: center;
    padding: 15px;
    border-radius: 10px;
  }

  h1, p {
    margin: 30px 0;
  }

  h1 {
    color: #dc1616;
  }

  p {
    color: #bbb;
  }

  a {
    display: block;
    text-decoration: none;
    background-color: #2424d2;
    color: #fff;
    padding: 10px;
    border-radius: 15px;
    margin: 10px;
  }

`

export default StyledError;