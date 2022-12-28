import styled from "@emotion/styled";

const StyledDiv = styled.div`
  border-bottom: 1px solid #2424d2;
  display: flex;
  height: 15%;
  
  & div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    text-align: center;
    width: 50%;
  }

  & div h3 {
    font-size: 18px;
  }
  
  & div select {
    display: block;
    margin: 10px auto;
    padding: 5px;
  }
  
  & div p {
    font-size: 20px;
  }
  
  & .incomes-container {
    border-right: 1px solid #2424d2;
    color: #1ac31a;
  }
  
  & .remittances-container {
    color: #dc1616;
  }
`;

export default StyledDiv;