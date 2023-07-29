"use client";

import BackButton from "../../../../components/create-halls/backButton";
// import ButtonHalls from "@/components/create-halls/ButtonHalls";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useSalons from "@/hooks/useSalons";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Salon } from "@/app/api/filters/route";
// import {Salones} from "../../../../context/UserProvider";
type FormData = yup.InferType<typeof schema>;

const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  domicilio: yup.string().required("El domicilio es requerido"),
  localidad: yup.string().required("La localidad es requerida"),
  ubicacion: yup.string().required("La ubicación es requerida"),
  telefono: yup.number().required("El teléfono es requerido"),
});
type UsersContextType = {
  salon:  Salon;
  setSalon: (salon: Salon) => void; 
};
const PassedFinal: React.FC = () => {
  const { salon, setSalon } = useSalons() as UsersContextType;
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setSalon((prevState: Salon)  => ({...prevState, [name]: value}));
  };

  useEffect(() => {
    const url = window.location;
    const pathname = url.pathname;
    const parts = pathname.split('/');
    const id_user = parts[2];

    setSalon((prevState: Salon) => ({
      ...prevState,
      propietario: id_user
    }));
  }, [])

  async function onSubmit(data: FormData) {
    const url = process.env.MICROSERVICIOS;
    
    try {
      await axios.post(`http://104.154.93.179:5000/salones`, salon);
      setSalon({
        _id:"",
        nombre: "",
        domicilio: "",
        localidad: "",
        ubicacion: "",
        imagenes: [],
        telefono: 0,
        precio: 0, 
        capacidad_max: 0,
        superficie: 0, 
        disponibilidad:false,
        calefaccion: 0,
        aire_acondicionado: 0,
        parrilla: 0,
        pantalla: 0,
        personal_seguridad: 0,
        baño: 0,
        baño_accesibilidad: false,
        pasillo_accesibilidad: false,
        entrada_accesibilidad:false,
        estacionamiento_accesibilidad:false,
        estacionamiento: false,
        catering: false, 
        mesas_sillas:false,
        luces:false,
        sonido:false,
        fotografia: false,
        decoracion: false,
        pileta:false,
        wifi:false,
        cocina:false,
        bar:false,
        escenario:false,
        descripcion:"",
        propietario:"id_user",
        puntuacion:"",
        eventos:[],
        mascotas:false,
        area_infantil:false,
        area_fumadores:false
      })
      router.push('/')
    } catch (error) { 
      alert(error.message);
    }

    // router.push("#");
  }
  console.log(salon)
  return (
    <section className="bg-gray-100 pt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Datos del salón</h2>
      {/* <div className="container mx-auto py-8 flex items-center justify-center"> */}
        <form className="w-full mx-auto py-8 flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-1/2">
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block text-gray-700 font-medium mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                {...register("nombre")}
                onChange={handleInputChange}
                className={`border ${
                  errors.nombre ? "border-red-500" : "border-gray-300"
                } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              />
              {errors.nombre && (
                <span className="text-red-500 mt-1">{errors.nombre.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="domicilio"
                className="block text-gray-700 font-medium mb-2"
              >
                Domicilio
              </label>
              <input
                type="text"
                id="domicilio"
                {...register("domicilio")}
                onChange={handleInputChange}
                className={`border ${
                  errors.domicilio ? "border-red-500" : "border-gray-300"
                } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              />
              {errors.domicilio && (
                <span className="text-red-500 mt-1">
                  {errors.domicilio.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="localidad"
                className="block text-gray-700 font-medium mb-2"
              >
                Localidad
              </label>
              <input
                type="text"
                id="localidad"
                {...register("localidad")}
                onChange={handleInputChange}
                className={`border ${
                  errors.localidad ? "border-red-500" : "border-gray-300"
                } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              />
              {errors.localidad && (
                <span className="text-red-500 mt-1">
                  {errors.localidad.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="ubicacion"
                className="block text-gray-700 font-medium mb-2"
              >
                Ubicación
              </label>
              <input
                type="text"
                {...register("ubicacion")}
                onChange={handleInputChange}
                id="ubicacion"
                className={`border ${
                  errors.ubicacion ? "border-red-500" : "border-gray-300"
                } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              />
              {errors.ubicacion && (
                <span className="text-red-500 mt-1">
                  {errors.ubicacion.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="telefono"
                className="block text-gray-700 font-medium mb-2"
              >
                Teléfono
              </label>
              <input
                type="text"
                id="telefono"
                {...register("telefono")}
                onChange={handleInputChange}
                className={`border ${
                  errors.telefono ? "border-red-500" : "border-gray-300"
                } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              />
              {errors.telefono && (
                <span className="text-red-500 mt-1">
                  {errors.telefono.message}
                </span>
              )}
            </div>
          </div>
          <div className="sticky bottom-0 left-0 border-t-2 border-black/20 py-6 flex items-center justify-between w-full bg-slate-100">
            <BackButton href="./photos"></BackButton>
            <button
              className={`bg-black/90 hover:bg-black px-6 py-3 rounded-md text-white font-semibold`}
              type="submit"
            >
              Siguiente
            </button>
          </div>
        </form>
      {/* </div> */}
    </section>
  );
};

export default PassedFinal;
