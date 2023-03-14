import { useState, memo } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import useHandleResult from "hooks/useHandleResult";
import Spinner from "components/Spinner";
import Modal from "components/Modal";
import CreateForm from "pages/Search/components/CreateForm";
import StyledResult from "./styles";

function Result({
  amount,
  description,
  isPermanent,
  time,
  type,
  id,
}) {
  const [ showSpinner, setShowSpinner ] = useState(false);
  const [ showModal, setShowModal ] = useState(false);
  const { deleteResult } = useHandleResult();

  const handleDelete = () => {
    setShowSpinner(true);
    deleteResult({ type, resultId: id })
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <StyledResult type={type}>
      <td>
        {isPermanent && <div className="permanent">Permanent</div>}
        {description}
      </td>
      <td className="amount">
        <p>${type === "remittance" ? `-${amount}` : amount}</p>
        <p>{isPermanent && `(${time})`}</p>
      </td>
      <td>
        <button className="edit" onClick={handleShowModal}>
          <FaPencilAlt />
        </button>
        <button className="delete" onClick={handleDelete}>
          {showSpinner
            ? <Spinner size="15px" showText={false} /> 
            : <FaTrashAlt />
          }
        </button>
      </td>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <CreateForm
            onSubmit={handleCloseModal}
            title={type === "income" ? "Edit income" : "Edit remittance"}
            resultToUpdate={{ description, amount, isPermanent, time, id }}
          />
        </Modal>
      )}
    </StyledResult>
  );
}

export default memo(Result);
