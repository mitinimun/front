import React from "react";
import Footer from "../../Footer/Footer";

const Equity = () => {
  return (
    <>
      <div className="pt-28 md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
          <h2 className="text-4xl text-neutral-700 font-semibold pb-10">
            The Equity Officer
          </h2>

          <div className="flex justify-center">
            <div className="container">
              <div className="md:flex flex-row hidden">
                <div className="basis-1/4"></div>
                <div className="pb-10 basis-1/2">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/1RdgtN3/SIDDHANT-1.jpg"
                      className="mx-auto h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Siddhant Lama
                    </h1>
                    <p className="font-serif text-neutral-700">
                      Introducing Siddhant Lama, our equity hero! Standing tall
                      at 6 feet, he is someone who not just dominates the court
                      with his basketball skills but also is a beacon of justice
                      and inclusivity in Mitini MUN! Whether he's rooting for
                      Man United or channelling his inner Kobe Bryant, Siddhant
                      has an infectious energy and social flair which is sure to
                      make you all feel like real MVPs– as long as you adhere to
                      the rules of the MUN!
                    </p>
                  </div>
                </div>
                <div className="basis-1/4"></div>
              </div>

              {/* small */}
              <div className="md:hidden flex flex-row ">
                <div className="pb-10 grid grid-cols-1">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/1RdgtN3/SIDDHANT-1.jpg"
                      className="mx-auto h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Siddhant Lama
                    </h1>
                    <p className="font-serif text-neutral-700">
                      Introducing Siddhant Lama, our equity hero! Standing tall
                      at 6 feet, he is someone who not just dominates the court
                      with his basketball skills but also is a beacon of justice
                      and inclusivity in Mitini MUN! Whether he's rooting for
                      Man United or channelling his inner Kobe Bryant, Siddhant
                      has an infectious energy and social flair which is sure to
                      make you all feel like real MVPs– as long as you adhere to
                      the rules of the MUN!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Equity;
