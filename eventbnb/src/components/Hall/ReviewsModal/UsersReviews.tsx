import React from "react";
import UserReview from "../Reviews/UserReview";
import { IReview } from "@/context/EventHallProvider";

interface IProps {
  reviews: IReview[];
}

const UsersReviews = ({ reviews }: IProps) => {
  return (
    <div>
      {reviews.map((item) => (
        <div className="w-full py-4 px-2 md:p-4" key={item._id}>
          <UserReview inModal={true} review={item} />
        </div>
      ))}
    </div>
  );
};

export default UsersReviews;
