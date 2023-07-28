"use client";


import Cards from "@/components/card/Cards";
import { useEffect, useState } from "react";

const Page = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));

    if (storedFavorites) {
      setList(storedFavorites);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {list.length ? <Cards list={list} /> : <p>Aun no tienes favoritos</p>}
      </div>
    </main>
  );
};

export default Page;
