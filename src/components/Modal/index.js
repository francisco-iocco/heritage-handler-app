import StyledModal from "./styles";
import { createPortal } from "react-dom";

function Modal({ onClose, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
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

export default function ModalPortal ({ onClose, children }) {
  return createPortal(
    <Modal onClose={onClose}>
      {children}
    </Modal>,
    document.getElementById('modal')
  );
}