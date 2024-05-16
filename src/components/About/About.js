import React from "react";
import mitini from "../HomePage/mitini.jpg";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
    <div className="container pb-10 pt-20">
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2">
          <img src="https://i.ibb.co/Bg9NCBn/mitini-MUN-logo-Photoroom-png-Photoroom.png" alt="" />
          <div>
            <h1 className="my-8 py-2 pl-2 text-3xl font-bold">
              What is Mitini MUN?
            </h1>
            <p className="pb-4">
              A Model United Nations (MUN) is an educational simulation where
              participants, typically students, assume the roles of different
              country representatives. Engaging in debates and negotiations,
              they address global issues, mirroring the complex procedures of
              the United Nations. This experiential exercise fosters a nuanced
              understanding of international relations while honing essential
              skills like critical thinking and diplomatic acumen, akin to
              authentic UN delegates in committee sessions.{" "}
            </p>
            <p >
              MITINI MUN represents a conscientious fusion of global awareness
              and altruism, where the conventional simulation of international
              diplomacy converges with a philanthropic ethos. Organized with the
              explicit goal of fundraising for charitable causes, MITINI MUN
              conference serves as platforms for impassioned discourse and
              diplomatic role-playing, engaging participants in comprehensive
              discussions on pressing global issues. Participants, emulate the
              roles of UN delegates while their contributions translate into
              tangible benefits for the chosen charitable endeavor. This unique
              blend of academic simulation and charitable commitment not only
              cultivates a profound understanding of international relations but
              also instills a sense of social responsibility among participants.
              The funds generated through delegate fees, sponsorships, or
              donations contribute to a noble cause, making the MUN experience
              not only intellectually enriching but also socially impactful.
              Beyond the traditional realms of education, MITN MUN underscores
              the potential of global dialogue to effect positive change and
              embody the transformative power of collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;
