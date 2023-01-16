import { useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Modal from "components/Modal";
import CreateForm from "pages/Search/components/CreateForm";
import StyledResult from "./styles";
import useCreateResult from "hooks/useCreateResult";

export default function Result({
  amount,
  description,
  isPermanent = false,
  time = "",
  index = null,
  onDelete,
}) {
  const [showModal, setShowModal] = useState(false);
  const [formTitle] = useState(() =>
    amount > 0 ? "Edit income" : "Edit remittance"
  );
  const { toggleIsPermanent, changeDescription, changeAmount, setIndex, reset } =
    useCreateResult();

  const handleShowModal = () => {
    setIndex(index);
    changeDescription(description);
    changeAmount(amount);
    isPermanent && toggleIsPermanent();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    reset();
    setIndex(undefined);
    setShowModal(false);
  };

  return (
    <StyledResult amount={amount}>
      <td>
        {isPermanent && <div className="permanent">Permanent</div>}
        {description}
      </td>
      <td className="amount">
        <span>${amount}</span>
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
          <CreateForm onSubmit={handleCloseModal} title={formTitle} />
        </Modal>
      )}
    </StyledResult>
  );
}
