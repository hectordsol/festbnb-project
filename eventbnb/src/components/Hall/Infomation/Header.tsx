import { IEventHall } from "@/interfaces/event-hall.interface";
import React from "react";

interface IProps {
  eventHall: IEventHall;
}

const Header = ({ eventHall }: IProps) => {
  return (
    <div className="py-7 md:pt-10 md:pb-5 flex justify-between border-b">
      <div>
        <h3 className="text-xl font-medium">
          Gran Salon con servicios incluidos - Anfitrión: Rossy
        </h3>
        <p>
          <span>{eventHall.capacidad_max} capacidad</span> ·{" "}
          <span>{eventHall.superficie} de superficie</span> ·{" "}
          <span>{eventHall.baño} baños</span> ·{" "}
          <span>{eventHall.personal_seguridad} seguridad</span>
        </p>
      </div>
      <div>
        <img
          className="object-cover rounded-full w-12 h-12"
          style={{ minWidth: "48px", minHeight: "48px" }}
          src="https://a0.muscache.com/im/pictures/user/72135e97-1583-4ca4-a8ba-8cdd81827fde.jpg?im_w=240"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Header;
