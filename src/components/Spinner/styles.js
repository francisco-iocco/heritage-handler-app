import styled from "@emotion/styled";

const StyledSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  div {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  div::after {
    content: "";
    position: absolute;
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    outline: 1px solid #bbb;
    animation: 1s ease-out 0s infinite load;
  }

  img {
    animation: 1s ease-out 0s infinite alternate getSmall;
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
      outline-offset: 0;
      outline-color: #bbb;
    }
    to {
      outline-offset: 25px;
      outline-color: transparent;
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
    30% {
      content: ".";
    }
    50% {
      content: "..";
    }
    70% {
      content: "...";
    }
  }  
`

export default StyledSpinner;