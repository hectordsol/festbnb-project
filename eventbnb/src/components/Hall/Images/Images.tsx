"use client";
import React, { useContext } from "react";
import Image from "next/image";
import {
  EventHallContext,
  IEventHallProvider,
} from "@/context/EventHallProvider";
import { IWindowsSize, WindowSizeContext } from "@/context/WindowSizeProvider";

const Images = () => {
  const { windowWidth } = useContext(WindowSizeContext) as IWindowsSize;
  const { eventHall } = useContext(EventHallContext) as IEventHallProvider;

  if (!eventHall) return null;
  if (windowWidth < 768) return null;

  const { imagenes } = eventHall;

  return (
    <div className="pt-5">
      <section className="grid grid-cols-4 gap-3 grid-rows-2">
        <Image
          src={imagenes[0]}
          width={800}
          height={600}
          className="object-cover col-span-2 row-span-2 w-full h-full rounded-l-xl"
          alt={eventHall.nombre}
        />
        <Image
          src={imagenes[1]}
          width={800}
          height={600}
          className="object-cover w-full h-full"
          alt={eventHall.nombre}
        />
        <Image
          src={imagenes[2]}
          width={800}
          height={600}
          className="object-cover w-full h-full rounded-tr-xl"
          alt={eventHall.nombre}
        />
        <Image
          src={imagenes[2]}
          width={800}
          height={600}
          className="object-cover w-full h-full"
          alt={eventHall.nombre}
        />
        <Image
          src={imagenes[2]}
          width={800}
          height={600}
          className="object-cover w-full h-full rounded-br-xl"
          alt={eventHall.nombre}
        />
      </section>
    </div>
  );
};

export default Images;
