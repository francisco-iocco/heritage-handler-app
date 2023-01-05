import styled from "@emotion/styled";

const StyledResultCreator = styled.div`
  display: flex;
  height: 10%;
  justify-content: space-evenly;
  border-bottom: 1px solid #999;
  position: sticky;
  top: 0;
  background-color: #fff;

  & > button {
    border: none;
    padding: 15px;
    border-radius: 15px;
    color: #fff;
    width: 40%;
    margin: 0 15px;
    height: 80%;
    align-self: center;
    font-size: 1.5vh;
  }

  div.filter-container {
    width: 20%;
    justify-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #999;
  }

  button.filter {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2424d2;
    height: 50%;
    width: 60%;
    border-radius: 15px;
    color: #fff;
    border: none;
    align-self: center;
  }

  button.income {
    background-color: #1ac31a;
  }

  button.remittance {
    background-color: #dc1616;
  }
`;

export default StyledResultCreator;