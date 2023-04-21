import { IconAdjustments, IconAdjustmentsExclamation } from "@tabler/icons-react";
import { useState, useContext } from "react";
import SearchResultContext from "contexts/SearchResultContext";
import Modal from "components/Modal";
import CreateForm from "../CreateForm";
import SearchForm from "../SearchForm";
import StyledResultCreator from "./styles";

export default function ResultCreator() {
  const { 
    isPermanent,
    isIncome,
    isRemittance
  } = useContext(SearchResultContext);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [animation, setAnimation] = useState("");

  const handleShowCreateModal = ({ target: { innerText } }) => {
    setAnimation(innerText.includes("income") ? "click-income" : "click-remittance");
    setFormTitle(innerText);
    setShowCreateModal(true);
  };
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleShowSearchModal = () => {
    setAnimation("click-search")
    setFormTitle("Filters");
    setShowSearchModal(true);
  };
  const handleCloseSearchModal = () => setShowSearchModal(false);

  return (
    <StyledResultCreator
      animation={animation}
      onAnimationEnd={() => setAnimation("")}
      searchFilters={isIncome || isRemittance || isPermanent}
    >
      <div className="filter-container">
        <button onClick={handleShowSearchModal}>
          <span><IconAdjustmentsExclamation size="1.5rem" /></span>
          <span><IconAdjustments size="1.5rem" /></span>
        </button>
      </div>
      <div className="buttons-container">
        <button onClick={handleShowCreateModal}>
          New income
        </button>
        <button onClick={handleShowCreateModal}>
          New remittance
        </button>
      </div>

      {showCreateModal && (
        <Modal onClose={handleCloseCreateModal}>
          <CreateForm onSubmit={handleCloseCreateModal} title={formTitle} />
        </Modal>
      )}

      {showSearchModal && (
        <Modal onClose={handleCloseSearchModal}>
          <SearchForm onSubmit={handleCloseSearchModal} title={formTitle} />
        </Modal>
      )}
    </StyledResultCreator>
  );
}
