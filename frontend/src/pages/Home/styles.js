import styled from "@emotion/styled";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  height: 100vmax;
  text-align: center;

  .current-heritage-container {
    align-items: center;
    border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
    display: flex;
    flex-direction: column;
    height: 25%;
    justify-content: space-evenly;
    padding: 10px;
  }

  .current-heritage-container h3 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.l};;
    padding: 5px;
  }

  .current-heritage-container p {
    color: ${({ amount, theme }) => amount >= 0 ? theme.colors.income : theme.colors.remittance};
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin: 20px;
  }

  ${({ theme }) => theme.bps.tablets} {
    font-size: 22px;
  }

  ${({ theme }) => theme.bps.laptops} {
    flex-direction: row;
    font-size: 24px;
    height: 100vh;
    margin-left: 150px;
    width: calc(100vw - 150px);

    .current-heritage-container {
      border: none;
      border-left: 1px solid ${({ theme }) => theme.colors.tertiary};
      height: 100%;
      width: 25%;
    }
  }

  ${({ theme }) => theme.bps.desktops} {
    font-size: 26px; 
  }
`;

export default StyledHome;
