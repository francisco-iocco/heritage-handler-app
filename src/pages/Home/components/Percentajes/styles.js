import styled from "@emotion/styled";

const StyledPercentajes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;

  & > div {
    width: 90%;
    height: 90%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 30px -5px #808080;
  }

  div .title {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 50%;
    width: 100%;
  }

  div h4 {
    font-size: 20px;
    border-bottom: 1px solid lightblue;
    padding: 5px;
  }

  div .title select {
    padding: 10px;
    outline: none;
  }

  div .data {
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px 0;
  }

  div .data div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 50%;
    text-align: center;
  }

  div .data .remittances-data {
    color: #f00;
  }

  div .data .incomes-data {
    color: #1ac31a;
    border-left: 1px solid #999999;
  }

  div .data div h5 {
    font-size: 20px;
  }

  div .data div p {
    font-size: 16px;
  }
`;

export default StyledPercentajes;
