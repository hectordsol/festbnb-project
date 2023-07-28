"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import style from "../Filter.module.css";

import { handleModalActionsFilter } from "./handlersModalFilters";

export default function FilterModal({ list, setList }) {
  const [showModal, setShowModal] = useState(false);
  const [isAvailableFiltered, setIsAvailableFiltered] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [numSalonesEncontrados, setNumSalonesEncontrados] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleCheckboxChange = (option) => {
    if (selectedOptions?.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const router = useRouter();
  const url = process.env.MICROSERVICIOS;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handlePriceChange = (event, setPrice) => {
    const sanitizedValue = parseFloat(
      event.target.value.replace(/[^0-9.]/g, "")
    );
    setPrice(sanitizedValue);
  };

  const handleModalActions = () => {
    setIsAvailableFiltered(!isAvailableFiltered);
    handleModalActionsFilter(
      isAvailableFiltered,
      setList,
      list,
      selectedOptions,
      setNumSalonesEncontrados,
      handlePriceChange,
      maxPrice
    );
  };

  const handleClearAll = () => {
    setIsAvailableFiltered(false);
    setSelectedOptions([]);
    setList(list);
    setNumSalonesEncontrados(0);
  };

  const serviceOptions = [
    "accesibilidad",
    "estacionamiento",
    "wifi",
    "calefaccion",
    "aire_acondicionado",
    "parrilla",
    "pantalla",
    "catering",
    "bar",
    "mesas_sillas",
    "escenario",
    "luces",
    "sonido",
    "fotografia",
    "decoracion",
    "baño",
    "cocina",
    "area_infantil",
    "personal_seguridad",
  ];

  return (
    <div className={`flex flex-col items-center ${style.filterButton}`}>
      {showModal && (
        <div className={style.modalBackdrop} onClick={toggleModal} />
      )}
      <div className={` ${style.clearAndButton}`}>
        <button
          style={{
            marginTop: "40px",
            marginRight: "140px",
            width: "100px",
            fontSize: "20px",
          }}
          className={`text-sm  ${style.filterButton1} `}
          onClick={toggleModal}
        >
          Filtros
        </button>
      </div>
      <div
        className={` absolute z-50 flex flex-col items-center right-full ${style.showModal}`}
      >
        {showModal && (
          <div className={`top-5 ${style.filterModal}`}>
            <div className={`${style.modalContent}`}>
              <div
                className={`flex flex-grow my-4 bg-white ${style.filterTitleTop}`}
              >
                <button
                  className={` ${style.closeButton}`}
                  onClick={toggleModal}
                >
                  X
                </button>
                <h2 className={`${style.filterTitle}`}>Filtros</h2>
              </div>
              <div
                onClick={handleModalActions}
                className={`flex flex-grow my-2 ${style.filterTitleService}`}
              >
                <h3>Rango de Precio</h3>
              </div>
              <div
                className={`flex items-center my-4 ${style.priceRangeInput}`}
              >
                <label
                  htmlFor="maxPrice"
                  className={` ${style.priceRangeInput1}`}
                >
                  Máximo:
                </label>

                <input
                  type="number"
                  id="maxPrice"
                  value={maxPrice}
                  placeholder="$0"
                  className={`border border-gray-300 rounded-md w-30 ml-2 mb-10`}
                  onChange={(e) => handlePriceChange(e, setMaxPrice, "max")} // Add "max" as the third argument
                />
              </div>
              <div
                className={`flex flex-grow my-2 ${style.filterTitleService}`}
              >
                <h3>Servicios</h3>
              </div>
              <div className={`flex items-center mt-4 ${style.serviceOptions}`}>
                {/* Divide the checkboxes into three columns */}
                {Array.from({ length: 3 }, (_, index) => (
                  <div key={index} className="flex flex-col mr-8">
                    {serviceOptions
                      .slice(index * 6, index * 6 + 6)
                      .map((option) => (
                        <label
                          key={option}
                          className={`flex items-center space-x-2 ${style.serviceOptions2}`}
                          onClick={() => handleCheckboxChange(option)}
                        >
                          <input
                            type="checkbox"
                            checked={selectedOptions?.includes(option)}
                            onChange={() => {}}
                            className={`h-6 w-6 rounded border-gray-300 ${
                              style.optionsCheckbox
                            } ${
                              selectedOptions?.includes(option)
                                ? style.checkedCheckbox
                                : ""
                            }`}
                          />
                          <span>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </span>
                        </label>
                      ))}
                  </div>
                ))}
              </div>
              <div
                className={`flex flex-grow my-4 bg-white ${style.filterBottom}`}
              >
                <div className="bg-white">
                  <button
                    onClick={handleClearAll}
                    className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
                  >
                    Quitar todos
                  </button>
                </div>
                <div className="bg-white"></div>
                <div className="bg-white">
                  <button
                    onClick={handleModalActions}
                    className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
                  >
                    Encontrados <span>{numSalonesEncontrados}</span> salones
                  </button>
                </div>
                <button
                  onClick={toggleModal}
                  className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
                >
                  Mostrar Salones
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

//RESPALDO
// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import style from "../Filter.module.css";

// import { handleModalActionsFilter } from "./handlersModalFilters";

// export default function FilterModal({ list, setList }) {
//   const [showModal, setShowModal] = useState(false);
//   const [isAvailableFiltered, setIsAvailableFiltered] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [numSalonesEncontrados, setNumSalonesEncontrados] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(0);

//   const handleCheckboxChange = (option) => {
//     if (selectedOptions?.includes(option)) {
//       setSelectedOptions(selectedOptions.filter((item) => item !== option));
//     } else {
//       setSelectedOptions([...selectedOptions, option]);
//     }
//   };

//   const router = useRouter();
//   const url = process.env.MICROSERVICIOS;

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   const handlePriceChange = (event, setPrice) => {
//     const sanitizedValue = parseFloat(
//       event.target.value.replace(/[^0-9.]/g, "")
//     );
//     setPrice(sanitizedValue);
//   };

//   const handleModalActions = () => {
//     setIsAvailableFiltered(!isAvailableFiltered);
//     handleModalActionsFilter(
//       isAvailableFiltered,
//       setList,
//       list,
//       selectedOptions,
//       setNumSalonesEncontrados,
//       handlePriceChange,
//       maxPrice
//     );
//   };

//   const handleClearAll = () => {
//     setIsAvailableFiltered(false);
//     setSelectedOptions([]);
//     setList(list);
//     setNumSalonesEncontrados(0);
//   };

//   const serviceOptions = [
//     "accesibilidad",
//     "estacionamiento",
//     "wifi",
//     "calefaccion",
//     "aire_acondicionado",
//     "parrilla",
//     "pantalla",
//     "catering",
//     "bar",
//     "mesas_sillas",
//     "escenario",
//     "luces",
//     "sonido",
//     "fotografia",
//     "decoracion",
//     "baño",
//     "cocina",
//     "area_infantil",
//     "personal_seguridad",
//   ];

//   return (
//     <div className={`flex flex-col items-center ${style.filterButton}`}>
//       {showModal && (
//         <div className={style.modalBackdrop} onClick={toggleModal} />
//       )}
//       <div className={` ${style.clearAndButton}`}>
//         <button
//           style={{
//             marginTop: "40px",
//             marginRight: "140px",
//             width: "100px",
//             fontSize: "20px",
//           }}
//           className={`text-sm  ${style.filterButton1} `}
//           onClick={toggleModal}
//         >
//           Filtros
//         </button>
//       </div>
//       <div
//         className={` absolute z-50 flex flex-col items-center right-full ${style.showModal}`}
//       >
//         {showModal && (
//           <div className={`top-5 ${style.filterModal}`}>
//             <div className={`${style.modalContent}`}>
//               <div
//                 className={`flex flex-grow my-4 bg-white ${style.filterTitleTop}`}
//               >
//                 <h2 className={`${style.filterTitle}`}>Filtros</h2>
//               </div>
//               <div
//                 onClick={handleModalActions}
//                 className={`flex flex-grow my-2 ${style.filterTitleService}`}
//               >
//                 <h3>Rango de Precio</h3>
//               </div>
//               <div
//                 className={`flex items-center my-4 ${style.priceRangeInput}`}
//               >
//                 <label htmlFor="maxPrice">Máximo:</label>

//                 <input
//                   type="number"
//                   id="maxPrice"
//                   value={maxPrice}
//                   placeholder="$0"
//                   className={`border border-gray-300 rounded-md w-30 ml-2`}
//                   onChange={(e) => handlePriceChange(e, setMaxPrice, "max")} // Add "max" as the third argument
//                 />
//               </div>
//               <div
//                 className={`flex flex-grow my-2 ${style.filterTitleService}`}
//               >
//                 <h3>Servicios</h3>
//               </div>
//               <div className={`flex items-center mt-4 ${style.serviceOptions}`}>
//                 {/* Divide the checkboxes into three columns */}
//                 {Array.from({ length: 3 }, (_, index) => (
//                   <div key={index} className="flex flex-col mr-8">
//                     {serviceOptions
//                       .slice(index * 6, index * 6 + 6)
//                       .map((option) => (
//                         <label
//                           key={option}
//                           className={`flex items-center space-x-2 ${style.serviceOptions2}`}
//                           onClick={() => handleCheckboxChange(option)}
//                         >
//                           <input
//                             type="checkbox"
//                             checked={selectedOptions?.includes(option)}
//                             onChange={() => {}}
//                             className={`h-6 w-6 rounded border-gray-300 ${
//                               style.optionsCheckbox
//                             } ${
//                               selectedOptions?.includes(option)
//                                 ? style.checkedCheckbox
//                                 : ""
//                             }`}
//                           />
//                           <span>
//                             {option.charAt(0).toUpperCase() + option.slice(1)}
//                           </span>
//                         </label>
//                       ))}
//                   </div>
//                 ))}
//               </div>
//               <div
//                 className={`flex flex-grow my-4 bg-white ${style.filterBottom}`}
//               >
//                 <div className="bg-white">
//                   <button
//                     onClick={handleClearAll}
//                     className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
//                   >
//                     Quitar todos
//                   </button>
//                 </div>
//                 <div className="bg-white">
//                   <button
//                     onClick={toggleModal}
//                     className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
//                   >
//                     Cerrar
//                   </button>
//                 </div>
//                 <div className="bg-white">
//                   <button
//                     onClick={handleModalActions}
//                     className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
//                   >
//                     Encontrados <span>{numSalonesEncontrados}</span> salones
//                   </button>
//                 </div>
//                 <button
//                   onClick={toggleModal}
//                   className="text-2xl border border-gray-200 py-2 px-4 rounded-lg hover:shadow-md hover:font-bold"
//                 >
//                   Mostrar Salones
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
