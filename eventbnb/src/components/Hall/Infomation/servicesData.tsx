import { AiFillCar, AiOutlineSound } from "react-icons/ai";
import { BsLightbulb, BsPostage } from "react-icons/bs";
import { FaKitchenSet } from "react-icons/fa6";
import { GiPartyFlags } from "react-icons/gi";
import { HiWifi } from "react-icons/hi";
import { IoAccessibility } from "react-icons/io5";
import {
  MdOutlineAddAPhoto,
  MdOutlineBathroom,
  MdSecurity,
  MdTableBar,
} from "react-icons/md";
import { TbAirConditioning, TbGrill, TbPool } from "react-icons/tb";
import { SlScreenDesktop } from "react-icons/sl";

export interface IServicesData {
  type: string;
  value: string;
  icon: JSX.Element;
}

const servicesData: IServicesData[] = [
  {
    type: "accesibilidad",
    value: "Accesibilidad",
    icon: <IoAccessibility size={25} />,
  },
  {
    type: "estacionamiento",
    value: "Estacionamiento",
    icon: <AiFillCar size={25} />,
  },
  {
    type: "catering",
    value: "Catering",
    icon: <MdOutlineBathroom size={25} />,
  },
  {
    type: "baño_accesibilidad",
    value: "Baño de Accesibilidad",
    icon: <MdOutlineBathroom size={25} />,
  },
  {
    type: "mesas_sillas",
    value: "Mesas y Sillas",
    icon: <MdTableBar size={25} />,
  },
  {
    type: "luces",
    value: "Luces",
    icon: <BsLightbulb size={25} />,
  },
  {
    type: "sonido",
    value: "Sonido",
    icon: <AiOutlineSound size={25} />,
  },
  {
    type: "fotografia",
    value: "Fotografia",
    icon: <MdOutlineAddAPhoto size={25} />,
  },
  {
    type: "decoracion",
    value: "Decoracion",
    icon: <GiPartyFlags size={25} />,
  },
  {
    type: "pileta",
    value: "Pileta",
    icon: <TbPool size={25} />,
  },
  {
    type: "wifi",
    value: "Wifi",
    icon: <HiWifi size={25} />,
  },
  {
    type: "cocina",
    value: "Cocina",
    icon: <FaKitchenSet size={25} />,
  },
  {
    type: "escenario",
    value: "Escenario",
    icon: <BsPostage size={25} />,
  },
  {
    type: "aire_acondicionado",
    value: "Aire Acondicionado",
    icon: <TbAirConditioning size={25} />,
  },
  {
    type: "parrilla",
    value: "Parrilla",
    icon: <TbGrill size={25} />,
  },
  {
    type: "pantalla",
    value: "Pantalla",
    icon: <SlScreenDesktop size={25} />,
  },
  {
    type: "personal_seguridad",
    value: "Personal de Seguridad",
    icon: <MdSecurity size={25} />,
  },
];

export default servicesData;
