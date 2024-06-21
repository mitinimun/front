import React from "react";
import SponsorCard from "./SponsorCard";
import AssociateCard from "./AssociateCard";

const Sponsors = () => {
  const SponsorsData = [
    {
      img: "https://i.ibb.co/kgVy89J/Sponsors-2.png",
      title: "Ghimire & Company Pvt. Ltd.",
      description:
        "We are thankful for one of the top Law Firms in Kathmandu, Ghimire & Company Pvt. Ltd. for their generous contribution.",
    },
    {
      img: "https://i.ibb.co/b7BhVdd/nabile.png",
      title: "Nabil Bank",
      description:
        "We express our gratitude towards Nabil Bank, the first private commercial bank in Nepal for their contribution in this cause.",
    },
    {
      img: "https://i.ibb.co/sRBFrNS/Whats-App-Image-2024-05-06-at-16-51-04-4f4703ad-removebg-preview.png",
      title: "Solu Hydropower Limited",
      description:
        "We are thankful to Solu Hydropower Limited for sponsoring us in this cause.",
    },
  ];

  const AssociateData = [
    {
      img: "https://i.ibb.co/1nFcdtN/sunflow.png",
      title: "Sunflow",
      description: "Swastik adhfjadlkfjadlkfjalkdjf;lakdf",
    },
    {
      img: "https://i.ibb.co/Yb1t48h/jimbu.png",
      title: "Jimbu Thakali",
      description:
        "kljadklfjalk;dfj;lakdjf;lkadjfl;kad fjadlkfjadl;kfjad flkadjf;ladkjf;lasdkjf;lks",
    },
    {
      img: "https://i.ibb.co/8gcCGck/Cooter-Ad2-removebg-preview.png",
      title: "COOTER",
      description: "akldjf;lakdjf;lakdjf;alkdjf;lkasdf",
    },
    {
      img: "https://i.ibb.co/KVYZMHJ/Whats-App-Image-2024-05-10-at-17-27-30-e8352a1b-removebg-preview.png",
      title: "Kathmandu Alliance Education",
      description:
        "ad;lfkjasd;lkfja;ldkjf;alkdjf;ld fjakldjf;lakdjf;lkadjfl;ka sdfjalk;djf;ladjf",
    },
    {
      img: "https://i.ibb.co/GFKTv4K/67689873-8458-46b5-8214-28914bce455e.jpg",
      title: "Sabitri International Nepal",
      description:
        "ad;lfkjasd;lkfja;ldkjf;alkdjf;ld fjakldjf;lakdjf;lkadjfl;ka sdfjalk;djf;ladjf",
    },
  ];

  const SupportingData = [
    {
      img: "https://i.ibb.co/VxX5cDJ/pran.png",
      title: "Pran"
    }
  ]

  return (
    <div className="md:px-16 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutral-500 font-semibold mb-2">
          Our Sponsors
        </h2>
        <p className="text-neutral-500">
          We are thankful for your support in this cause.
        </p>
        {/* company logos */}
        <div className="flex justify-center pb-16">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {SponsorsData.map((item, index) => (
                <SponsorCard key={index} Img={item.img} {...item} />
              ))}
            </div>
          </div>
        </div>

        
        <h2 className="text-4xl text-neutral-500 font-semibold pb-7">
          Our Associate Sponsors
        </h2>
        <div className="flex justify-center pb-16">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {AssociateData.map((item, index) => (
                <AssociateCard key={index} Img={item.img} {...item} />
              ))}
            </div>
          </div>
        </div>


        <h2 className="text-4xl text-neutral-500 font-semibold pb-7">
          Our Supporting Sponsor
        </h2>
        <div className="flex justify-center pb-10">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              <div></div>
              <div></div>
              {SupportingData.map((item, index) => (
                <AssociateCard key={index} Img={item.img} {...item} />
              ))}
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

// import React from "react";
// import SponsorCard from "./SponsorCard";
// import AssociateCardc from "./AssociateCard";
// import AssociateCard from "./AssociateCard";

// const SponsorsData = [
//   {
//     img: "https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/184652791_3525640177535488_2983022900384773846_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vqTmLq5q5NMAb7DqSSD&_nc_ht=scontent.fktm3-1.fna&oh=00_AfBY7oG5uIbdlQRX4BL0JVCQWo7rnyTO_oWLHBEWk1rkEQ&oe=6656D4A6",
//     title: "Nabil Bank",
//     location: "USA",
//     description: "Nabil bankdfhadjflkadjf;lakdjf;lakdjf;alksdjf;alksdjfs",
//     price: 100,
//     type: "Cultural Relax",
//   },
//   {
//     img: "Img2",
//     title: "Ghimire & Company Pvt. Ltd.",
//     location: "India",
//     description: "Heloo ahdfhakldjfladmfldjf akdjflkadjfajfoelakd",
//     price: 6700,
//     type: "Cultural Relax",
//   },
//   {
//     img: "Img3",
//     title: "Solu Hydropower Limited",
//     location: "India",
//     description:
//       "lkjadf;lakjdfadj fklasdfkladsjfklasdj faskdlf ladkjfahfefnalks",
//     price: 6700,
//     type: "Cultural Relax",
//   },
// ];

// const Sponsors = () => {
//   return (
//     <div className="bg-gray-50 py-10 pl-8">
//       <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
//         Our Sponsors
//       </h1>
//       <div className="flex justify-center">
//         <div className="container">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {SponsorsData.map((item, index) => (
//               <SponsorCard key={index} Img={item.img} {...item} />
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Associate */}
//       <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
//         Our Associate Sponsors
//       </h1>
//       <div className="flex justify-center">
//         <div className="container">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {AssociateData.map((item, index) => (
//               <AssociateCard key={index} Img={item.img} {...item} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sponsors;
