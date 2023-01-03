import { FaListUl } from "react-icons/fa";
import { useState, useContext } from "react";
import Modal from "components/Modal";
import StyledResultCreator from "./styles";
import CreateForm from "../CreateForm";
import SearchForm from "../SearchForm";

export default function ResultCreator() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleShowModal = ({ target: { innerText } }) => {
    if (innerText) {
      setFormTitle(innerText);
      setShowCreateModal(true);
    } else {
      setFormTitle("Filters");
      setShowSearchModal(true);
    }
  };

  const handleCloseModal = () => {
    if (showCreateModal) {
      setShowCreateModal(false);
    } else {
      setShowSearchModal(false);
    }
  };

  return (
    <StyledResultCreator>
      <div className="filter-container">
        <button className="filter" onClick={handleShowModal}>
          <FaListUl />
        </button>
      </div>
      <button className="income" onClick={handleShowModal}>
        New income
      </button>
      <button className="remittance" onClick={handleShowModal}>
        New remittance
      </button>

      {showCreateModal && (
        <Modal onClose={handleCloseModal}>
          <CreateForm title={formTitle} onClose={handleCloseModal} />
        </Modal>
      )}

      {showSearchModal && (
        <Modal onClose={handleCloseModal}>
          <SearchForm title={formTitle} onClose={handleCloseModal} />
        </Modal>
      )}
    </StyledResultCreator>
  );
}
