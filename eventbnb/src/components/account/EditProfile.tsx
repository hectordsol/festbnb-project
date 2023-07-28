"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { countries } from "../utils/countries";
import { FaEye, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getCookie } from "@/utils/cookies";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useUsers from "@/hooks/useUsers";
import axios from "axios";
import AlertError from "@/components/alert/AlertError";

type FormData = yup.InferType<typeof schema>;

const schema = yup.object().shape({
  nombre: yup.string(),
  apellido: yup.string(),
  password: yup.string(),
  telefono: yup
    .number()
    .min(10, "The phone must have at least 10 numbers")
    .positive("The phone is not valid"),
  fechaNacimiento: yup.date(),
  domicilio: yup.string(),
  localidad: yup.string(),
  pais: yup.string(),
});

const EditProfile: React.FC = () => {
  const { validateSession, getUserData } = useUsers();
  const [data, setData] = useState();
  const { data: session } = useSession();
  const [jsonWebToken, setJsonWebToken] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const router = useRouter();

  const handleClick = (route) => {
    setIsHidden(true);
    router.push(route);
  };

  useEffect(() => {
    const validate = async () => {
      try {
        const isValidate = validateSession();
        setIsHidden(isValidate);
        const dataUser = await getUserData();
        setData(dataUser);
      } catch (error) {
        setIsHidden(false);
      }
    };
    validate();
  }, [getUserData, validateSession]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (date: FormData) => {
    console.log(date);
    try {
      const {} = await axios({
        method: "put",
        url: `http://104.154.93.179:5000/usuarios/${data?._id}`,
        data: date,
      });
      alert("Datos actualizados correctamente");
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const mostrarContrasena = ()=>{
    let tipo = document.getElementById("password");
      if(tipo.type == "password"){
          tipo.type = "text";
      }else{
          tipo.type = "password";
      }
  }

  return (
    <section className="container mx-5 py-8">
      <AlertError
        method={handleClick}
        param={"/"}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        href={"/"}
      ></AlertError>
      <h1 className="text-2xl font-semibold mb-4 text-center flex flex-col gap-6">
        Editar perfil
      </h1>
      <section className="flex md:items-start md:flex-row justify-evenly flex-col items-center">
        <div className="">
          <div className="px-8 py-6 rounded-md shadow-xl">
            <h1 className="">
              <FaUser className="bg-slate-500 w-24 h-24 rounded-full" />
            </h1>
            <h1 className="text-center font-semibold">{data?.nombre}</h1>
            <span className="text-gray-600 font-semibold">Usuario</span>
          </div>
        </div>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              className={`border ${
                errors.nombre ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("nombre")}
              defaultValue={data?.nombre}
            />
            {errors.nombre && (
              <p className="text-red-500 mt-1">{errors.nombre.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="apellido"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Apellido
            </label>
            <input
              id="apellido"
              type="text"
              className={`border ${
                errors.apellido ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("apellido")}
              defaultValue={data?.apellido}
            />
            {errors.apellido && (
              <p className="text-red-500 mt-1">{errors.apellido.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="telefono"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Teléfono
            </label>
            <input
              id="telefono"
              type="text"
              className={`border ${
                errors.telefono ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("telefono")}
              defaultValue={data?.telefono}
            />
            {errors.telefono && (
              <p className="text-red-500 mt-1">{errors.telefono.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="fechaNacimiento"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Fecha de nacimiento
            </label>
            <input
              id="fechaNacimiento"
              type="date"
              className={`border ${
                errors.fechaNacimiento ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("fechaNacimiento")}
              defaultValue={data?.fechaNacimiento}
            />
            {errors.fechaNacimiento && (
              <p className="text-red-500 mt-1">
                {errors.fechaNacimiento.message}
              </p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="domicilio"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Domicilio
            </label>
            <input
              id="domicilio"
              type="text"
              className={`border ${
                errors.domicilio ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("domicilio")}
              defaultValue={data?.domicilio}
            />
            {errors.domicilio && (
              <p className="text-red-500 mt-1">{errors.domicilio.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="localidad"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Localidad
            </label>
            <input
              id="localidad"
              type="text"
              className={`border ${
                errors.localidad ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("localidad")}
              defaultValue={data?.localidad}
            />
            {errors.localidad && (
              <p className="text-red-500 mt-1">{errors.localidad.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="pais"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              País
            </label>
            <select
              id="pais"
              {...register("pais")}
              defaultValue={data?.pais}
              className="block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Seleccione un país</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.pais && (
              <p className="text-red-500 mt-1">{errors.pais.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className={`border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
              {...register("password")}
              defaultValue={data?.password}
            />
            <button
                className="flex justify-center rounded-md bg-blue-300 px-3 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-blue-400"
                type="button"
                onClick={mostrarContrasena}
              >
                <FaEye className="w-8 h-4"/>
              </button>
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-pink-600"
          >
            Guardar cambios
          </button>
        </form>
      </section>
    </section>
  );
};

export default EditProfile;
