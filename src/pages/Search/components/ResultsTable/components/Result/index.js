import { useState, useContext } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import CreateResultContext from "contexts/CreateResultContext";
import ResultsContext from "contexts/ResultsContext";
import useDeleteResult from "hooks/useDeleteResult";
import Modal from "components/Modal";
import CreateForm from "pages/Search/components/CreateForm";
import StyledResult from "./styles";

export default function Result({
  amount,
  description,
  isPermanent = false,
  time,
  id,
}) {
  const [showModal, setShowModal] = useState(false);
  const { 
    changeDescription,
    changeAmount,
    toggleIsPermanent,
    changeTime,
    changeId,
    reset 
  } = useContext(CreateResultContext);
  const { deleteResult } = useDeleteResult();
  
  const handleDelete = async () => {
    await deleteResult({ type: amount > 0 ? "income" : "remittance", id });
  };

  const handleShowModal = () => {
    changeDescription(description);
    changeAmount(amount);
    isPermanent && toggleIsPermanent();
    changeTime(time);
    changeId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    reset();
    setShowModal(false);
  };

  return (
    <StyledResult amount={amount}>
      <td>
        {isPermanent && <div className="permanent">Permanent</div>}
        {description}
      </td>
      <td className="amount">
        <p>${amount}</p>
        <p>{isPermanent && `(${time})`}</p>
      </td>
      <td>
        <button className="edit" onClick={handleShowModal}>
          <FaPencilAlt />
        </button>
        <button className="delete" onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </td>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <CreateForm onSubmit={handleCloseModal} title={amount > 0 ? "Edit income" : "Edit remittance"} />
        </Modal>
      )}
    </StyledResult>
  );
}
