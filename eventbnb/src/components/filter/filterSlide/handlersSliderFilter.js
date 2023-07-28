//------------ Filtro Estacionamiento ------------
export const handleParkingIconClick = (
  isParkingFiltered,
  setFilteredList,
  filteredList
) => {
  const filteredSalones = isParkingFiltered
    ? filteredList.filter((salon) => salon.estacionamiento)
    : filteredList;

  setFilteredList(filteredSalones);
};

//------------ Filtro Pileta ------------
export const handlePoolIconClick = (
  isPoolFiltered,
  setFilteredList,
  filteredList
) => {
  const filteredSalones = isPoolFiltered
    ? filteredList.filter((salon) => salon.pileta)
    : filteredList;

  setFilteredList(filteredSalones);
};
//------------ Filtro Disponibilidad ------------
export const handleAvailableIconClick = (
  isAvailableFiltered,
  setFilteredList,
  filteredList
) => {
  // Filtrar los salones según el estado de isAvailableFiltered
  const filteredSalones = isAvailableFiltered
    ? filteredList.filter((salon) => salon.disponibilidad)
    : filteredList;

  setFilteredList(filteredSalones);
};

//------------ Filtro Mascotas ------------
export const handlePetIconClick = (
  isPetFiltered,
  setFilteredList,
  filteredList
) => {
  const filteredSalones = isPetFiltered
    ? filteredList.filter((salon) => salon.mascotas)
    : filteredList;

  setFilteredList(filteredSalones);
};

//--------------------------------------------------
