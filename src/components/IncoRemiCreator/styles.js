import styled from "@emotion/styled";

const StyledCreator = styled.div`
  display: flex;
  height: 10%;
  justify-content: space-evenly;
  border-bottom: 1px solid #999;

  button {
    border: none;
    padding: 15px;
    border-radius: 15px;
    color: #fff;
    margin: 15px 0;
  }

  button.income {
    background-color: #1ac31a;
  }

  button.remittance {
    background-color: #dc1616;
  }
`;

export default StyledCreator;