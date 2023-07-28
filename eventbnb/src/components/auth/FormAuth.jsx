"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { setCookie } from "../../utils/cookies";
import axios from "axios";

import { FcGoogle } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { CiWarning } from "react-icons/ci";

const SignIn = ({ hidden, setHidden }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [localLogin, setLocalLogin] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!Object.entries(errors).length) {
        const response = await axios.post("http://104.154.93.179:5000/usuarios", {
          email: localLogin.email,
          password: localLogin.password,
          loginGoogle: false
        });
        setLocalLogin({
          email: "",
          password: "",
        });
        // Guardar info de la peticion en la cookie
           setCookie('userToken', response?.data?.data, 2);
        router.push("/");
      }
    } catch (error) {
      alert("Hubo un error", error);
    }
  };

  function validationErrors(formLogin) {
    let errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPasswordMayuscula = /(?=.*[A-Z])/;
    const regexPasswordEspecialCharacter = /(?=.*[!@#$%^&*])/;

    if (!formLogin.email.length) {
      errors.email = "Por favor ingresa tu email.";
    }

    if (!regexEmail.test(formLogin.email)) {
      errors.email = "Por favor ingresa un email válido.";
    }

    if (!formLogin.password.length) {
      errors.password = "Por favor ingresa una contraseña.";
    }

    if (!regexPasswordMayuscula.test(formLogin.password)) {
      errors.password =
        "La contraseña debe tener al menos una letra mayúscula.";
    }

    if (!regexPasswordEspecialCharacter.test(formLogin.password)) {
      errors.password =
        "La contraseña debe tener al menos un carácter especial.";
    }

    return errors;
  }

  function handleChange(e) {
    setLocalLogin({ ...localLogin, [e.target.name]: e.target.value });
    setErrors(
      validationErrors({ ...localLogin, [e.target.name]: e.target.value })
    );
  }

  useEffect(() => {
    const registerUser = async () => {
      if (session) {
        try {
          // Realizar la petición POST después de que la sesión se haya actualizado
          const response = await axios.post(
            "http://104.154.93.179:5000/usuarios",
            {
              email: session?.user?.email,
              loginGoogle: true
            }
          );
          // Guardar info de la peticion en la cookie
          setCookie("userToken", response?.data?.data, 2);
        } catch (error) {
          alert("al parecer hubo un error", error.message);
        }
      }
    };

    registerUser();
  }, [session]);

  return (
    <div
      className={`${
        hidden
          ? "w-full h-full flex items-center justify-center fixed top-0 left-0 py-4 overflow-x-hidden overflow-y-auto bg-black/40 z-[999]"
          : "hidden"
      }`}
    >
      <div className="h-full shadow-xl gap-y-4 bg-white pb-4 text-black w-full xl:w-[40%] mx-auto rounded-xl flex flex-col">
        <div className="px-4 flex items-center justify-between w-full rounded-t-lg py-2 border-b">
          <AiOutlineClose
            className="text-4xl text-black p-2 rounded-full hover:cursor-pointer hover:bg-gray-600/5"
            onClick={() => setHidden(false)}
          ></AiOutlineClose>
          <p className="mx-auto font-semibold">Iniciá sesión o registrate</p>
        </div>
        <div className="overflow-y-auto px-6 flex flex-col gap-y-6">
          <h2 className="my-2 text-xl font-semibold">
            Te damos la bienvenida a Eventbnb
          </h2>
          <form className="" onSubmit={handleSubmit} action="">
            <div className="relative z-0 w-full group mt-6">
              <input
                value={localLogin.email}
                type="email"
                name="email"
                onChange={handleChange}
                id="floating_email"
                className="block w-full text-sm text-gray-900 bg-transparent border rounded-lg py-4 px-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=""
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">
                Correo electrónico
              </label>
            </div>
            <div className="relative z-0 w-full group mt-10">
              <input
                value={localLogin.password}
                type="password"
                name="password"
                onChange={handleChange}
                id="floating_password"
                className="border-t-transparent border rounded-lg w-full py-4 px-2 block text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=""
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">
                Contraseña
              </label>
            </div>
            <p className="text-[12px] mt-2">
              Vamos a llamarte o enviarte un mensaje para confirmar el número.
              Se aplican tarifas estándar para mensajes y uso de datos.{" "}
              <Link className="underline font-semibold" href="">
                Política de privacidad
              </Link>
            </p>
            <button
              className="w-full rounded-lg bg-gradient-to-r from-pink-700 via-pink-600 to-pink-700 text-white font-semibold py-[12px] mt-4"
              type="submit"
            >
              Continuar
            </button>
          </form>
          {errors.email && (
            <span className="flex justify-between items-center w-full my-6 rounded-lg border ">
              <div className="py-4 px-3 h-full flex bg-orange-500 rounded-l-lg items-center justify-center">
                <CiWarning className="text-3xl text-white"></CiWarning>
              </div>
              <div className="px-4 flex items-center justify-center h-full self-center">
                <div className="self-center text-zinc-600">{errors.email}</div>
              </div>
            </span>
          )}
          {errors.password && (
            <span className="flex justify-between items-center w-full my-6 rounded-lg border ">
              <div className="py-4 px-3 h-full flex bg-orange-500 rounded-l-lg items-center justify-center">
                <CiWarning className="text-3xl text-white"></CiWarning>
              </div>
              <div className="px-4 flex items-center justify-center h-full self-center">
                <div className="self-center text-zinc-600">
                  {errors.password}
                </div>
              </div>
            </span>
          )}
          <div className="flex gap-x-4 items-center px-4">
            <div className="h-[1px] w-full bg-gray-800/20" />
            <span className="text-sm">o</span>
            <div className="h-[1px] w-full bg-gray-800/20" />
          </div> 
          <div className="flex flex-col gap-y-4 ">
            <button
              type="button"
              onClick={() => signIn("google")}
              className="border border-gray-800 w-full rounded-lg flex justify-between items-center px-4 py-[12px]"
            >
              <FcGoogle className="text-xl"></FcGoogle>
              <span className="self-center mx-auto">
                Registrate con Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
