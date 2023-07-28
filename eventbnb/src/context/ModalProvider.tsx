"use client";
import { useModal } from "@/hooks";
import { createContext } from "react";

// interface
export interface IModalProvider {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

// creacion contexto
export const ModalContext = createContext<IModalProvider | null>(null);

export const ModalProvider = ({ children }) => {
  const { isOpen, open, close } = useModal();

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};
