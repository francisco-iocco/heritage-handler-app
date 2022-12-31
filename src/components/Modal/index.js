import StyledModal from "./styles";

export default function Modal({ onClose, children }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  }

  return (
    <StyledModal>
      <div className="modal-content">
        <button className="close" onClick={handleSubmit}>x</button>
        {children}
      </div>
    </StyledModal>
  );
}
