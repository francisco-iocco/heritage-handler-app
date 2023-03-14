import styled from "@emotion/styled";

const StyledLogin = styled.div`
  & > div:first-of-type::before {
    background-color: #fff;
    border-radius: 0 50px 50px 0;
    content: "";
    display: block;
    height: 7vh;
    position: absolute;
    top: 0;
    transform: rotate(145deg);
    width: 100%;
  }

  & > div:first-of-type {
    align-items: center;
    background-color: #2424d2;
    display: flex;
    justify-content: center;
  }

  & > div:first-of-type header {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 60%;
    justify-content: space-evenly;
    width: 90%;
  }

  & > div:first-of-type header > * {
    background-color: #fff;
    border-radius: 15px;
    padding: 10px;
  }

  & > div:last-of-type::before {
    background-color: #fff;
    border-radius: 0 50px 50px 0;
    content: "";
    display: block;
    height: 7vh;
    position: absolute;
    top: 0;
    transform: rotate(-35deg);
    width: 100%;
  }

  & > div:last-of-type {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .divider {
    border-bottom: 1px solid #808080;
    height: 1px;
    margin: 30px;
    position: relative;
    width: 65%;
  }

  .divider::after {
    background-color: #fff;
    color: #808080;
    content: "or";
    display: inline;
    left: 50%;
    padding: 5px;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  div:last-of-type .registerBtn {
    background-color: #1ac31a;
    border-radius: 15px;
    border: none;
    color: #fff;
    padding: 10px;
    width: 55%;
  }
`;

export default StyledLogin;
