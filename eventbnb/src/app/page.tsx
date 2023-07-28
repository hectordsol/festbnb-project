"use client";
import UsersContext from "@/context/UserProvider";
import { useContext } from "react";
import Cards from "@/components/card/Cards";
import Filter from "@/components/filter/filterSlide/Filter";

const url = process.env.NEXT_PUBLIC_MICROSERVICIOS;

export default function Home() {
  const { list, setList, filteredList, setFilteredList } =
    useContext(UsersContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Filter
        list={list}
        setList={setList}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
      />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Cards list={list} />
      </div>
    </main>
  );
}
