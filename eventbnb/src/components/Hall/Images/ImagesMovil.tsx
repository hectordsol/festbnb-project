"use client";
import {
  EventHallContext,
  IEventHallProvider,
} from "@/context/EventHallProvider";
import { IWindowsSize, WindowSizeContext } from "@/context/WindowSizeProvider";
import Image from "next/image";
import React, { useContext } from "react";

const ImagesMovil = () => {
  const { windowWidth } = useContext(WindowSizeContext) as IWindowsSize;
  const { eventHall } = useContext(EventHallContext) as IEventHallProvider;

  if (!eventHall) return null;
  if (windowWidth >= 768) return null;

  const { imagenes } = eventHall;

  return (
    <div>
      <Image
        src={imagenes[0]}
        width={800}
        height={600}
        className="object-cover w-full h-full"
        alt={eventHall.nombre}
      />
    </div>
  );
};

export default ImagesMovil;
