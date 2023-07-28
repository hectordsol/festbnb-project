"use client";
import { IReview } from "@/context/EventHallProvider";
import { IModalProvider, ModalContext } from "@/context/ModalProvider";
import React, { useContext } from "react";
import { MdArrowForwardIos } from "react-icons/md";

interface IUserReview {
  inModal?: boolean;
  review: IReview;
}

const UserReview = ({ inModal = false, review }: IUserReview) => {
  const { open } = useContext(ModalContext) as IModalProvider;

  return (
    <>
      <div className="flex gap-4 items-center mb-3">
        <img
          className="object-cover rounded-full w-10 h-10"
          style={{ minWidth: "40px", minHeight: "40px" }}
          src="https://a0.muscache.com/im/pictures/user/72135e97-1583-4ca4-a8ba-8cdd81827fde.jpg?im_w=240"
          alt="img"
        />
        <div>
          <span className="block text-lg font-medium leading-4">
            {review.cliente.nombre} {review.cliente.apellido}
          </span>
          <span className="text-sm leading-3 text-gray-500">
            {review.fecha}
          </span>
        </div>
      </div>
      <p>{review.comentario}</p>
      {!inModal && (
        <button className="mt-2" onClick={open}>
          <span className="flex items-center underline gap-1">
            <span className="font-medium">Mostrar más</span>
            <MdArrowForwardIos size={13} />
          </span>
        </button>
      )}
    </>
  );
};

export default UserReview;
