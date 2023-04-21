import styled from "@emotion/styled";

const StyledModal = styled.div`
  ${({ close }) => !close
    ? "animation: getDarker 1s ease 0s forwards"
    : "animation: getLigther 1s ease .5s reverse backwards"
  };
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  height: 3px;
  justify-content: center;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0%;
  z-index: 999;
  
  .modal {
    ${({ close }) => !close
      ? "animation: showUp .5s ease 1s forwards"
      : "animation: hide .5s ease 0s reverse"
    };
    background-color: #fff;
    border-radius: 15px;
    max-width: 350px;
    padding: 5px;
    position: relative;
    transform: scale(0);
    width: 80%;
  }

  .close-container {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }

  .close-container button {
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    background-color: #fff;
    border: none;
    color: #808080;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    padding: 5px;
  }

  .content > *:first-of-type {
    margin-top: 0;
    padding-top: 0;
  }
  
  @keyframes ${({ close }) => !close ? "getDarker" : "getLigther"} {
    0% {
      height: 3px;
      width: 0%;
    }
    25% {
      height: 3px;
      width: 100%;
    }
    75% {
      height: 3px;
      width: 100%;
    }
    99.99% {
      overflow: hidden;
    }
    100% {
      height: 100vh;
      overflow: auto;
      width: 100%;
    }
  }

  @keyframes ${({ close }) => !close ? "showUp" : "hide"} {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @media (max-height: 480px) and (orientation: landscape) {
    .modal {
      align-self: flex-start;
      justify-self: flex-start;
    }
  }
`;

export default StyledModal;
