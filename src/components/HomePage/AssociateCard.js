import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const AssociateCard = ({ Img, title, location, description, price, type }) => {
  return (
    <>
    <div className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer pb-5">
      <div className="overflow-hidden">
        <img
          src={Img}
          alt=""
          className="max-h-[751px] h-[50%] w-[100%]"
        />
      </div>
      <div className="space-y-2 p-3 pt-2">
        <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
      </div>
    </div>
    </>
  );
};

export default AssociateCard;
