import styled from "@emotion/styled";

const StyledModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  position: fixed;

  .modal-content {
    height: 60%;
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
    right: 15px;
    top: 5px;
    border: none;
  }
`;

export default StyledModal;
