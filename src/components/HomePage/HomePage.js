import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/context";
import Hero from "./Hero";
import Sponsors from "./Sponsors";
import Banner from "./Banner";
import Footer from "../Footer/Footer";

const HomePage = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Hero />
      </div>
      <Sponsors />
      <Banner />
      <Footer />
    </div>
  );
};

export default HomePage;
