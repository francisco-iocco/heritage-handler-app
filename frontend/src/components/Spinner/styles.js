import styled from "@emotion/styled";

const StyledSpinner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;

  div {
    animation: 1s linear 0s infinite load;
    border: 2px solid #bbb;
    border-bottom-color: transparent;
    border-left: none;
    border-radius: 50%;
    border-right-color: transparent;
    height: 4em;
    width: 4em;
  }

  p {
    color: #bbb !important;
    margin-top: 30px;
  }
  
  p::after {
    animation: 1s ease-out 0s infinite addDots;
    content: "";
  }

  @keyframes load {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes addDots {
    0% {
      content: "";
    }
    25% {
      content: ".";
    }
    50% {
      content: "..";
    }
    75% {
      content: "...";
    }
  }
`

export default StyledSpinner;
