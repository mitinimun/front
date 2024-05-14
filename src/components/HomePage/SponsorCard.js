import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const SponsorCard = ({ Img, title, location, description, price, type }) => {
  return (
    <>
    <div className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={Img}
          alt=""
          className="mx-auto h-[100%] w-[100%] "
        />
      </div>
      <div className="space-y-2 p-3">
        <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
        <p className="line-clamp-3">{description}</p>
      </div>
    </div>
    </>
  );
};

export default SponsorCard;
