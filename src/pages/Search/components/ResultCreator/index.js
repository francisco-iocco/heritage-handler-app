import { FaListUl } from "react-icons/fa";
import { useState, useContext } from "react";
import SearchContext from "contexts/SearchContext";
import Modal from "components/Modal";
import StyledResultCreator from "./styles";
import CreateForm from "../CreateForm";
import SearchForm from "../SearchForm";

export default function ResultCreator() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const {
    toggleSearchInput, 
    toggleIsPermanent,
    toggleIsIncome,
    toggleIsRemittance,
    showSearchInput,
    isPermanent,
    isIncome,
    isRemittance,
  } = useContext(SearchContext);
  const [formTitle, setFormTitle] = useState("");

  const handleShowModal = ({ target: { innerText } }) => {
    if(showSearchInput) {
      toggleSearchInput();
    }
    if (innerText) {
      setFormTitle(innerText);
      setShowCreateModal(true);
    } else {
      setFormTitle("Filters");
      setShowSearchModal(true);
    }
  };

  const handleSubmitForm = (e, callback) => {
    e.preventDefault();
    callback && callback();
    if (showCreateModal) {
      setShowCreateModal(false);
    } else {
      setShowSearchModal(false);
    }
  };

  const handleCloseModal = () => {
    if (showCreateModal) {
      setShowCreateModal(false);
    } else {
      setShowSearchModal(false);
      isPermanent && toggleIsPermanent();
      isIncome && toggleIsIncome();
      isRemittance && toggleIsRemittance();
    }
  }

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
          <CreateForm title={formTitle} onSubmit={handleSubmitForm} />
        </Modal>
      )}

      {showSearchModal && (
        <Modal onClose={handleCloseModal}>
          <SearchForm title={formTitle} onSubmit={handleSubmitForm} />
        </Modal>
      )}
    </StyledResultCreator>
  );
}
