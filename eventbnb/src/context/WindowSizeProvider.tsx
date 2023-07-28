"use client";
import { createContext, useEffect, useState } from "react";

// interface
export interface IWindowsSize {
  windowWidth: number;
}

// creacion contexto
export const WindowSizeContext = createContext<IWindowsSize | null>(null);

export const WindowSizeProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    // listener de tamaño de pantalla
    window.addEventListener("resize", handleResize);

    //eliminar el listener de la función
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WindowSizeContext.Provider value={{ windowWidth }}>
      {children}
    </WindowSizeContext.Provider>
  );
};
