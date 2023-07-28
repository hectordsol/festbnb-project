import React, { createContext, useEffect, useState } from "react";
import saveInLocalStorage from "./assets/saveInLocalStorage";
import removeFromLocalStorage from "./assets/removeFromLocalStorage";
import { newPetition } from "./assets/customFetch";

export const FilterContext = createContext({
  filteredCards: [],
  setFilteredCards: () => {},
  filter: "",
  setFilter: () => {},
});
function FilterProvider({ children }) {
  const [filteredCards, setFilteredCards] = useState([]);
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [range, setRange] = useState(0);
  const [isParkingFiltered, setIsParkingFiltered] = useState(false);
  const [isPoolFiltered, setIsPoolFiltered] = useState(false);
  const [isAvailableFiltered, setIsAvailableFiltered] = useState(false);
  const [isPetFiltered, setIsPetFiltered] = useState(false);
  const [isSecurityFiltered, setIsSecurityFiltered] = useState(false);
  const [isBathroomFiltered, setIsBathroomFiltered] = useState(false);
  const [isPriceFiltered, setIsPriceFiltered] = useState(false);

  // Filtros de cards en back
  const [selected, setSelected] = useState({
    order: {
      type: "",
      order: "",
    },
    precio: "",
    pileta: "",
    estacionamiento: "",
    mascota: "",
    disponibilidad: "",
    capacidad_maxima: "",
    puntuacion: "",
    personal_seguridad: "",
    baño: "",
    baño_accesibilidad: "",
    accesibilidad: "",
    mesas_sillas: "",
    wifi: "",
    cocina: "",
    calefaccion: "",
    aire_acondicionado: "",
    parrilla: "",
    luces: "",
    sonido: "",
    decoracion: "",
    catering: "",
    alarma_humo: "",
    fotografia: "",
    pantalla: "",
    escenario: "",
    eventos: "",
  });

  return (
    <FilterContext.Provider
      value={{
        filteredCards,
        setFilteredCards,
        filter,
        setFilter,
        selected,
        setSelected,
        price,
        cards,
        setCards,
        title,
        setTitle,
        selectedType,
        setSelectedType,
        sortBy,
        setSortBy,
        name,
        setName,
        isLoading,
        setIsLoading,
        range,
        setRange,
        isParkingFiltered,
        setIsParkingFiltered,
        isPoolFiltered,
        setIsPoolFiltered,
        isAvailableFiltered,
        setIsAvailableFiltered,
        isPetFiltered,
        setIsPetFiltered,
        isSecurityFiltered,
        setIsSecurityFiltered,
        isBathroomFiltered,
        setIsBathroomFiltered,
        isPriceFiltered,
        setIsPriceFiltered,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export { FilterProvider };
