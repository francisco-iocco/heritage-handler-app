import styled from "@emotion/styled";

const StyledPercentajes = styled.div`
  display: grid;
  height: 50%;
  place-items: center;

  > div {
    align-items: center;
    border-radius: 15px;
    box-shadow: 0 0 30px 0 #eee;
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;
  }

  .title {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: space-evenly;
    padding: 10px;
    width: 100%;
  }

  h3 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.l};
    padding-bottom: 5px;
    text-align: center;
  }

  .title div {
    color: ${({ theme }) => theme.colors.secondary};
    position: relative;
  }
  
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    box-shadow: inset 0 0 1000px 0 #fff;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.m};
    outline: none;
    padding: 10px;
    padding-right: 30px;
  }

  .arrow {
    margin-right: 5px;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: transform .5s;
  }

  .data {
    align-items: center;
    display: flex;
    height: 50%;
    padding: 30px 0;
    width: 100%;
  }

  .data div {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    text-align: center;
    width: 50%;
  }

  .remittances-data {
    color: ${({ theme }) => theme.colors.remittance};
  }

  .incomes-data {
    border-left: 1px solid ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.income};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  ${({ theme }) => theme.bps.laptops} {
    height: 100%;
    width: 50%;

    select {
      cursor: pointer;
    }

    .current-heritage-container {
      height: 100%;
      width: 25%;
    }
  }
`;

export default StyledPercentajes;
