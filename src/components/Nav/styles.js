import styled from "@emotion/styled";

const StyledNav = styled.nav`
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #2424d2;
  bottom: 0;
  display: flex;
  height: 10%;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;

  li {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 30px -5px #808080;
    display: flex;
    font-size: 30px;
    padding: 15px 20px;
  }

  li a {
    color: #2424d2;
  }

  li.active {
    background-color: #2424d2;
  }

  li.active a {
    color: #fff;
  }
`

export default StyledNav;