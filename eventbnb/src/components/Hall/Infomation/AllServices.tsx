import {
  EventHallContext,
  IEventHallProvider,
} from "@/context/EventHallProvider";
import React, { useContext } from "react";
import ServiceItem from "./ServiceItem";

const AllServices = () => {
  const { services } = useContext(EventHallContext) as IEventHallProvider;

  if (!services) return null;

  return (
    <div className="py-7">
      <h6 className="font-medium text-xl pb-5">Lo que este lugar ofrece</h6>
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((service) => (
          <ServiceItem service={service} key={service.type} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
