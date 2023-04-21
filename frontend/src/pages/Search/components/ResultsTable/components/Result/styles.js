import styled from "@emotion/styled";

const StyledResult = styled.tr`
  position: relative;
  :nth-of-type(odd) {
    background-color: ${({ theme }) => theme.colors.quaternary};
  }

  td div.permanent::before {
    background-color: ${props => props.index % 2 === 0 ? "#eee" : "#fff"};
    content: "";
    display: block;
    height: 20px;
    transform: rotate(45deg) translateX(-50%) translateY(50%);
    width: 20px;
  }

  td div.permanent {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.s};
    height: 20px;
    justify-content: right;
    left: 0;
    overflow: hidden;
    padding: 10px 5px 10px 0;
    position: absolute;
    text-align: right;
    top: 0;
  }

  td {
    display: inline-block;
    padding: 20px;
    text-align: center;
    width: 33.33%;
  }

  td.amount {
    border-left: 1px solid #999;
    border-right: 1px solid #999;
    color: ${props => props.type === "income" ? "#1ac31a" : "#dc1616"};
    height: 80%;
  }

  td.amount p:last-child {
    color: ${({ theme }) => theme.colors.tertiary};
    margin-top: 5px;
  }

  td:last-child {
    display: inline-flex;
    justify-content: space-evenly;
  }

  button {
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: ${({ theme }) => theme.fontSizes.s};
    padding: 10px;
  }

  button.edit {
    ${({ animation }) => animation === "edit-click" && "animation: click .1s linear 0s;"}
    background-color: inherit;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
  }

  button.delete {
    ${({ animation }) => animation === "delete-click" && "animation: click .1s linear 0s;"}
    background-color: inherit;
    border: 2px solid ${({ theme }) => theme.colors.remittance};
    color: ${({ theme }) => theme.colors.remittance};
  }

  ${({ theme }) => theme.bps.laptops} {
    button {
      overflow: hidden;
      position: relative;
      z-index: 1;
    }
    
    button:hover {
      color: #fff;
    }

    button::before, button::after {
      content: "";
      display: inline-block;
      height: 100%;
      position: absolute;
      top: 0;
      transition: transform .5s;
      width: 50%;
      z-index: -1;
    }
    
    button.edit::before, button.edit::after {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
    
    button.delete::before, button.delete::after {
      background-color: ${({ theme }) => theme.colors.remittance};
    }

    button::before {
      left: 0;
      transform: translateX(-150%);
    }

    button::after {
      right: 0;
      transform: translateX(150%);
    }

    button:hover::before, button:hover::after {
      transform: translateX(0);
    }
  }
`;

export default StyledResult;
