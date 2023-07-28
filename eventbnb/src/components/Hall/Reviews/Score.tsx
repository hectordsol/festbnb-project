import React from "react";

const Score = () => {
  return (
    <div className="flex items-center">
      <span className="block w-full">Limpieza</span>
      <div className="flex items-center gap-2">
        <span
          className="block h-1 bg-black"
          style={{ minWidth: "140px" }}
        ></span>
        <span className="font-medium">5.0</span>
      </div>
    </div>
  );
};

export default Score;
