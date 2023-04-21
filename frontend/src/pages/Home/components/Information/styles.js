import styled from "@emotion/styled";

const StyledInformation = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  display: flex;
  height: 20%;

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    padding: 15px;
    width: 50%;
  }

  div h4 {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  div select {
    margin: 10px auto;
    outline: none;
    padding: 5px;
  }

  div p {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  .incomes-container {
    color: ${({ theme }) => theme.colors.income};
  }

  .remittances-container {
    border-right: 1px solid ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.remittance};
  }

  ${({ theme }) => theme.bps.laptops} {
    flex-direction: column;
    height: 100%;
    width: 25%;
    border-right: 1px solid ${({ theme }) => theme.colors.tertiary};

    div {
      height: 50%;
      width: 100%;
    }

    .remittances-container {
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

export default StyledInformation;
