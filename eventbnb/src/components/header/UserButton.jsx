"use client";

import React, { useState, useEffect } from "react";
import style from "./Header.module.css";
import SignIn from "../auth/FormAuth";
import { deleteCookie, getCookie } from "../../utils/cookies";
import { signOut } from "next-auth/react";
import Link from "next/link";
import useUsers from "@/hooks/useUsers";

export default function UserButton({ showOptions }) {
  const [hidden, setHidden] = useState(false);
  const [jwt, setJwt] = useState('')
  const {getUserData} = useUsers()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const token = getCookie('userToken')
    setJwt(token)
    const getData = async () => {
      const data = await getUserData()
      setUserData(data)
    }
    getData()
  }, [])
  
  const logOut = async () => {
    deleteCookie("userToken");
    signOut();
  };
  
  return (
    <div>
      {showOptions && (
        <div
          className={` absolute flex flex-col items-start right-8 h-20 bg-white border border-gray-300 rounded-lg w-72 my-2 ${style.login}`}
        >
          {!jwt && (
            <>
              <button
                className={` w-full text-start font-semibold h-full text-black rounded-lg hover:bg-slate-100 px-4 ${style.login__btn1}`}
                onClick={() => setHidden(true)}
              >
                Iniciar Sesión
              </button>
              <button
                className={`w-full h-full text-start font-semibold text-black rounded-lg hover:bg-slate-100 px-4 ${style.login__btn2}`}
                onClick={() => setHidden(true)}
              >
                Registrarse
              </button>
              <hr />
            </>
          )}
          {jwt && (
            <>
              <Link
                href="/account-settings"
                className={`w-full text-start font-semibold h-full text-black rounded-lg hover:bg-slate-100 px-4 ${style.login__btn1}`}
              >
                Ver Perfil
              </Link>
              <hr />
              <Link
                href={`/favorites/${userData._id}`}
                className={`w-full text-start font-semibold h-full text-black rounded-lg hover:bg-slate-100 px-4 ${style.login__btn1}`}
              >
                Favoritos
              </Link>
              <hr />
              <Link
                href={`/reservations/${userData._id}`}
                className={`w-full text-start font-semibold h-full text-black rounded-lg hover:bg-slate-100 px-4 ${style.login__btn1}`}
              >
                Mis reservas
              </Link>
              <hr />
              <button
                type="button"
                onClick={() => logOut()}
                className={`w-full text-start font-semibold h-full text-black rounded-lg hover:bg-slate-100 px-4 ${style.login__btn1}`}
              >
                Cerrar sesión
              </button>
            </>
          )}
          <SignIn hidden={hidden} setHidden={setHidden} />
        </div>
      )}
    </div>
  );
}
