import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import StyledModal from "./styles";

function Modal({ onClose, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(e);
  };

  return (
    <StyledModal>
      <div className="modal">
        <div className="close-container">
          <button onClick={handleSubmit}>
            <FaTimes />
          </button>
        </div>
        <div className="content">
          {children}
        </div>
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
