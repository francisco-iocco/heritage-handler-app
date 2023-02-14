import styled from "@emotion/styled";

const StyledModal = styled.div`
  align-items: center;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 2;

  .modal {
    padding: 5px;
    background-color: #fff;
    border-radius: 15px;
    position: relative;
    width: 80%;
  }

  .close-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .close-container button {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #fff;
    border: none;
    color: #808080;
    font-size: 30px;
  }

  .content > *:first-of-type {
    padding-top: 0;
    margin-top: 0;
  }


`;

export default StyledModal;
