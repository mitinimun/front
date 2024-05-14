import React from "react";
import banner from "./banner.jpg";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };

  return (
    <div data-aos="zoom-in" style={bgImage} className="h-[400px] w-full mb-10"></div>
  );
};

export default Banner;
