import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import ResultsForm from "../../../ResultsForm";
import Modal from "components/Modal";
import { useState } from "react";

export default function Result({ description, amount }) {
  const [showModal, setShowModal] = useState(false);
  const [formTitle] = useState(() =>
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
        <button className="delete">
          <FaTrashAlt />
        </button>
      </td>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <ResultsForm onClose={handleCloseModal} title={formTitle} defaultValues={{ description, amount }} />
        </Modal>
      )}
    </tr>
  );
}
