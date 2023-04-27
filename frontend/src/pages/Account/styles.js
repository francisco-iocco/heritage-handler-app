import styled from "@emotion/styled";

const StyledAccount = styled.div`
  font-size: 18px;
  height: calc(100% - 100px);
  overflow-y: auto;

  .presentation {
    position: relative;
  }

  .presentation::before {
    background-color: ${({ theme }) => theme.colors.primary};
    content: "";
    height: 150px;
    position: absolute;
    width: 100%;
  }

  .info {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .info div {
    align-items: center;
    background-color: #fff;
    border-radius: 45%;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    font-size: 100px;
    padding: 30px;
    margin-top: 35px;
    z-index: 1;
  }

  .info p {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 30px 0 #eee;
    color: ${({ theme }) => theme.colors.primary};
    margin: -5px 0 auto;
    padding: 15px;
  }

  .menu {
    border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
    display: inline-block;
    margin: 20px;
    position: relative;
  }

  .menu::after {
    ${({ animation }) => animation && `animation: slide 1s linear`};
    bottom: 0;
    content: "";
    display: inline-block;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    left: ${(props) => {
      switch (props.sectionToRender) {
        case "settings":
          return "0";
        case "list":
          return "33.33%";
        case "link-requests":
          return "66.66%";
        default:
          break;
      }
    }};
    position: absolute;
    transition: left .5s .25s;
    width: 33.33%;
    z-index: -1;
  }

  @keyframes slide {
    0% {
      height: 100%;
    }
    25% {
      height: 1px;
    }
    75% {
      height: 1px;
    }
    100% {
      height: 100%;
    }
  }

  .menu button {
    align-items: center;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.tertiary};
    display: inline-flex;
    font-size: 1.2em;
    margin-bottom: 5px;
    margin: 10px;
  }

  .configuration > div {
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
    border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
    margin-bottom: 10px; 
    padding-top: 0;
    padding: 15px;
  }

  h2 {
    margin: 20px;
    text-align: center;
  }

  h2::before,
  h2::after {
    content: "-";
  }
  
  ${({ theme }) => theme.bps.tablets} { font-size: 22px; }
  ${({ theme }) => theme.bps.laptops} {
    font-size: 24px;
    height: 100%;
    margin-left: 150px;
    width: calc(100% - 150px);

    .menu button {
      transition: color .5s;
    }

    .menu button:hover:not([class="${({ sectionToRender }) => sectionToRender}"]) {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  ${({ theme }) => theme.bps.desktops} { font-size: 26px; }
`;

export default StyledAccount;
