import React from "react";
import Footer from "../../Footer/Footer";

const Logi = () => {
  return (
    <>
      <div className="pt-28 md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
          <h2 className="text-4xl text-neutral-700 font-semibold pb-6">
            The Logistics Team
          </h2>

          <h3 className="text-neutral-700 font-semibold pb-6">The Head</h3>

          <div className="flex justify-center">
            <div className="container">
              <div className="md:flex flex-row pb-16 hidden">
                <div className="basis-1/4"></div>
                <div className="pb-10 basis-1/2">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/ZW3tkRT/MESHNA-1.jpg"
                      className="mx-auto h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Meshna Bhattarai
                    </h1>
                    <p className="font-serif text-neutral-700">
                      There is a little bit of Meshna in everybody she’s ever
                      met. She has a profound impact on people around her,
                      leaving a mark everywhere she goes. She’s a bottomless
                      reservoir of knowledge, and she’ll willingly put all her
                      troubles aside to help you with yours, being the
                      problem-solver that she is (yes, she is the definition of
                      a GirlBoss). Meshna’s teacher calls her “outstanding” so
                      often that the phrase has now become synonymous with her
                      name. Empathetic and hardworking, there is no doubt about
                      her being a Gryffindor, making her the perfect fit for
                      Head of Logi. PSA: If you want to get on her good side
                      (trust me, you do), just bring her some cheese popcorn.
                    </p>
                  </div>
                </div>
                <div className="basis-1/4"></div>
              </div>

              {/*small */}
              <div className="md:hidden flex flex-row pb-16">
                <div className="grid grid-cols-1 pb-10">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/ZW3tkRT/MESHNA-1.jpg"
                      className="mx-auto h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Meshna Bhattarai
                    </h1>
                    <p className="font-serif text-neutral-700">
                      There is a little bit of Meshna in everybody she’s ever
                      met. She has a profound impact on people around her,
                      leaving a mark everywhere she goes. She’s a bottomless
                      reservoir of knowledge, and she’ll willingly put all her
                      troubles aside to help you with yours, being the
                      problem-solver that she is (yes, she is the definition of
                      a GirlBoss). Meshna’s teacher calls her “outstanding” so
                      often that the phrase has now become synonymous with her
                      name. Empathetic and hardworking, there is no doubt about
                      her being a Gryffindor, making her the perfect fit for
                      Head of Logi. PSA: If you want to get on her good side
                      (trust me, you do), just bring her some cheese popcorn.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grids-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16">
                <div className="">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/pbC6zbF/RAJAVI-1.jpg"
                      className="mx-auto h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Rajavi Shrestha
                    </h1>
                    <p className="font-serif text-neutral-700">
                      Everyone needs at least one Rajavi in their life.
                      Synonymous with excellence, Rajavi Shrestha is a
                      once-in-a-lifetime person. She balances every aspect of
                      her life so perfectly (while still managing to learn one
                      song per year on the ukulele!), that it makes those around
                      her wonder if she has a secret weapon that we don’t. That
                      is a testament to her hard-work and strength. A litany of
                      positive words are not enough to encapsulate Raju, so I’ll
                      just stick to one piece of advice: Befriend her, she is an
                      absolute joy to know (as long as she’s not too busy
                      getting red as a literal tomato laughing at her own joke).
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/gzk4jKV/ADWAIT-1.jpg"
                      className="mx-auto h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Adwait Thapa
                    </h1>
                    <p className="font-serif text-neutral-700">
                      Adwait’s reputation is constantly two miles ahead of him.
                      Everyone knows him, and everyone loves him. He exudes a
                      charm that effortlessly draws people in (he didn’t get the
                      ‘Ladies-Man’ title for no reason), and makes sure to keep
                      the laughter rolling in whatever crowd he’s in (mostly
                      because his jokes are so bad that they’re almost good).
                      The epitome of heart-of-gold, Adwait Thapa is easily one
                      of the most generous and kind people you will have the joy
                      of crossing paths with. So, if you’re not already his
                      friend (unlikely), go to his instagram and solve that.
                      Word of advice: He’ll reply 2x faster if you say something
                      about Ferrari being the best F1 team.
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

export default Logi;
