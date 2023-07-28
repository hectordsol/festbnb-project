import React from "react";
import { IServicesData } from "./servicesData";

interface IProps {
  service: IServicesData;
}

const ServiceMainItem = ({ service }: IProps) => {
  return (
    <div className="flex gap-3 items-center">
      <div style={{ maxWidth: "25px" }}>{service.icon}</div>
      <div>
        <h6 className="font-medium pb-1">{service.value}</h6>
      </div>
    </div>
  );
};

export default ServiceMainItem;
