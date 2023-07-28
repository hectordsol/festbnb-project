"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import BackButton from "../../../../components/create-halls/backButton";
import ButtonHalls from "@/components/create-halls/ButtonHalls";
import useSalons from "@/hooks/useSalons";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  precio: yup.number().required(),
  capacidad_max: yup.number().required(),
  superficie: yup.number().required(),
});

export default function AirbnbSection() {
  const { salon, setSalon } = useSalons<Salon>();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [aire_acondicionado, setaire_acondicionado] = useState(3);
  const [parrilla, setParrilla] = useState(2);
  const [pantalla, setPantalla] = useState(1);
  const [personal_seguridad, setpersonal_seguridad] = useState(7);
  const [baño, setBaño] = useState(2);

  const handleDecrement = (setState) => {
    setState((prevState) => prevState - 1);
  };

  const handleIncrement = (setState) => {
    setState((prevState) => prevState + 1);
  };

  function onSubmit(data) {
    console.log(data);
    setSalon((prevState) => ({
      ...prevState,
      precio: data.precio,
      capacidad_max: data.capacidad_max,
      superficie: data.superficie,
      aire_acondicionado: aire_acondicionado,
      parrilla: parrilla,
      pantalla: pantalla,
      personal_seguridad: personal_seguridad,
      baño: baño,
    }));
    router.push("./finish-setup");
    // window.location.href = "./finish-setup";
  }

  return (
    <section className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Detalles del salón de fiestas
      </h2>
      <div className="container mx-auto flex items-center justify-center">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <section className="flex items-center justify-center">
            <div>
              <div className=" mb-4">
                <label htmlFor="precio" className="text-lg text-gray-900">
                  Precio:
                </label>
                <input
                  type="number"
                  className={`border ${
                    errors.precio ? "border-red-500" : "border-gray-300"
                  } px-2 py-1 w-24  block text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
                  {...register("precio")}
                />
                {errors.precio && (
                  <span className="text-red-500">Campo requerido</span>
                )}
              </div>

              <div className=" mb-4">
                <label
                  htmlFor="capacidad_max"
                  className="text-lg text-gray-900"
                >
                  Capacidad máxima:
                </label>
                <input
                  type="number"
                  className={`border ${
                    errors.capacidad_max ? "border-red-500" : "border-gray-300"
                  } px-2 py-1 w-24  block text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
                  {...register("capacidad_max")}
                />
                {errors.capacidad_max && (
                  <span className="text-red-500">Campo requerido</span>
                )}
              </div>

              <div className=" mb-4">
                <label htmlFor="superficie" className="text-lg text-gray-900">
                  Superficie:
                </label>
                <input
                  type="number"
                  className={`border ${
                    errors.superficie ? "border-red-500" : "border-gray-300"
                  } px-2 py-1 w-24  block text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
                  {...register("superficie")}
                />
                {errors.superficie && (
                  <span className="text-red-500">Campo requerido</span>
                )}
              </div>

              <div className=" mb-4">
                <label
                  htmlFor="aire_acondicionado"
                  className="text-lg text-gray-900"
                >
                  Aire Acondicionado:
                </label>
                <button
                  disabled={aire_acondicionado <= 0 ? true : false}
                  type="button"
                  className="rounded-full px-3 py-1 bg-gray-300 text-gray-900 "
                  onClick={() => handleDecrement(setaire_acondicionado)}
                >
                  -
                </button>
                <span className="px-3">{aire_acondicionado}</span>
                <button
                  type="button"
                  className="rounded-full px-3 py-1 bg-gray-300 text-gray-900"
                  onClick={() => handleIncrement(setaire_acondicionado)}
                >
                  +
                </button>
              </div>

              <div className=" mb-4">
                <label htmlFor="parrilla" className="text-lg text-gray-900">
                  Parrilla:
                </label>
                <button
                  disabled={parrilla <= 0 ? true : false}
                  type="button"
                  className="rounded-full px-3 py-1 bg-gray-300 text-gray-900 "
                  onClick={() => handleDecrement(setParrilla)}
                >
                  -
                </button>
                <span className="px-3">{parrilla}</span>
                <button
                  type="button"
                  className="rounded-full px-3 py-1 bg-gray-300 text-gray-900"
                  onClick={() => handleIncrement(setParrilla)}
                >
                  +
                </button>
              </div>

              <div className=" mb-4">
                <label htmlFor="pantalla" className="text-lg text-gray-900">
                  Pantalla:
                </label>
                <button
                  disabled={pantalla <= 0 ? true : false}
                  type="button"
                  className="rounded-full px-3 py-1 bg-gray-300 text-gray-900 "
                  onClick={() => handleDecrement(setPantalla)}
                >
                  -
                </button>
                <span className="px-3">{pantalla}</span>
                <button
                  type="button"
                  className="rounded-full px-3 py-1 bg-gray-300 text-gray-900"
                  onClick={() => handleIncrement(setPantalla)}
                >
                  +
                </button>
              </div>

              <div className=" mb-4">
                <label
                  htmlFor="personal_seguridad"
                  className="text-lg text-gray-900"
                >
                  Personal de Seguridad:
                </label>
                <button
                  disabled={personal_seguridad <= 0 ? true : false}
                  type="button"
                  className="rounded-full px-3 py-1 bg-gray-300 text-gray-900 "
                  onClick={() => handleDecrement(setpersonal_seguridad)}
                >
                  -
                </button>
                <span className="px-3">{personal_seguridad}</span>
                <button
                  type="button"
                  className="rounded-full px-3 py-1 bg-gray-300 text-gray-900"
                  onClick={() => handleIncrement(setpersonal_seguridad)}
                >
                  +
                </button>
              </div>

              <div className=" mb-4">
                <label htmlFor="baño" className="text-lg text-gray-900">
                  Baño:
                </label>
                <button
                  disabled={baño <= 0 ? true : false}
                  type="button"
                  className="rounded-full px-3 py-1 bg-gray-300 text-gray-900 "
                  onClick={() => handleDecrement(setBaño)}
                >
                  -
                </button>
                <span className="px-3">{baño}</span>
                <button
                  type="button"
                  className="rounded-full px-3 py-1 bg-gray-300 text-gray-900"
                  onClick={() => handleIncrement(setBaño)}
                >
                  +
                </button>
              </div>
            </div>
          </section>

          {/* <button
            type="submit"
            className=" flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-pink-600"
          >
            Confirmar
          </button> */}
          <div className="sticky bottom-0 left-0 border-t-2 border-black/20 px-6 py-6 flex items-center justify-between w-full bg-slate-100">
            <BackButton href="./stand-out"></BackButton>
            <button
              className={`bg-black/90 hover:bg-black px-6 py-3 rounded-md text-white font-semibold`}
              type="submit"
            >
              Siguiente
            </button>
          </div>
        </form>
      </div>
      {/* <div className="sticky bottom-0 left-0 border-t-2 border-black/20 px-6 py-6 flex items-center justify-between w-full bg-slate-100">
        <BackButton href="./stand-out"></BackButton>
        <ButtonHalls href="./finish-setup" content="Siguiente" backBtn={true} />
      </div> */}
    </section>
  );
}
