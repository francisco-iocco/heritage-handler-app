import { useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Modal from "components/Modal";
import CreateForm from "pages/Search/components/CreateForm";
import StyledResult from "./styles";

export default function Result({ amount, description, onDelete, isPermanent = false, time = "", index = null }) {
  const [showModal, setShowModal] = useState(false);
  const [ formTitle ] = useState(() =>
    amount > 0 ? "Edit income" : "Edit remittance"
  );

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <StyledResult index={index}>
      <td>
        {isPermanent && <div className="permanent">Permanent</div>}
        {description}
      </td>
      <td className="amount">
        ${amount}
        <p>{time && `(${time})`}</p>
      </td>
      <td>
        <button className="edit" onClick={handleShowModal}>
          <FaPencilAlt />
        </button>
        <button className="delete" onClick={onDelete}>
          <FaTrashAlt />
        </button>
      </td>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <CreateForm
            defaultValues={{ description, amount }}
            onClose={handleCloseModal}
            title={formTitle}
          />
        </Modal>
      )}
    </StyledResult>
  );
}
