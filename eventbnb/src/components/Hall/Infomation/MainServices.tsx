import React, { useContext } from "react";
import { HiWifi } from "react-icons/hi";
import { BsDoorClosed } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import Calendar from "./Calendar";
import {
  EventHallContext,
  IEventHallProvider,
} from "@/context/EventHallProvider";
import ServiceMainItem from "./ServiceMainItem";

const MainServices = ({ id, clientId }) => {
  const { services } = useContext(EventHallContext) as IEventHallProvider;

  if (!services) return null;

  const mainServices = services.slice(0, 3);

  return (
    <div className=" flex flex-col py-7 border-b gap-4">
      {mainServices.map((service) => (
        <ServiceMainItem service={service} key={service.type} />
      ))}
      <Calendar id={id} clientId={clientId} />
    </div>
  );
};

export default MainServices;
