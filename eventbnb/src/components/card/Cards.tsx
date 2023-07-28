import React from "react";
import Card from "./CardItem";
import styles from "./Cards.module.css";
import Filter from "../filter/filterSlide/Filter";
// import { FilterContext } from "../../context/FilterContext"; //Adri

export default function Cards({ list }) {
  /*Filtros by Adriana */
  // const { filteredCards } = React.useContext(FilterContext); // Obtener los salones filtrados del contexto
  return (
    <div>
      <div
        className={`inline-flex justify-evenly items-center flex-wrap gap-5 py-12 px-4 ${styles.card__container}`}
        //agregue este estilo (marginTop: "-50px") para separar el header del filtro fijo de los cards - By Adriana
        //puede cambiarse por un padding en el header, por ahora lo trabajé así.
        style={{ marginTop: "-20px" }}
      >
        {list?.map((card, i) => (
          <Card card={card} key={i} />
        ))}
      </div>
    </div>
  );
}
