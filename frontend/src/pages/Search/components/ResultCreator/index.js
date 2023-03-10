import { FaListUl } from "react-icons/fa";
import { useState, useContext } from "react";
import SearchResultContext from "contexts/SearchResultContext";
import Modal from "components/Modal";
import CreateForm from "../CreateForm";
import SearchForm from "../SearchForm";
import StyledResultCreator from "./styles";

export default function ResultCreator() {
  const [isCreateModalActive, setIsCreateModalActive] = useState(false);
  const [isSearchModalActive, setIsSearchModalActive] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const { toggleSearchInput, isSearchInputActive } = useContext(SearchResultContext);

  const handleShowCreateModal = ({ target: { innerText } }) => {
    setFormTitle(innerText);
    setIsCreateModalActive(true);
  };
  const handleCloseCreateModal = () => setIsCreateModalActive(false);

  const handleShowSearchModal = () => {
    isSearchInputActive && toggleSearchInput();
    setFormTitle("Filters");
    setIsSearchModalActive(true);
  };
  
  const handleCloseSearchModal = () => {
    setIsSearchModalActive(false);
  };

  return (
    <StyledResultCreator>
      <div className="filter-container">
        <button className="filter" onClick={handleShowSearchModal}>
          <FaListUl />
        </button>
      </div>
      <button className="income" onClick={handleShowCreateModal}>
        New income
      </button>
      <button className="remittance" onClick={handleShowCreateModal}>
        New remittance
      </button>

      {isCreateModalActive && (
        <Modal onClose={handleCloseCreateModal}>
          <CreateForm onSubmit={handleCloseCreateModal} title={formTitle} />
        </Modal>
      )}

      {isSearchModalActive && (
        <Modal onClose={handleCloseSearchModal}>
          <SearchForm onSubmit={() => setIsSearchModalActive(false)} title={formTitle} />
        </Modal>
      )}
    </StyledResultCreator>
  );
}
