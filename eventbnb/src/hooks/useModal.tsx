import { useEffect, useState } from "react";

function useModal(initial: boolean = false) {
  const [isOpen, setIsOpen] = useState(initial);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    let body = document.querySelector("body");

    isOpen
      ? body?.classList.add("disable-scroll")
      : body?.classList.remove("disable-scroll");
  }, [isOpen]);

  return {
    isOpen,
    open,
    close,
  };
}

export default useModal;
