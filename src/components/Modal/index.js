import StyledModal from "./styles";

export default function Modal({ onClose, title }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  }

  return (
    <StyledModal>
      <div className="modal-content">
        <button className="close" onClick={onClose}>x</button>
        <form>
          <h1>{title}</h1>
          <input type="text" placeholder="Title" />
          <input type="number" placeholder="Amount" />
          <button type="submit" onClick={handleSubmit}>Ok</button>
        </form>
      </div>
    </StyledModal>
  );
}
