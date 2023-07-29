"use client";
import { Cliente, IEventHall } from "@/interfaces/event-hall.interface";
import EventHallService from "@/services/event-hall.service";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import servicesData, {
  IServicesData,
} from "@/components/Hall/Infomation/servicesData";

// interface
export interface IEventHallProvider {
  eventHall: IEventHall | null;
  services: IServicesData[] | null;
  reviews: IReviews | null;
  disabled: Boolean;
  setDisabled: (disabled: Boolean) => void;//Dispatch<SetStateAction<Boolean>>;
  getEventHall: () => Promise<void>;
  formattedDateReservation: string;
  setFormattedDateReservation: (disabled: string) => void;//Dispatch<SetStateAction<Boolean>>;
  setReserva: (id: string) => void;//Dispatch<SetStateAction<string>>;
  reserva: string;
  getData: () => Promise<void>;
}

export interface IReview {
  cliente: Cliente;
  _id: string;
  comentario: string;
  puntaje: string;
  fecha: string;
}

export interface IReviews {
  score: number;
  amount: number;
  data: IReview[];
}

interface IProps {
  children: React.ReactNode;
  id: string;
}

// creacion contexto
export const EventHallContext = createContext<IEventHallProvider | null>(null);

export const EventHallProvider = ({ children, id }: IProps) => {
  const [eventHall, setEventHall] = useState<IEventHall | null>(null);
  const [services, setServices] = useState<IServicesData[] | null>(null);
  const [reviews, setReviews] = useState<IReviews | null>(null);
  const [disabled, setDisabled] = useState<Boolean>(true)
  const [reserva, setReserva] = useState<string>('')

  const [formattedDateReservation, setFormattedDateReservation] = useState<string>('')
  const router = useRouter();

  const getData = async () : Promise<void> => {
    let data: IEventHall | null = null;

    try {
      data = await EventHallService.getById(id);
    } catch (error) {
      console.log(error);
    }

    if (!data) router.push("/404");
    setEventHall(data);
  };

  const getServices = async () => {
    let allServices: IServicesData[] = servicesData.filter((service) => {
      if (
        eventHall?.baño_accesibilidad &&
        service.type === "baño_accesibilidad"
      ) {
        return true;
      } else if (eventHall?.accesibilidad && service.type === "accesibilidad") {
        return true;
      } else if (
        eventHall?.estacionamiento &&
        service.type === "estacionamiento"
      ) {
        return true;
      } else if (eventHall?.catering && service.type === "catering") {
        return true;
      } else if (eventHall?.mesas_sillas && service.type === "mesas_sillas") {
        return true;
      } else if (eventHall?.luces && service.type === "luces") {
        return true;
      } else if (eventHall?.sonido && service.type === "sonido") {
        return true;
      } else if (eventHall?.fotografia && service.type === "fotografia") {
        return true;
      } else if (eventHall?.decoracion && service.type === "decoracion") {
        return true;
      } else if (eventHall?.pileta && service.type === "pileta") {
        return true;
      } else if (eventHall?.wifi && service.type === "wifi") {
        return true;
      } else if (eventHall?.cocina && service.type === "cocina") {
        return true;
      } else if (eventHall?.escenario && service.type === "escenario") {
        return true;
      } else if (
        eventHall!.aire_acondicionado > 0 &&
        service.type === "aire_acondicionado"
      ) {
        return true;
      } else if (eventHall!.parrilla > 0 && service.type === "parrilla") {
        return true;
      } else if (eventHall!.pantalla > 0 && service.type === "pantalla") {
        return true;
      } else if (
        eventHall!.personal_seguridad > 0 &&
        service.type === "personal_seguridad"
      ) {
        return true;
      }
      return false;
    });

    setServices(allServices);
  };

  const getReviews = async () => {
    const allReviews: IReview[] | undefined = eventHall?.eventos
      .filter((event) => event.review !== null)
      .map((event) => {
        return {
          _id: event.review!._id,
          comentario: event.review!.comentario,
          puntaje: event.review!.puntaje,
          fecha: event.review!.fecha,
          cliente: event.cliente,
        };
      });

    if (!allReviews) return;

    let score = allReviews.reduce(
      (acc, review) => acc + Number(review.puntaje),
      0
    );
    score = score / allReviews.length;

    let amount = allReviews.length;

    const dataReviews: IReviews = {
      score,
      amount,
      data: allReviews,
    };

    setReviews(dataReviews);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (eventHall) {
      getServices();
      getReviews();
    }
  }, [eventHall]);

  return (
    <EventHallContext.Provider
      value={{ eventHall, services, reserva, setReserva, reviews, disabled, setDisabled, formattedDateReservation, setFormattedDateReservation, getEventHall: getData, getData }}
    >
      {children}
    </EventHallContext.Provider>
  );
};
