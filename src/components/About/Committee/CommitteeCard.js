import React from "react";

const CommitteeCard = ({ img, title, description }) => {
  return (
    <div className="pb-10">
      <div className="overflow-hidden">
        <img src={img} className="mx-auto h-[80%] w-[80%]" alt="" />
      </div>
      <div className="space-y-2 p-3">
        <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
          {title}
        </h1>
        <p className="font-serif text-neutral-700">{description}</p>
      </div>
    </div>
  );
};

export default CommitteeCard;
