import styled from "@emotion/styled";

const StyledModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);

  .modal-content {
    height: 50%;
    width: 80%;
    border-radius: 15px;
    background-color: #fff;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }

  button.close {
    position: absolute;
    background-color: #fff;
    color: #808080;
    font-size: 30px;
    padding: 0;
    margin: 0;
    right: 10px;
    top: 5px;
  }

  .modal-content form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    padding: 10px;
  }

  .modal-content form input {
    margin: 15px 0 10px 0;
    outline: none;
    padding: 10px;
  }

  .modal-content form button[type="submit"] {
    background-color: #2424d2;
    font-size: 20px;
  }
`;

export default StyledModal;
