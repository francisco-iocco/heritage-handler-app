import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Modal from "components/Modal";
import StyledResultCreator from "./styles";
import ResultsForm from "../ResultsForm";

/**
 * TODO: button filter should open a different Modal to search for incomes and remittances.
 */

export default function ResultCreator() {
  const [showModal, setShowModal] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleShowModal = ({ target: { innerHTML } }) => {
    setFormTitle(innerHTML);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <StyledResultCreator>
      <div className="filter-container">
        <button className="filter">
          <FaSearch />
        </button>
      </div>
      <button className="income" onClick={handleShowModal}>
        New income
      </button>
      <button className="remittance" onClick={handleShowModal}>
        New remittance
      </button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <ResultsForm title={formTitle} onClose={handleCloseModal} />
        </Modal>
      )}
    </StyledResultCreator>
  );
}
