import { useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Modal from "components/Modal";
import CreateForm from "pages/Search/components/CreateForm";

export default function Result({ description, amount, onDelete }) {
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
    <tr>
      <td>{description}</td>
      <td className="amount">${amount}</td>
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
    </tr>
  );
}
