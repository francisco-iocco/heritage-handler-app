import styled from "@emotion/styled";

const StyledError = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;

  div {
    border-radius: 10px;
    box-shadow: 0 0 30px 0 #eee;
    padding: 15px;
    text-align: center;
  }

  h1 {
    color: ${({ theme }) => theme.colors.remittance};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin: 30px 0;
  }

  h1 span:first-of-type {
    display: inline-block;
    transform: translateY(10%);
  }

  h1 span:last-of-type {
    animation: swing 1s linear infinite alternate;
    display: inline-block;
    transform: translateY(25%);
  }

  @keyframes swing {
    from {
      transform: translateY(25%) rotate(0deg);
    }
    to {
      transform: translateY(25%) rotate(-15deg);
    }
  }

  p {
    color: #bbb;
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin: 30px 0;
  }

  a {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin: 10px;
    padding: 10px;
    text-decoration: none;
  }

  ${({ theme }) => theme.bps.tablets} { font-size: 22px; }
  ${({ theme }) => theme.bps.laptops} {
    a {
      transition: background-color .5s;
    }
    a:hover {
      background-color: ${({ theme }) => theme.colors.secondary + "30"};
    }
    font-size: 24px;
   }
  ${({ theme }) => theme.bps.desktops} { font-size: 26px; }
`

export default StyledError;