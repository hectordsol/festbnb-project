"use client";
import React from "react";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa6";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function Card({ card }) {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);

  const handleButtonClick = (id) => {
    setIsFavorite(!isFavorite);
    setFavorites(prevFavorites => {
      const index = prevFavorites.findIndex(fav => fav._id === id);
      if (index !== -1) {
        return prevFavorites.filter((_, i) => i !== index);
      } else {
        return [...prevFavorites, card];
      }
    });
  };

  React.useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);
  

  React.useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Link
      href={`/event-hall/${card._id}`}
      className={`max-w-[300px] rounded-t-xl bg-white group transition-all duration-300 transform hover:scale-105`}
    >
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="absolute z-0 rounded-xl w-[300px] h-[285px]  hidden"
        >
          {card.imagenes.length &&
            card.imagenes.map((image) => (
              <SwiperSlide key={image}>
                {/* <Image src={src} width={300} height={285} className="w-[300px] h-[285px] object-cover" alt={card.name} /> */}
                <Image
                  src={image}
                  width={300}
                  height={285}
                  className="w-[300px] h-[285px] object-cover"
                  alt={card.name}
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <button
          className="absolute z-10 top-3 right-3 flex items-center justify-center"
          onClick={()=>handleButtonClick(card._id)}
        >
          <FaHeart
            className={`text-xl  ${
              isFavorite ? "text-pink-600" : "text-black opacity-50"
            }`}
          />
          <FaRegHeart className="text-2xl text-white absolute" />
        </button>
        {card.imgProfile ? (
          <Image
            className="rounded-full w-10 h-10 object-cover absolute z-10 bottom-3 left-3"
            src={card.imgProfile}
            alt={card.name}
            width={40}
            height={40}
          />
        ) : null}
      </div>
      <div className="flex flex-row justify-between items-start mt-4 pb-4 px-4">
        <div>
          {card.nombre ? (
            <p className="text-base text-black font-bold">{card.nombre}</p>
          ) : null}
          <p className="text-sm text-black font-bold">
            {card.domicilio
              ? card.domicilio
              : card.localidad
              ? card.localidad
              : null}
            {card.domicilio && card.localidad ? `, ${card.localidad}` : null}
          </p>
          {card.localidad ? (
            <p className="text-sm text-slate-600">{card.localidad}</p>
          ) : null}
          {/* <p className="text-sm text-slate-600">{`${card.startDate} - ${card.endDate} de ${card.month}`}</p> */}
          <p className="text-sm text-black mt-2">
            <strong>{`S/${card.precio}`}</strong> noche
          </p>
        </div>
        {card.rating ? (
          <div className="flex items-center justify-center space-x-1 text-black">
            <FaStar />
            <p className="text-sm">{card.rating}</p>
          </div>
        ) : null}
      </div>

    </Link>
  );
}
