import React from "react";
import Footer from "../../Footer/Footer";

const Comms = () => {
  return (
    <>
      <div className="pt-28 md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
          <h2 className="text-4xl text-neutral-700 font-semibold pb-6">
            The Communications Team
          </h2>

          <h3 className="text-neutral-700 font-semibold pb-6">The Head</h3>

          <div className="flex justify-center">
            <div className="container">
              <div className="md:flex flex-row pb-6 hidden">
                <div className="basis-1/4"></div>
                <div className="basis-1/2">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/wcTCR0p/SUNISCHIT-1.jpg"
                      className="mx-auto h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Sunischit Acharya
                    </h1>
                    <p className="font-serif text-neutral-700">
                      Should I refer to him as Mr. Athletics or Mr. Academics,
                      or simply by his indelible name, Sunischit. At first
                      glance he may look like a person with his nose always
                      buried in books but the very next moment you’ll find him
                      conquering mountain peaks on a weekend trek. Despite his
                      adventurous spirit, Sunischit isn’t immune to unnecessary
                      deep thoughts on life which are more amusing than
                      insightful. Don’t be astounded if you catch him bending
                      the laws of physics, with his over complexion of things,
                      he might just invent a new dimension.
                    </p>
                  </div>
                </div>
                <div className="basis-1/4"></div>
              </div>

              {/* small */}
              <div className="md:hidden flex flex-row pb-6">
                <div className="grid grid-cols-1">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/wcTCR0p/SUNISCHIT-1.jpg"
                      className="mx-auto h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Sunischit Acharya
                    </h1>
                    <p className="font-serif text-neutral-700">
                      Should I refer to him as Mr. Athletics or Mr. Academics,
                      or simply by his indelible name, Sunischit. At first
                      glance he may look like a person with his nose always
                      buried in books but the very next moment you’ll find him
                      conquering mountain peaks on a weekend trek. Despite his
                      adventurous spirit, Sunischit isn’t immune to unnecessary
                      deep thoughts on life which are more amusing than
                      insightful. Don’t be astounded if you catch him bending
                      the laws of physics, with his over complexion of things,
                      he might just invent a new dimension.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grids-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16">
                <div>
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/qyB2pwX/SUHI-1.jpg"
                      className="mx-auto h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Suhi Shrestha
                    </h1>
                    <p className="font-serif text-neutral-700">
                      To be loved by Suhi is to experience the warm embrace of
                      an older sister. What sets her apart is her ability to
                      love with all her soul; her insights on vulnerability, her
                      excellency in intellectualism, and best of all, her
                      ability to make anyone feel at home with her. Forget about
                      being miserable when you’re with Suhi, because rest be
                      assured she will give her all to make sure you have the
                      best time. Her hearty laughter, which can be heard from
                      anywhere, resembles a soundtrack for all of the memories
                      that she’s a part of. However, you must prepare yourself
                      for an embrace whenever you meet her because she will not
                      let you out of her sight unless she holds you
                      affectionately.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/QFyXFZs/SAMYAK.jpg"
                      className="mx-auto h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1 p-3">
                    <h1 className="line-clamp-1 font-semibold text-xl font-serif text-neutral-700">
                      Samyak Khatri
                    </h1>
                    <p className="font-serif text-neutral-700">
                      With his contagious enthusiasm for life itself, Samyak
                      Khatri’s trademark is his humor and charm. With his knack
                      for keeping things lively, and the people around him
                      light, rest assured that not one moment spent in Samyak’s
                      company goes un-entertained. And If that doesn’t make you
                      want to befriend him immediately, his enviable sneaker
                      collection is sure to. From classics like the AirForces to
                      bold pieces like the UpTempos, Samyak's shoe game is as
                      diverse as the topics to be discussed at Mitini MUN. So,
                      if you ever feel the need for pick-me-up (or the perfect
                      shoes) Samyak is your guy!
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

export default Comms;
