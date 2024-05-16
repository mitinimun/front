import React from "react";
import OCcard from "./OCcard";
import Footer from "../Footer/Footer";

const OC = () => {
  const SecGenData = [
    {
      img: "https://i.ibb.co/0nfYDCP/SECRET.jpg",
      title: "The Secretariats",
      description:
        "Meet our inspiring MUN Secretary-Generals, Vedant and Vashwan, leading us to a remarkable conference experience!",
      link: "/secgen",
    },
  ];

  const OtherData1 = [
    {
      img: "https://i.ibb.co/NYY00pJ/LOGI.jpg",
      title: "The Logistics Team",
      description:
        "Say hello to our efficient Logistics Team for this Model United Nations (MUN) conference. They're the backbone of our operations, ensuring smooth and seamless proceedings throughout!",
      link: "/logi",
    },
    {
      img: "https://i.ibb.co/fS6dxBn/marketing.jpg",
      title: "The Marketing Team",
      description:
        "Meet our stellar Marketing Team! The innovative behind-the-scene strategists who have been building an outstanding digital image of Mitini MUN.",
      link: "/marketing",
    },
    {
      img: "https://i.ibb.co/4fbNgV2/communications.jpg",
      title: "The Communications Team",
      description:
        "Introducing our vital Communications Team for this Model United Nations (MUN) conference. They ensure a smooth and engaging experience for all!",
      link: "/comms",
    },
    {
      img: "https://i.ibb.co/C6WfTCp/DEL-AFF.jpg",
      title: "The Delegate Affairs Team",
      description:
        "Introducing our dedicated Delegate Affairs Team for this MUN conference. With their unwavering support, every delegate's journey will be impactful and rewarding!",
      link: "/daffairs",
    },
    {
      img: "https://i.ibb.co/bJ5V97g/PHOTO.jpg",
      title: "The Photography Team",
      description:
        "Say hello to our talented photographers capturing every moment of this Model United Nations (MUN) conference. Their lens will bring our event to life!",
      link: "/photo",
    },
    {
      img: "https://i.ibb.co/YhYQ2Tr/SIDDHANT.jpg",
      title: "The Equity Officers Team",
      description:
        "Meet our Equity Officers for this Model United Nations (MUN) conference. They ensure fairness and inclusivity, creating a welcoming environment for all participants.",
      link: "/equity",
    },
  ];

  return (
    <>
      <div className="pt-28 md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
          <h2 className="text-4xl text-neutral-700 font-semibold mb-2">
            The Organizing Committee
          </h2>
          <p className="text-neutral-500 pb-20">
            Introducing our exceptional organizing committee members who have
            poured their heart and soul into making this event a reality. Let's
            celebrate their dedication and hard work!
          </p>
          {/* Secretary Generals */}
          <div className="md:flex justify-center pb-16 hidden">
            <div className="container">
              <div className="md:flex flex-row pb-16">
                <div className="basis-1/4"></div>
                {SecGenData.map((item, index) => (
                  <OCcard key={index} img={item.img} {...item} />
                ))}
                <div className="basis-1/4"></div>
              </div>
            </div>
          </div>

          <div className="md:hidden flex justify-center pb-16">
            <div className="container">
              <div className="grid grid-cols-1">
                {SecGenData.map((item, index) => (
                  <OCcard key={index} img={item.img} {...item} />
                ))}
              </div>
            </div>
          </div>

          {/* Remaining */}
          <div className="flex justify-center pb-16">
            <div className="container">
              <div className="grid grids-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16">
                {OtherData1.map((item, index) => (
                  <OCcard key={index} img={item.img} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OC;
