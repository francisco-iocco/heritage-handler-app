import { createPortal } from "react-dom";
import StyledModal from "./styles";

function Modal({ onClose, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(e);
  };

  return (
    <StyledModal>
      <div className="modal-content">
        <button className="close" onClick={handleSubmit}>
          x
        </button>
        {children}
      </div>
    </StyledModal>
  );
}

export default function ModalPortal({ onClose, children }) {
  return createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById("modal")
  );
}
