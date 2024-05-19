import React from "react";
import Footer from "../../Footer/Footer";

const SecGen = () => {
  return (
    <>
      <div className="pt-28 md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
          <h2 className="text-4xl text-neutral-700 font-semibold pb-10">
            The Secretariats
          </h2>

          <div className="flex justify-center pb-16">
            <div className="container">
              <div className="grid grids-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
                {/* Vedant */}
                <div className="pb-10">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/c3h7RdJ/vedant-3.jpg"
                      className="mx-auto h-[80%] w-[80%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-2 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Vedant Singh Thakuri
                    </h1>
                    <p className="font-serif text-neutral-700">
                      Vedant? He's the one you can count on— a sharp intellect
                      driven by his boundless ambition, poised to be
                      distinguished wherever he goes . A guy whose heart races
                      for football and cars, whether he’s defining brexit on the
                      pitch or revving his engine on them open roads.This
                      adrenaline chaser takes risks that no one has the guts to
                      and will push the boundaries of what's thrilling and
                      exhilarating.Though he may appear enigmatic at first,
                      delve deeper and you will realize he won’t stop talking.
                      PS: Do not be surprised if you see Vedant on the top of
                      the Forbes list cruising in his f40.
                    </p>
                  </div>
                </div>

                {/* Vashwan */}
                <div className="pb-10">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/ScgNxjR/VASHWAN-1.jpg"
                      className="mx-auto h-[80%] w-[80%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-2 p-3">
                    <h1 className="line-clamp-1 font-semibold text-2xl font-serif text-neutral-700">
                      Vashwan Pandey
                    </h1>
                    <p className=" font-serif text-neutral-700">
                      A teacher once told Vashwan’s father, “You’re lucky to
                      have him as your son”, and if that doesn’t convince you of
                      his brilliance, I don’t know what will. Vashwan Pandey is
                      an individual hard to forget. He’s the face everyone looks
                      for in an unfamiliar crowd, and the most passionate person
                      you will come across. He has the gift-of-the-gab, making
                      him perfect as Mitini MUN’s Secretary General. And
                      although he might spend 90% of a conversation explaining
                      to you all about waves & particles, he’s so good at
                      everything he does that by the end of it, you’ll feel like
                      Einstein.{" "}
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

export default SecGen;
