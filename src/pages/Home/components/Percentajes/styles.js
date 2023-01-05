import styled from "@emotion/styled";

const StyledPercentajes = styled.div`
  align-items: center;
  display: flex;
  height: 50%;
  justify-content: center;

  & > div {
    align-items: center;
    border-radius: 15px;
    box-shadow: 0 0 30px -5px #808080;
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;
  }

  div .title {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: space-evenly;
    padding: 30px;
    width: 100%;
  }

  div h4 {
    border-bottom: 1px solid lightblue;
    font-size: 20px;
    padding: 5px;
  }

  div .title select {
    outline: none;
    padding: 10px;
  }

  div .data {
    align-items: center;
    display: flex;
    height: 50%;
    justify-content: space-evenly;
    padding: 30px 0;
    width: 100%;
  }

  div .data div {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    text-align: center;
    width: 50%;
  }

  div .data .remittances-data {
    color: #f00;
  }

  div .data .incomes-data {
    border-left: 1px solid #999999;
    color: #1ac31a;
  }

  div .data div h5 {
    font-size: 20px;
  }

  div .data div p {
    font-size: 16px;
  }
`;

export default StyledPercentajes;
