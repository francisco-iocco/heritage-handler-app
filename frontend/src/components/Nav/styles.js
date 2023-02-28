import styled from "@emotion/styled";

const StyledNav = styled.nav`
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #999;
  bottom: 0;
  display: flex;
  height: 100px;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  z-index: 1;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div div {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 30px -5px #808080;
    font-size: 30px;
    padding: 15px 20px;
  }

  div div a {
    align-items: center;
    color: #2424d2;
    display: flex;
  }

  div div.active {
    background-color: #2424d2;
  }

  div div.active a {
    color: #fff;
  }

  div p {
    margin: 0;
    padding-top: 5px;
    position: relative;
    display: flex;
    justify-content: center;
  }

  div p::after {
    position: absolute;
    bottom: 0;
    transform: translateY(200%);
    content: "";
    display: inline-block;
    height: 1px;
    width: 1px;
    background-color: #2424d2;
    animation: 1s ease expand forwards;
  }

  @keyframes expand {
    from {
      width: 1px;
    }
    to {
      width: 100%;
    }
  }


`;

export default StyledNav;
