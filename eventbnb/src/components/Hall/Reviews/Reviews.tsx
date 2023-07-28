"use client";
import React, { useContext } from "react";

import { FaStar } from "react-icons/fa";
import Scores from "./Scores";
import UsersReviews from "./UsersReviews";
import {
  EventHallContext,
  IEventHallProvider,
} from "@/context/EventHallProvider";

const Reviews = () => {
  const { reviews } = useContext(EventHallContext) as IEventHallProvider;

  if (!reviews) return null;

  return (
    <section>
      {/* cabecera */}
      <div className="flex flex-wrap gap-1.5 items-center font-medium text-xl mb-8">
        <span className="flex items-center">
          <FaStar size={16} />{" "}
          <span className="inline-block ml-1">{reviews.score}</span>
        </span>
        ·<span className="flex items-center">{reviews.amount} reseñas</span>
      </div>
      {/* puntaje */}
      {/* <Scores /> */}
      {/* reseñas */}
      <UsersReviews reviews={reviews.data} />
    </section>
  );
};

export default Reviews;
