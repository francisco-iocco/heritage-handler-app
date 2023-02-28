import styled from "@emotion/styled";

const StyledAccount = styled.div`
  .account-presentation {
    height: 35%;
    position: relative;
  }

  .bg-blue {
    background-color: #2424d2;
    height: 150px;
    position: absolute;
    width: 100%;
  }

  .account-info {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .account-info span {
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

  .account-info p {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 30px 10px #eee;
    color: #2424d2;
    margin: auto;
    padding: 15px;
    transform: translateY(-30%);
  }

  .account-configuration {
    padding-bottom: 10%;
  }

  .icons-bar {
    border-top: 1px solid #bbb;
    display: inline-block;
    margin: 0 0 20px 20px;
    position: relative;
  }

  .icons-bar::after {
    border-bottom: 1px solid #2424d2;
    bottom: 0;
    content: "";
    display: inline-block;
    height: 1px;
    left: ${(props) => {
      switch (props.sectionToRender) {
        case "settings":
          return "10px;";
        case "account-list":
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

  .icons-bar button {
    background-color: transparent;
    border: none;
    color: #bbb;
    display: inline-block;
    font-size: 1.2em;
    margin-bottom: 5px;
    margin: 10px;
  }

  .account-configuration .content {
    border: 1px solid #bbb;
    height: 70%;
    margin-bottom: 75px;
    padding: 15px 20px;
  }

  .content div:first-of-type h3 {
    margin-top: 0;
    padding-top: 0;
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
