import React, { useState } from "react";
import {
  FaHotel,
  FaLocationDot,
  FaMap,
  FaPlane,
  FaUtensils,
} from "react-icons/fa6";

const ChipButton: React.FC<{ labelName: string }> = ({ labelName }) => {
  const [choosen, setChoosen] = useState(false);
  return (
    <button
      className={
        choosen
          ? "flex flex-row items-center gap-2 border border-green-400 p-1.5 rounded-md bg-green-400"
          : "flex flex-row items-center gap-2 border p-1.5 rounded-md"
      }
      onClick={() => setChoosen(!choosen)}
    >
      <span className={choosen ? "text-white text-lg" : "text-black text-lg"}>
        {labelName}
      </span>
      {labelName === "Vehicle" && (
        <FaPlane size={20} className={choosen ? "text-white" : "text-black"} />
      )}
      {labelName === "Culinary" && (
        <FaUtensils
          size={20}
          className={choosen ? "text-white" : "text-black"}
        />
      )}
      {labelName === "Hotel" && (
        <FaHotel size={20} className={choosen ? "text-white" : "text-black"} />
      )}
      {labelName === "Best places" && (
        <FaLocationDot
          size={20}
          className={choosen ? "text-white" : "text-black"}
        />
      )}
      {labelName === "Whole trip" && (
        <FaMap size={20} className={choosen ? "text-white" : "text-black"} />
      )}
    </button>
  );
};

export default ChipButton;
