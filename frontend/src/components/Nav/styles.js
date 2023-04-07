import styled from "@emotion/styled";

const StyledNav = styled.nav`
  background-color: #fff;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
  bottom: 0;
  font-size: 30px;
  height: 100px;
  position: fixed;
  width: 100%;
  z-index: 1;

  .select-window {
    display: grid;
    place-items: center;
    position: absolute;
    transition: transform 0.5s;
    transform: translateX(
      ${({ location }) => {
        switch (location) {
          case "/search":
            return "0";
          case "/home":
            return "100%";
          case "/account":
            return "200%";
        }
      }}
    );
    width: 33.33%;
    z-index: -1;
  }

  .purple-bar {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 15px;
    height: 1em;
    padding: 30px;
    width: 1em;
  }

  > div {
    align-items: center;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    width: 33.33%;
  }

  a {
    color: ${({ theme }) => theme.colors.tertiary};
    display: inline-flex;
    font-size: ${({ theme }) => theme.fontSizes.m};
    justify-content: center;
  }

  a[href="${({ location }) => location}"] {
    color: ${({ theme }) => theme.colors.quaternary};
  }

  ${({ theme }) => theme.bps.laptops} {
    height: 100vh;
    width: 150px;
    left: 0;
    border-right: 1px solid ${({ theme }) => theme.colors.tertiary};

    > div {
      height: 33.33%;
      width: 100%;
    }
    
    > div a {
      transition: color, font-size .5s;
    }

    > div a:not([href="${({ location }) => location}"]):hover {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.fontSizes.l};
    }

    .select-window {
      width: 100%;
      position: absolute;
      transition: transform 0.5s;
      transform: translateY(
        ${({ location }) => {
          switch (location) {
            case "/search":
              return "0";
            case "/home":
              return "100%";
            case "/account":
              return "200%";
          }
        }}
      );
      z-index: -1;
    }
  }
`;

export default StyledNav;
