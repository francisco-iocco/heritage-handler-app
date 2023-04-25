import styled from "@emotion/styled";

const StyledLogin = styled.div`
  form {
    max-width: 350px;
    width: 80%;
    box-shadow: 0 0 20px 0 #eee;
  }

  > div:last-of-type {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vmax;
    justify-content: center;
    position: relative;
  }

  .divider {
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
    height: 1px;
    margin: 30px;
    max-width: 250px;
    position: relative;
    width: 50%;
  }

  .divider::after {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.tertiary};
    content: "or";
    display: inline;
    left: 50%;
    padding: 5px;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  > div:last-of-type > button {
    background-color: transparent;
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    padding: 10px;
    width: calc(80% - 50px);
    max-width: 300px;
    font-size: 1.2rem;
    transition: all .5s;
  }

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  ${({ theme }) => theme.bps.laptops} {
    display: flex;
    flex-direction: row-reverse;

    > div:last-of-type {
      height: 100vh;
      width: 30%;
    }

    > div:last-of-type > button {
      cursor: pointer;
    }

    > div:last-of-type > button:hover {
      background-color: ${({ theme }) => theme.colors.primary + "30"};
    }
  }
`;

export default StyledLogin;
