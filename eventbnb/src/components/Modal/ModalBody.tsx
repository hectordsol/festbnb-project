import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ModalProps } from "./modal.interface";

const ModalBody: React.FC<ModalProps> = ({
  isOpen,
  children,
  handleCloseModal,
}) => {
  //* detener progagacion de close
  // importante para salir del modal cuando se de click afuera de este
  const handleModalContainerClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => e.stopPropagation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{ ease: "easeInOut", times: { duration: 0.05 } }}
          exit={{
            opacity: 0,
            transition: { duration: 0.05, delay: 0.1, ease: "easeInOut" },
          }}
          className="fixed z-[200] w-screen h-screen top-0 flex flex-wrap justify-center content-center pt-20 sm:py-10 sm:px-8 backdrop-blur-sm bg-slate-400/20"
          onClick={handleCloseModal}
        >
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.05, delay: 0.05 }}
            exit={{
              opacity: 0,
              scale: 0.6,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            className="relative max-w-5xl max-h-full py-5 px-5 bg-white rounded-xl"
            style={{ minHeight: "400px" }}
            onClick={handleModalContainerClick}
          >
            <button
              className="absolute top-0 right-0 bg-rose-500 rounded-full p-2 m-2"
              onClick={handleCloseModal}
            ></button>
            <div className="h-full overflow-y-auto">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalBody;
