import React from "react";
import Score from "./Score";

const Scores = () => {
  return (
    <div className="hidden md:grid grid-cols-2 gap-2 mb-8">
      {/* puntaje */}
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className="pr-28" key={item}>
          <Score />
        </div>
      ))}
    </div>
  );
};

export default Scores;
