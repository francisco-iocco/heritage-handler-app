import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid #2424d2;

  & li {
    display: flex;
    background-color: #fff;
    color: #2424d2;
    font-size: 30px;
    padding: 15px 20px;
    border-radius: 15px;
    box-shadow: 0 0 30px -5px #808080;
  }

  & li.active {
    background-color: #2424d2;
    color: #fff;
  }
`

export default StyledNav;