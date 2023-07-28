"use client";
import { createContext, useEffect, useState } from "react";

interface Salon {
  nombre: string;
  domicilio: string;
  localidad: string;
  ubicacion: string;
  imagenes: string[];
  telefono: string;
  precio: number;
  capacidad_max: number;
  superficie: number;
  aire_acondicionado: number;
  parrilla: number;
  pantalla: number;
  personal_seguridad: number;
  baño: number;
  baño_accesibilidad: boolean;
  accesibilidad: boolean;
  estacionamiento: boolean;
  catering: boolean;
  mesas_sillas: boolean;
  luces: boolean;
  sonido: boolean;
  fotografia: boolean;
  decoracion: boolean;
  pileta: boolean;
  wifi: boolean;
  cocina: boolean;
  escenario: boolean;
  descripcion: string;
  propietario: string;
}

const SalonsContext = createContext({});

export const SalonsProvider = ({ children }) => {
  const [salon, setSalon] = useState<Salon>({
    nombre: "",
    domicilio: "",
    localidad: "",
    ubicacion: "",
    imagenes: [],
    telefono: "",
    precio: 0,
    capacidad_max: 0,
    superficie: 0,
    aire_acondicionado: 0,
    parrilla: 0,
    pantalla: 0,
    personal_seguridad: 0,
    baño: 0,
    baño_accesibilidad: false,
    accesibilidad: false,
    estacionamiento: false,
    catering: false,
    mesas_sillas: false,
    luces: false,
    sonido: false,
    fotografia: false,
    decoracion: false,
    pileta: false,
    wifi: false,
    cocina: false,
    escenario: false,
    descripcion: "",
    propietario: "id_user",
  });

  const createSalon = (obj: Salon) => {};

  return (
    <SalonsContext.Provider
      value={{
        salon,
        createSalon,
        setSalon,
      }}
    >
      {children}
    </SalonsContext.Provider>
  );
};
export default SalonsContext;
