import React from "react";
import Score from "../Reviews/Score";

const Scores = () => {
  return (
    <div className="flex flex-col gap-2 mx-4 md:mx-0 border-2 md:border-0 rounded-lg py-2 px-4 md:px-0 md:py-0 mb-4 md:mb-0">
      {/* puntaje */}
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className="pb-2" key={item}>
          <Score />
        </div>
      ))}
    </div>
  );
};

export default Scores;
