import styled from "@emotion/styled";

const StyledNav = styled.nav`
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #999;
  bottom: 0;
  display: flex;
  height: 75px;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  z-index: 1;

  li {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 30px -5px #808080;
    display: flex;
    font-size: 30px;
    height: 80%;
    padding: 15px 20px;
  }

  li a {
    align-items: center;
    color: #2424d2;
    display: flex;
  }

  li.active {
    background-color: #2424d2;
  }

  li.active a {
    color: #fff;
  }
`;

export default StyledNav;
