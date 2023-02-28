import styled from "@emotion/styled";

const StyledInformation = styled.div`
  border-bottom: 1px solid #999;
  display: flex;
  height: 15%;

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    padding: 15px;
    text-align: center;
    width: 50%;
  }

  div h4 {
    font-size: 18px;
  }

  div select {
    margin: 10px auto;
    outline: none;
    padding: 5px;
  }

  div p {
    font-size: 20px;
  }

  .incomes-container {
    color: #1ac31a;
  }

  .remittances-container {
    border-right: 1px solid #999;
    color: #dc1616;
  }
`;

export default StyledInformation;
