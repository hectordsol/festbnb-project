import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ModalBody from "./ModalBody";
import { ModalProps } from "./modal.interface";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  children,
  handleCloseModal,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted
    ? createPortal(
        <ModalBody isOpen={isOpen} handleCloseModal={handleCloseModal}>
          {children}
        </ModalBody>,
        document.querySelector("#modal") as Element
      )
    : null;
};

export default Modal;
