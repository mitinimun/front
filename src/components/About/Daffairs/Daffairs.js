import React from "react";
import Footer from "../../Footer/Footer";

const Daffairs = () => {
  return (
    <>
      <div className="pt-28 md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
          <h2 className="text-4xl text-neutral-700 font-semibold pb-6">
            The Delegate Affairs Team
          </h2>

          <h3 className="text-neutral-700 font-semibold pb-6">The Head</h3>

          <div className="flex justify-center">
            <div className="container">
              <div className="md:flex flex-row pb-16 hidden">
                <div className="basis-1/4"></div>
                <div className="pb-10 basis-1/2">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/gF5prvW/ABHILOKEET.jpg"
                      className="mx-auto h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Abhilokeet Sherchan
                    </h1>
                    <p className="font-serif text-neutral-700">
                      Introducing Abhilokeet, the epitome of fun and goodness!
                      With a smile that brightens rooms and a good heart,
                      Abhilokeet is everyone's favorite person to be around.
                      He's always up for a good time, whether it's cracking
                      jokes, exploring new places, or simply lending a listening
                      ear to friends in need. His positivity and genuine caring
                      nature make him a true joy to know and befriend.
                    </p>
                  </div>
                </div>
                <div className="basis-1/4"></div>
              </div>

              {/* small */}
              <div className="md:hidden flex flex-row pb-16">
                <div className="pb-10 grid grid-cols-1">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/gF5prvW/ABHILOKEET.jpg"
                      className="mx-auto h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Abhilokeet Sherchan
                    </h1>
                    <p className="font-serif text-neutral-700">
                      Introducing Abhilokeet, the epitome of fun and goodness!
                      With a smile that brightens rooms and a good heart,
                      Abhilokeet is everyone's favorite person to be around.
                      He's always up for a good time, whether it's cracking
                      jokes, exploring new places, or simply lending a listening
                      ear to friends in need. His positivity and genuine caring
                      nature make him a true joy to know and befriend.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grids-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16">
                <div className="">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/G7FT6TV/BHAVYA.jpg"
                      className="mx-auto h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Bhavya Neupane
                    </h1>
                    <p className="font-serif text-neutral-700">
                      Bhavya is someone who radiates a warmth that instantly
                      puts those around her at ease. Her infectious laugh fills
                      any room, she embraces individuality with confidence.
                      Whether it is a thoughtful conversation about the meaning
                      of life gets lost in a passionate debate about the
                      placement of pineapples on pizza, Bhavya approaches life
                      with a contagious enthusiasm that makes even the mundane
                      seem exciting. Ps. The right answer is pineapple doesn't
                      belong on pizza (not debatable).
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/BVcWY29/BINISHA.jpg"
                      className="mx-auto h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Binisha Thapaliya
                    </h1>
                    <p className="font-serif text-neutral-700">
                      Binisha is a living paradox of sweet and sass. From
                      discussing global affairs to dancing along to her eclectic
                      music collection to collecting hello kitty merch and
                      trinkets , she’s got both ends of a spectrum covered. From
                      Binisha’s rose tinted view of the world, pink reigns
                      supreme, cuteness knows no bounds, and debates are a
                      spectator sport. With a personality as effervescent as a
                      shaken soda and a love for all things adorable is enough
                      to make even the toughest critic swoon. And with a heart
                      as big as her love for pink, she’s always there to lend an
                      ear or offer a well-timed quip. So, if you’re in need of a
                      pick-me-up or a dose of laughter, just look for the girl
                      with the pink accessories and the witty retort—chances
                      are, you’ve found Binisha.
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

export default Daffairs;
