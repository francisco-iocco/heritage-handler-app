import styled from "@emotion/styled";

const StyledDiv = styled.div`
  .section-1::before {
    background-color: #fff;
    content: "";
    display: block;
    height: 7vh;
    position: absolute;
    top: 0;
    transform: rotate(145deg);
    width: 100%;
    border-radius: 0 50px 50px 0;
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
    content: "";
    display: block;
    height: 7vh;
    position: absolute;
    top: 0;
    transform: rotate(-35deg);
    width: 100%;
    border-radius: 0 50px 50px 0;
  }
  
  .section-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .divider {
    height: 1px;
    width: 65%;
    border-bottom: 1px solid #808080;
    margin-bottom: 15px;
    position: relative;
  }
  
  .divider::after {
    content: "or";
    display: inline;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: #fff;
    color: #808080;
    padding: 5px;
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
`

export default StyledDiv;