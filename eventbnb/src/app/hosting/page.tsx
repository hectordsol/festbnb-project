"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import useUsers from "@/hooks/useUsers";
import { useRouter } from "next/navigation";
import AlertError from "@/components/alert/AlertError";
import Back from "@/components/back/Back";

const Hosting = async () => {
  const { getUserData, validateSession } = useUsers();
  const [data, setData] = useState();
  const router = useRouter();
  const [isHidden, setIsHidden] = useState(true);

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
  }, []);

  return (
    <section className="text-black bg-white w-full px-6 md:px-24 flex flex-col gap-y-6 md:gap-y-16">
      <Back />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-8 gap-y-4">
        <h3 className="text-xl md:text-3xl font-semibold text-center">
          ¡Te damos la bienvenida, {data?.nombre}!
        </h3>
        <div className="flex items-center gap-x-3">
          <Link
            href={`hosting/listings`}
            className="text-sm md:text-lg border border-black rounded-lg px-2 md:px-4 py-1 font-medium hover:bg-slate-100"
          >
            Mis anuncios
          </Link>
          <Link
            href={`/become-a-host/${data?._id}/overview`}
            className="text-sm md:text-lg border border-black rounded-lg px-2 md:px-4 py-1 font-medium hover:bg-slate-100"
          >
            Completá tu anuncio
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-3xl font-semibold">Tus reservas</h3>
          <Link
            className="text-sm md:text-lg underline font-semibold"
            href="/hosting/reservations"
          >
            Todas las reservas {"(${cantidad de reservas})"}
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-x-4 flex-wrap gap-y-4">
          <button className="border rounded-full px-2 py-1 hover:border-black">
            Hacen el check-out pronto {"(${cantidad de reservas})"}
          </button>
          <button className="border rounded-full px-2 py-1 hover:border-black">
            Estadías en curso {"(${cantidad de reservas})"}
          </button>
          <button className="border rounded-full px-2 py-1 hover:border-black">
            Llegan pronto {"(${cantidad de reservas})"}
          </button>
          <button className="border rounded-full px-2 py-1 hover:border-black">
            Próximas {"(${cantidad de reservas})"}
          </button>
          <button className="border rounded-full px-2 py-1 hover:border-black">
            Evaluación pendiente {"(${cantidad de reservas})"}
          </button>
        </div>
      </div>
      {/* <div className="rounded-lg bg-slate-100 py-12">
        {reservations ? (
          "RESERVAS"
        ) : (
          <div className="flex flex-col items-center justify-center gap-y-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block h-8 w-8"
            >
              <path d="M24 1a5 5 0 0 1 5 4.78v5.31h-2V6a3 3 0 0 0-2.82-3H8a3 3 0 0 0-3 2.82V26a3 3 0 0 0 2.82 3h5v2H8a5 5 0 0 1-5-4.78V6a5 5 0 0 1 4.78-5H8zm-2 12a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.02 3.17 1.36 1.46-6.01 5.64-3.35-3.14 1.36-1.46 1.99 1.86z"></path>
            </svg>
            <span>{"${mensajePersonalizadoParaCadaFiltro}"}</span>
          </div>
        )}
      </div> */}
      <div className="flex flex-col gap-y-8">
        <h3 className="text-3xl font-semibold">Estamos acá para ayudarte</h3>
        <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-4 pb-12">
          <div className="flex items-start gap-x-4 border rounded-lg w-full md:w-1/2 xl:w-[40%] px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="M22 5a6 6 0 0 1 3.64 10.77A9 9 0 0 1 31 23.74V24h-2a7 7 0 0 0-6-6.93v-2.2A4 4 0 0 0 22 7a4 4 0 0 0-3.68 5.57A5 5 0 0 1 21 17a4.99 4.99 0 0 1-1.6 3.67 9 9 0 0 1 5.6 8.06V29h-2a7 7 0 0 0-6-6.93v-2.24a3 3 0 1 0-2 0v2.24a7 7 0 0 0-6 6.69V29H7a9 9 0 0 1 5.6-8.34 5 5 0 0 1 1.08-8.09A4 4 0 1 0 9 14.87v2.2a7 7 0 0 0-6 6.69V24H1a9 9 0 0 1 5.36-8.23A6 6 0 1 1 15.92 10h.16A6 6 0 0 1 22 5z"></path>
            </svg>
            <div>
              <h4 className="font-semibold text-lg">
                Sumate al club de anfitriones de tu zona
              </h4>
              <p className="text-slate-600">
                Conocé a otros anfitriones y miembros de la comunidad con
                quienes colaborar e intercambiar consejos.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-4 border rounded-lg w-full md:w-1/2 xl:w-[40%] px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="M16 1a11 11 0 0 1 10.6 8.03 6 6 0 0 1-.34 11.96 11.01 11.01 0 0 1-7.53 6.7l.2-.05a3 3 0 1 1-.26-2.01 9 9 0 0 0 6.33-8.6V12a9 9 0 0 0-18-.27V21H6a6 6 0 0 1-.6-11.97A11 11 0 0 1 16 1zm0 25a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm.75-20.4c.69 0 1.25.55 1.25 1.24V11h2.04c.2 0 .38.04.56.13l.12.07a1.25 1.25 0 0 1 .37 1.73l-5.8 8.9a1.25 1.25 0 0 1-2.29-.67V17h-2.04a1.25 1.25 0 0 1-.56-.13l-.12-.07a1.25 1.25 0 0 1-.37-1.73l5.8-8.9a1.25 1.25 0 0 1 1.04-.58zM5 11.12l-.15.04a4 4 0 0 0 0 7.66l.15.04v-7.74zm22 0v7.74l.15-.04a4 4 0 0 0 0-7.66l-.15-.04zM16 9.37 12.34 15H15v3.63L18.66 13H16V9.37z"></path>
            </svg>
            <div>
              <h4 className="font-semibold text-lg">
                Sumate al club de anfitriones de tu zona
              </h4>
              <p className="text-slate-600">
                Conocé a otros anfitriones y miembros de la comunidad con
                quienes colaborar e intercambiar consejos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AlertError
        method={handleClick}
        param={"/"}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        href={"/"}
      ></AlertError>
    </section>
  );
};

export default Hosting;
