import React from "react";
import { GiAtSea } from "react-icons/gi";
import { IServicesData } from "./servicesData";

interface IProps {
  service: IServicesData;
}

const ServiceItem = ({ service }: IProps) => {
  return (
    <div className="flex gap-3 items-center">
      <div style={{ maxWidth: "25px" }}>{service.icon}</div>
      <p>{service.value}</p>
    </div>
  );
};

export default ServiceItem;
