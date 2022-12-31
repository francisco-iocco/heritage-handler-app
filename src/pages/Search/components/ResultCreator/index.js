import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Modal from "components/Modal";
import StyledResultCreator from "./styles";

export default function ResultCreator() {
  const [showModal, setShowModal] = useState(false);
  const [formTitle, setformTitle] = useState("");

  const handleShowModal = ({ target: { innerHTML } }) => {
    setformTitle(innerHTML);
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  /**
   * TODO: button filter should open a different Modal to search for incomes and remittances.
   */

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
          <form>
            <h1>{formTitle}</h1>
            <input type="text" placeholder="Title" />
            <input type="number" placeholder="Amount" />
            <button type="submit" onClick={handleCloseModal}>
              Create
            </button>
          </form>
        </Modal>
      )}
    </StyledResultCreator>
  );
}
