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
  z-index: 1;

  .modal-content {
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    flex-direction: column;
    height: 60%;
    justify-content: space-around;
    position: relative;
    width: 80%;
  }

  button.close {
    background-color: #fff;
    border: none;
    color: #808080;
    font-size: 30px;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 15px;
    top: 5px;
  }
`;

export default StyledModal;
