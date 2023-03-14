import styled from "@emotion/styled";

const StyledAccount = styled.div`
  .presentation {
    height: 35%;
    position: relative;
  }

  .bg-blue {
    background-color: #2424d2;
    height: 150px;
    position: absolute;
    width: 100%;
  }

  .info {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .info span {
    align-items: center;
    background-color: #fff;
    border-radius: 45%;
    color: #2424d2;
    display: flex;
    font-size: 100px;
    padding: 30px;
    position: relative;
    z-index: 1;
  }

  .info p {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 30px 10px #eee;
    color: #2424d2;
    margin: auto;
    padding: 15px;
    transform: translateY(-30%);
  }

  .configuration {
    padding-bottom: 100px;
  }

  .menu {
    border-top: 1px solid #bbb;
    display: inline-block;
    margin: 0 0 20px 20px;
    position: relative;
  }

  .menu::after {
    border-bottom: 1px solid #2424d2;
    bottom: 0;
    content: "";
    display: inline-block;
    height: 1px;
    left: ${(props) => {
      switch (props.sectionToRender) {
        case "settings":
          return "10px;";
        case "list":
          return "calc(33.33% + 10px);";
        case "link-requests":
          return "calc(66.66% + 10px);;";
        default:
          break;
      }
    }}
    position: absolute;
    transition: all 0.5s;
    width: 19.19px;
  }

  .menu button {
    background-color: transparent;
    border: none;
    color: #bbb;
    display: inline-block;
    font-size: 1.2em;
    margin-bottom: 5px;
    margin: 10px;
  }

  .configuration > div {
    border: 1px solid #bbb;
    padding: 0 15px;
    margin-bottom: 10px; 
  }

  h2 {
    margin: 20px;
    text-align: center;
  }

  h2::before,
  h2::after {
    content: "-";
  }
`;

export default StyledAccount;
