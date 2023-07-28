"use client";
import Image from "next/image";
import account from "../utils/account.json";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getCookie } from "@/utils/cookies";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useUsers from "@/hooks/useUsers";

// interface User {
//   _id: string;
//   nombre: string;
//   apellido: string;
//   email: string;
//   password: string;
//   telefono: number;
//   fechaNacimiento: Date;
//   domicilio: string;
//   localidad: string;
//   pais: string;
// }

const Account: React.FC = () => {
  const { getUserData } = useUsers();
  const [data, setData] = useState();
  const { data: session } = useSession();
  const [jsonWebToken, setJsonWebToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const validate = async () => {
      try {
        const dataUser = await getUserData();
        setData(dataUser);
      } catch (error) {
        alert(error);
      }
    };
    validate();
  }, [getUserData]);

  useEffect(() => {
    const jwt = getCookie("userToken");
    setJsonWebToken(jwt);
    if (!session && !jsonWebToken) {
      router.push("/");
    }
  }, [jsonWebToken, router, session]);

  return (
    <section className="container mx-5 py-8">
      <div className="mt-16 mb-14 ml-4 text-[#222222] text-3xl">
        <h1>Cuenta</h1>
        <div className="text-lg mt-2 mb-4">
          <span>{data?.nombre}, </span>
          <span>{data?.email} · </span>
          <Link href={` /account-settings/${data?._id}`}>Ir al perfil</Link>
        </div>
      </div>
      <div className="flex items-center md:justify-between justify-center flex-wrap px-2">
        {account.account.map((item) => (
          <div key={item.title} className="my-2 p-4 w-96 rounded-xl shadow-lg">
            <div>
              <Image
                className="block mb-4"
                width={32}
                height={32}
                src={item.URLImage}
                alt={item.title}
              />
            </div>
            <div>
              <div className="text-[#222222] text-base mb-2">{item.title}</div>
              <div className="text-[#717171] text-sm">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Account;
