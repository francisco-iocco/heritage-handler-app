import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconX } from "@tabler/icons-react";
import StyledModal from "./styles";

function Modal({ onClose, children }) {
  const [animation, setAnimation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAnimation("close");
    await new Promise(res => setTimeout(res, 1500));
    onClose(e);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => document.body.style.overflow = "auto";
  }, []);

  return (
    <StyledModal onClose={animation}>
      <div className="modal">
        <div className="close-container">
          <button onClick={handleSubmit}>
            <IconX size="2rem" />
          </button>
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </StyledModal>
  );
}

export default function ModalPortal({ onClose, children }) {
  return createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById("modal")
  );
}
