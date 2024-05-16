import React from "react";
import Footer from "../Footer/Footer";
import logo from "../NavBar/logo.jpg";

const Mitini = () => {
  return (
    <>
      <div className="container pb-10 pt-20">
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2">
            <img src="https://i.ibb.co/yWZpdDB/lg-removebg.png" alt="" />
            <div>
              <h1 className="my-8 py-2 pl-2 text-3xl font-bold">
                What is Mitini?
              </h1>
              <p className="pb-4">
                Mitini is much more beyond just the used sanitary pad disposal
                service. Mitini is a proud “By Nepali, For Nepali” initiative,
                meticulously curated to address the prevailing challenges faced
                on a day to day basis by rural, as well as urban, adolescent
                girls and women, be it working women or school going girls.
                “Mitini”signifying “soul sister” in the Nepali tongue, is a
                social initiative spearheaded by MITRA Samaj, a national level
                NGO.{" "}
              </p>
              <p className="pb-4">
                Mitini delivers simple yet very effective and exemplary solution
                for the disposal of used sanitary pads within business
                establishments. Its overarching goal is to address the anxieties
                of both female employees and visitors alike at workplaces and to
                empower school going adolescent girls for better management of
                their menstrual health and hygiene.{" "}
              </p>
              <p className="pb-4">
                In Nepal, countless girls and women endure restrictions in their
                daily lives solely due to menstruation. While girls suffer from
                inadequate provisions for menstrual management and hygiene
                facilities in schools, leading to absenteeism, women face
                indignity and shame in workplace and public settings due to the
                absence of separate and hygienic restroom which lack facilities
                for mensural management and hygiene.{" "}
              </p>
              <p className="pb-4">
                The fees collected from Mitini Service users play a crucial role
                in funding programs aimed at improving Menstrual Health and
                Hygiene for communities facing economic challenges. These
                programs are managed by the non-profit organization MITRA Samaj.{" "}
              </p>
              <p className="pb-4">
                The funds are channeled into programs designed to address the
                menstrual health needs of communities that may otherwise lack
                access to such services. By supporting these programs through
                Mitini Services, companies align themselves with a broader
                mission of social responsibility, demonstrating their dedication
                to making a positive difference in society beyond their core
                business activities.{" "}
              </p>
              <p className="pb-4">
                MITINI MUN aims at providing an aid in this cause by raising
                funds and spreading awareness through the MUN{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mitini;
