"use client";
import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { IModalProvider, ModalContext } from "@/context/ModalProvider";
import {
  EventHallContext,
  IEventHallProvider,
} from "@/context/EventHallProvider";

const Header = () => {
  const { open } = useContext(ModalContext) as IModalProvider;
  const { eventHall, reviews } = useContext(
    EventHallContext
  ) as IEventHallProvider;

  if (!eventHall) return null;
  if (!reviews) return null;

  return (
    <section className="py-7 md:py-0 border-b md:border-b-0">
      <h1 className="text-2xl font-medium pb-2 md:pb-0">{eventHall.nombre}</h1>
      <div className="flex justify-between flex-wrap gap-2">
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="flex items-center">
            <FaStar size={15} />{" "}
            <span className="inline-block ml-1 text-sm">{reviews.score}</span>
          </span>
          ·
          <button
            className="flex items-center text-sm underline font-medium"
            onClick={open}
          >
            {reviews.amount} reseñas
          </button>
          ·
          <span className="flex items-center">
            <BsStars size={15} />
            <span className="inline-block ml-1 text-sm">Superanfitrión</span>
          </span>
          ·
          <button className="flex items-center text-sm underline font-medium">
            {eventHall.domicilio}, {eventHall.localidad}, {eventHall.ubicacion}
          </button>
        </div>
        <div className="flex gap-1">
          <button className="flex items-center text-sm hover:bg-gray-100 px-3 py-2 rounded-md transition duration-100 ease-in-out">
            <FiShare size={15} />
            <span className="inline-block ml-1 text-sm underline font-medium">
              Compartir
            </span>
          </button>
          <button className="flex items-center text-sm hover:bg-gray-100 px-3 py-2 rounded-md transition duration-100 ease-in-out">
            <BsHeart size={15} />
            <span className="inline-block ml-1 text-sm underline font-medium">
              Guardar
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
