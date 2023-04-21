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
  const [ showModal, setShowModal ] = useState(false);
  const [ animation, setAnimation ] = useState("");
  const { deleteResult, isLoading } = useHandleResult();

  const handleDelete = () => {
    setAnimation("delete-click");
    deleteResult({ type, resultId: id })
  };

  const handleShowModal = () => {
    setAnimation("edit-click");
    setShowModal(true);
  }
  const handleCloseModal = () => setShowModal(false);

  return (
    <StyledResult type={type} animation={animation} onAnimationEnd={() => setAnimation("")}>
      <td>
        {isPermanent && <div className="permanent">Permanent</div>}
        <p>{description}</p>
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
          {isLoading
            ? <Spinner 
                showText={false} 
                color="inherit" 
                height="100%"
                size="1em"
              /> 
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
