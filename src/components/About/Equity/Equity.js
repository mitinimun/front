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

          <div className="flex justify-center pb-16">
            <div className="container">
              <div className="grid grids-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
                {/* Sid */}
                <div className="pb-10">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/fCfSqQ7/SIDDHANT-LAMA.jpg"
                      className="mx-auto h-[80%] w-[80%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-2 p-3">
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

                {/* Suchit */}
                <div className="pb-10">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/7g4tMwT/SUCHIT.jpg"
                      className="mx-auto h-[80%] w-[80%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-2 p-3">
                    <h1 className="line-clamp-1 font-semibold text-2xl font-serif text-neutral-700">
                      Suchit Adhikari
                    </h1>
                    <p className=" font-serif text-neutral-700">
                      Meet Suchit Adhikari, one of our MUN’s equity officers,
                      with the goal to serve liberty among people. With his big
                      heart and his meticulousness , he is ready to tackle any
                      issues as prime Maldini would on a football pitch. Turning
                      tense moments into laughing fits, he can become the candle
                      that brightens up a gloomy room. Also a self-proclaimed
                      'Fifa legend', he is always ready to face any challenger,
                      whether on or off the pitch.
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

/*
Introducing Siddhant Lama, our equity hero! Standing tall
                      at 6 feet, he is someone who not just dominates the court
                      with his basketball skills but also is a beacon of justice
                      and inclusivity in Mitini MUN! Whether he's rooting for
                      Man United or channelling his inner Kobe Bryant, Siddhant
                      has an infectious energy and social flair which is sure to
                      make you all feel like real MVPs– as long as you adhere to
                      the rules of the MUN!
*/

export default Equity;
