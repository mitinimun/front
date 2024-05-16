import React from "react";

const Hero = () => {
  const handleRedirect = () => {
    window.location.href = "/register"
  }

  return (
    <div >
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen pb-10">
        <div className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img
                src="https://i.ibb.co/Bg9NCBn/mitini-MUN-logo-Photoroom-png-Photoroom.png"
                alt=""
              />
            </div>

            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutral-500 md:w-3/4 leading-snug">
                Lead global change through{" "}
                <span className="text-mitini">Mitini MUN</span>
              </h1>
              <p className="text-neutral-500 text-base mb-8">
                Dive into global diplomacy and leadership with Mitini Model
                United Nations (MUN). Develop critical skills and shape the
                world's future! Register Now!
              </p>
              <button onClick={handleRedirect} className="btn-primary hover:bg-neutral-500 transition-all duration-300 hover:translate-y-4">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React from "react";
// import mitini from "./mitini.png";

// const Hero = () => {
//   return (
//     <>
//       <main className="bg-white">
//         <div className="container min-h-[620px] flex mt-10 sm:mt-0">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
//             {/* Image section */}
//             <div className="order-1 sm:order-2 relative">
//               <img src="https://i.ibb.co/Yh8R0Yd/mitini-MUN-logo.jpg" alt="" />
//               {/* <div className="bg-white px-4 py-2 rounded-xl shadow-md absolute -bottom-5 -right-8">
//                 <p>  Projects</p>
//                 <h1 className="font-bold">
//                     600+ <span className="font-normal">Done</span>
//                 </h1>
//               </div> */}
//             </div>
//             {/* Text content section */}
//             <div className="space-y-5 order-2 sm:order-1 xl:pr-40 pl-10">
//               <h1 className="text-4xl sm:text-5xl font-semibold">
//                 Lead global change through{" "}
//                 <span className="text-mitini">Mitini MUN</span>
//               </h1>
//               <p>
//                 Dive into global diplomacy and leadership with Mitini Model United
//                 Nations (MUN). Develop critical skills and shape the world's
//                 future! Register Now!
//               </p>
//               <button className="btn-primary">Register</button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Hero;
