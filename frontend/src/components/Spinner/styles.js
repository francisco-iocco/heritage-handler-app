import styled from "@emotion/styled";

const StyledSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  div {
    height: 75px;
    width: 75px;
    border-radius: 50%;
    border: 2px solid #bbb;
    border-top-color: transparent;
    border-bottom-color: transparent;
    animation: 1s linear 0s infinite load;
  }

  p {
    color: #bbb;
    margin-top: 30px;
  }
  
  p::after {
    content: "";
    animation: 1s ease-out 0s infinite addDots;
  }

  @keyframes load {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes getSmall {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.9);
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