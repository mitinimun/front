import React from "react";
import Footer from "../../Footer/Footer";

const Photo = () => {
  return (
    <>
      <div className="pt-28 md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
          <h2 className="text-4xl text-neutral-700 font-semibold pb-10">
            The Photographers
          </h2>

          <div className="flex justify-center pb-16">
            <div className="container">
              <div className="grid grids-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
                {/* Suyog */}
                <div className="pb-10">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/y8J1CmX/SUYOG-P.jpg"
                      className="mx-auto h-[80%] w-[80%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-2 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Suyog Acharya
                    </h1>
                    <p className="font-serif text-neutral-700">
                      Meet Suyog, an aspiring photographer with a passion for
                      capturing the beauty of landscapes. With a keen eye for
                      detail and a knack for storytelling, Suyog delves into
                      portrait photography, bringing out the essence of
                      individuals through his lens. Additionally, he thrives in
                      the dynamic environment of events, skillfully documenting
                      moments that unfold into unforgettable memories. Through
                      his diverse portfolio, Suyog aims to showcase the artistry
                      and emotion found in every scene, painting a vivid picture
                      of the world through his photography.
                    </p>
                  </div>
                </div>

                {/* Yatra */}
                <div className="pb-10">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/dJYv2Pw/yatra.jpg"
                      className="mx-auto h-[80%] w-[80%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-2 p-3">
                    <h1 className="line-clamp-1 font-semibold text-2xl font-serif text-neutral-700">
                      Yatra K.C
                    </h1>
                    <p className=" font-serif text-neutral-700">
                      Yatra's life is like a kaleidoscope of passion, from
                      photography and hiking to sports and academics , each of
                      her interests adds vibrance to her diverse and colorful
                      world. Having a Yatra in your life is like having a safe
                      harbor in a storm, you can always count on her. Her
                      curiosity is like a cat with nine lives-always landing on
                      its feet , ready to uncover the new adventure. So, next
                      time you meet her, if there’s a ‘Dr.’ before her name,
                      don’t bat an eye; who knows what might have intrigued her.
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

export default Photo;
