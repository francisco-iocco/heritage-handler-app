import styled from "@emotion/styled";

const StyledResultCreator = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #999;
  display: flex;
  height: 75px;
  justify-content: space-evenly;
  position: sticky;
  top: 0;
  z-index: 1;

  & > button {
    align-self: center;
    border-radius: 15px;
    border: none;
    color: #fff;
    font-size: 1.5vh;
    height: 80%;
    margin: 0 15px;
    padding: 15px;
    width: 40%;
  }

  div.filter-container {
    align-items: center;
    border-right: 1px solid #999;
    display: flex;
    justify-content: center;
    justify-self: flex-start;
    width: 20%;
  }

  button.filter {
    align-items: center;
    align-self: center;
    background-color: #2424d2;
    border-radius: 15px;
    border: none;
    color: #fff;
    display: flex;
    height: 50%;
    justify-content: center;
    width: 60%;
  }

  button.income {
    background-color: #1ac31a;
  }

  button.remittance {
    background-color: #dc1616;
  }
`;

export default StyledResultCreator;