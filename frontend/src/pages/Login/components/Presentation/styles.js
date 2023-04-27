import styled from "@emotion/styled";

const StyledPresentation = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  height: 100%;

  .title-container, header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .title-container {
    height: 80%;
    width: 100%;
  }

  header {
    height: 90vmin;
    margin: 20px;
    position: relative;
    width: 90vmin;
    max-width: 500px;
    max-height: 500px;
  }

  svg.strokes {
    animation: showUp 20s linear 0s infinite;
    height: 100%;
    opacity: 0;
    position: absolute;
  }

  h1 {
    color: #fff;
    text-align: center;
    font-size: 2.5rem;
  }

  h1 span {
    display: block;
  }

  header > span {
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    height: 18px;
    overflow: hidden;
    position: absolute;
    text-align: center;
    transform: translateY(-50%) translateX(-50%);
    visibility: hidden;
    width: 18px;
  }

  header > span:first-of-type {
    animation-name: moveAround;
  }

  header > span:last-of-type {
    animation-name: moveAround2;
  }
  
  header > span::before,
  header > span::after {
    background-color: #fff;
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    visibility: visible;
    width: 50%;
  }
  
  header > span::before {
    animation: moveLeft 20s linear 0s infinite;
    left: 0;
  }
  
  header > span::after {
    animation: moveRight 20s linear 0s infinite;
    right: 0;
  }

  .summary-container {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    height: 20%;
    padding: 0 10px;
  }
  
  .summary-container p {
    font-size: ${({ theme }) => theme.fontSizes.m};
    text-align: justify;
  }

  @keyframes moveAround {
    0% {
      left: 0;
      top: 0;
    }
    1.25% {
      width: 30px;
    }
    5% {
      left: 50%;
      top: 0;
      width: 30px;
    }
    10% {
      width: 100px;
    }
    39.99% {
      visibility: hidden;
    }
    40% {
      visibility: visible;
    }
    65% {
      left: 50%;
      visibility: hidden;
      width: 100px;
    }
    68.75% {
      width: 30px;
    }
    70% {
      height: 18px;
      left: 100%;
      top: 0;
      width: 18px;
    }
    71.25% {
      height: 30px;
    }
    78.75% {
      height: 30px;
    }
    80% {
      height: 18px;
      left: 100%;
      top: 100%;
      width: 18px;
    }
    81.25% {
      width: 30px;
    }
    88.75% {
      width: 30px;
    }
    90% {
      height: 18px;
      left: 0;
      top: 100%;
      width: 18px;
    }
    91.25% {
      height: 30px;
    }
    98.75% {
      height: 30px;
    }
    100% {
      height: 18px;
      left: 0;
      top: 0;
      width: 18px;
    }
  }
  
  @keyframes moveAround2 {
    0% {
      left: 100%;
      top: 100%;
    }
    1.25% {
      width: 30px;
    }
    5% {
      left: 50%;
      top: 100%;
      width: 30px;
    }
    10% {
      width: 100px;
    }
    39.99% {
      visibility: hidden;
    }
    40% {
      visibility: visible;
    }
    65% {
      left: 50%;
      visibility: hidden;
      width: 100px;
    }
    68.75% {
      width: 30px;
    }
    70% {
      height: 18px;
      left: 0;
      top: 100%;
      width: 18px;
    }
    71.25% {
      height: 30px;
    }
    78.75% {
      height: 30px;
    }
    80% {
      height: 18px;
      left: 0;
      top: 0;
      width: 18px;
    }
    81.25% {
      width: 30px;
    }
    88.75% {
      width: 30px;
    }
    90% {
      height: 18px;
      left: 100%;
      top: 0;
      width: 18px;
    }
    91.25% {
      height: 30px;
    }
    98.75% {
      height: 30px;
    }
    100% {
      height: 18px;
      left: 100%;
      top: 100%;
      width: 18px;
    }
  }

  @keyframes moveLeft {
    10% {
      opacity: 1;
    }
    15% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    35% {
      opacity: 0;
    }
    40% {
      opacity: 1;
      transform: translateX(0);
    }
    45% {
      transform: translateX(-150%);
    }
    60% {
      transform: translateX(-150%);
    }
    65% {
      transform: translateX(0);
    }
  }

  @keyframes moveRight {
    10% {
      opacity: 1;
    }
    15% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    35% {
      opacity: 0;
    }
    40% {
      opacity: 1;
      transform: translateX(0);
    }
    45% {
      transform: translateX(150%);
    }
    60% {
      transform: translateX(150%);
    }
    65% {
      transform: translateX(0);
    }
  }

  @keyframes showUp {
    40% {
      opacity: 0;
    }
    45% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    65% {
      opacity: 0;
    }
  }

  @media (max-height: 480px) and (orientation: landscape) {
    height: 100vw;
  }

  ${({ theme }) => theme.bps.laptops} {
    height: 100%;
    width: 70%;

    .title-container {
      height: 100%;
    }

    .summary-container {
      display: none;
    }
  }
`;

export default StyledPresentation;
