import { useContext } from "react";
import SalonsContext from "../context/SalonsProvider";

function useSalons() {
  return useContext(SalonsContext)
}

export default useSalons;
