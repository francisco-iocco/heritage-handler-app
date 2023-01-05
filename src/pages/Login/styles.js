import styled from "@emotion/styled";

const StyledDiv = styled.div`
  .section-1::before {
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

  .section-1 {
    align-items: center;
    background-color: #2424d2;
    display: flex;
    justify-content: center;
  }

  .section-1 header {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 60%;
    justify-content: space-evenly;
    width: 90%;
  }

  .section-1 header > * {
    background-color: #fff;
    border-radius: 15px;
    padding: 10px;
  }

  .section-2::before {
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

  .section-2 {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .divider {
    border-bottom: 1px solid #808080;
    height: 1px;
    margin-bottom: 15px;
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

  .section-2 .registerBtn {
    background-color: #1ac31a;
    border-radius: 15px;
    border: none;
    color: #fff;
    margin: 15px 0;
    padding: 10px;
    width: 75%;
  }
`;

export default StyledDiv;
