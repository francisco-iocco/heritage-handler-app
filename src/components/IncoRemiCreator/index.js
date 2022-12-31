import Modal from "../Modal";
import StyledCreator from "./styles";
import { useState } from "react";

export default function IncoRemiCreator() {
  const [ModalInfo, setModalInfo] = useState({
    show: false,
    title: "",
  });

  const showModal = ({ target: { innerHTML } }) => {
    setModalInfo({ show: true, title: innerHTML });
  };

  return (
    <StyledCreator>
      <button className="income" onClick={showModal}>
        New income
      </button>
      <button className="remittance" onClick={showModal}>
        New remittance
      </button>
      {ModalInfo.show && (
        <Modal
          title={ModalInfo.title}
          onClose={() => setModalInfo({ show: false, title: "" })}
        />
      )}
    </StyledCreator>
  );
}
