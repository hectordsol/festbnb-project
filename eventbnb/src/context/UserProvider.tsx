"use client";
import { useEffect } from "react";
import { getCookie } from "@/utils/cookies";
import axios from "axios";
import { createContext, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export interface User {
  _id:string;
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
export interface Salones {
  accesibilidad: boolean;
  aire_acondicionado: number;
  baño: number;
  baño_accesibilidad: boolean;
  borrado: boolean;
  capacidad_max: number;
  catering: boolean;
  cocina: boolean;
  decoracion: boolean;
  domicilio: string;
  escenario: boolean;
  estacionamiento: boolean;
  eventos: any[];
  fechaCreacion: Date;
  fotografia: boolean;
  imagenes: string[];
  localidad: string;
  luces: boolean;
  mesas_sillas: boolean;
  nombre: string;
  pantalla: number;
  parrilla: number;
  personal_seguridad: number;
  pileta: boolean;
  precio: number;
  propietario: Propietario;
  reviews: any[];
  sonido: boolean;
  superficie: number;
  telefono: number;
  ubicacion: string;
  wifi: boolean;
  __v: number;
  _id: string;
}

export interface Propietario {
  _id: string;
}

// --------- CREADO POR ADRIANA ---------

const UsersContext = createContext({});

const url = process.env.NEXT_PUBLIC_MICROSERVICIOS;

export const UsersProvider = ({ children }) => {
  const { data: session } = useSession();
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
                    
  const getSalones = async() :Promise<void> => {
    const { data } = await axios(`${url}/salones`);
    const list = data;
    console.log(list);
    setList(list.data);
  }

  useEffect(() => {
    getSalones();
  }, []);

  const [user, setUser] = useState<User>({
    _id:"",
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

  //----------- FIN CREADO POR ADRIANA ------------

  const router = useRouter();

  const validateSession = (): boolean =>  {
    const jwt = getCookie("userToken");

    if (!session && !jwt) return false;
    return true;
  };

  const getUserData = async (): Promise<User> => {
    const jwt = getCookie("userToken");
    // console.log(jwt)
    const { data } = await axios(
      "http://104.154.93.179:5000/usuarios/protected",
      {
        headers: {
          Authorization: "Bearer " + jwt,
        },
      }
    );

    if (data.error) throw new Error("");
    return data.data;
  };

  return (
    <UsersContext.Provider
      value={{
        user,
        setUser,
        getUserData,
        validateSession,
        list,
        setList,
        filteredList,
        setFilteredList,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
export default UsersContext;
