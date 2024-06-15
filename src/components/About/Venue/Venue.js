import React from "react";
import Footer from "../../Footer/Footer";

const Venue = () => {
  return (
    <>
      <div className="container pb-10 pt-20">
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsv6oaHhSbr5aiDprQP51kYo_MFQ-_552C9Q&s"
              alt=""
              className="mx-auto pt-44"
            />
            <div>
              <h1 className="my-8 py-2 pl-2 text-3xl font-bold">The Venue</h1>
              <p className="pb-4">
                Ullens IBDP school is a prestigious educational institution
                renowned for its commitment to providing a holistic and
                internationally recognized education. The school offers the
                International Baccalaureate Diploma Programme (IBDP), which is
                known for its rigorous academic curriculum designed to foster
                critical thinking, creativity, and global awareness among
                students.{" "}
              </p>
              <p className="pb-4">
                At Ullens IBDP School, students benefit from a diverse and
                inclusive learning environment that encourages intellectual
                curiosity and personal growth. The school boasts
                state-of-the-art facilities, including modern classrooms,
                well-equipped science and computer laboratories, extensive
                libraries, and recreational areas that support a wide range of
                extracurricular activities.{" "}
              </p>
              <p className="pb-4">
                The faculty at Ullens IBDP School comprises highly qualified and
                experienced educators who are dedicated to nurturing each
                student's potential. The school emphasizes a student-centered
                approach to learning, encouraging active participation,
                collaboration, and independent inquiry.{" "}
              </p>
              <p className="pb-4">
                Ullens IBDP School also places a strong emphasis on community
                service and social responsibility, preparing students to be
                compassionate and informed global citizens. The school's
                commitment to excellence is reflected in its outstanding
                academic results and the success of its graduates in securing
                placements at top universities worldwide.{" "}
              </p>
              <p className="pb-4">
                Overall, Ullens IBDP School stands as a beacon of quality
                education in Nepal, offering students the skills and knowledge
                they need to thrive in an increasingly interconnected world.{" "}
              </p>
              <p className="pb-4">
                We are thrilled to announce Ullens IBDP School as the esteemed
                venue partner for Mitini MUN, a charity Model United Nations
                event. Known for its commitment to academic excellence and
                holistic development, Ullens IBDP School provides the perfect
                setting for our delegates to engage in critical global
                discussions and diplomatic simulations. With state-of-the-art
                facilities and a supportive environment, Ullens IBDP School is
                instrumental in making this event a success. We are immensely
                grateful for their partnership and dedication to fostering
                educational and extracurricular growth.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Venue;
