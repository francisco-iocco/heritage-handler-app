import styled from "@emotion/styled";

const StyledDiv = styled.div`
  border-bottom: 1px solid #999;
  display: flex;
  height: 15%;
  
  & div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    text-align: center;
    width: 50%;
    padding: 15px;
  }

  & div h4 {
    font-size: 18px;
  }
  
  & div select {
    margin: 10px auto;
    padding: 5px;
    outline: none;
  }
  
  & div p {
    font-size: 20px;
  }
  
  & .incomes-container {
    border-right: 1px solid #999;
    color: #1ac31a;
  }
  
  & .remittances-container {
    color: #dc1616;
  }
`;

export default StyledDiv;