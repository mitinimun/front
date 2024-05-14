import React from "react";

const OCcard = ({ title, img, description, link }) => {

  const redirect = () => {
    window.location.href = `${link}`;
  }

  return (
    <>
      <div onClick={redirect} className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer rounded pb-10 basis-1/2">
        <div className="overflow-hidden">
          <img src={img} alt="" className="mx-auto h-[70%] w-[70%]" />
        </div>
        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-semibold text-xl font-sans">{title}</h1>
          <p className="line-clamp-3 font-sans">{description}</p>
        </div>
      </div>
    </>
  );
};

export default OCcard;
