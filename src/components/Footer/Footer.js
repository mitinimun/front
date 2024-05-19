import React from "react";
import { FaInstagram } from "react-icons/fa";

const FooterLinks = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "What is Mitini?",
    link: "/mitini",
  },
  {
    title: "The Oc",
    link: "/oc",
  },
  {
    title: "Committees",
    link: "/committees",
  },
];

const HelpLinks = [
  {
    title: "Terms & Conditions",
    link: "/tandc",
  },
];

const ContactLinks = [
  {
    title: "E-mail: mitinimun@gmail.com",
    link: "",
  },
  {
    title: "Instagram: mitini.mun",
    link: "https://www.instagram.com/mitini.mun/",
  },
];

const Footer = () => {
  return (
    <div className="bg-black/90 text-white">
      <div className="flex justify-center">
        <div className="container">
          <div className="grid md:grid-cols-3 py-5">
            {/* Company details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                Mitini MUN
              </h1>
              <p className="text-sm">
                Join our Model United Nations (MUN) conference, where passionate
                minds unite for a common cause. Engage in meaningful debates and
                diplomatic solutions that drive positive change. Your
                participation empowers impactful initiatives and contributes to
                a better world. Join us in shaping a brighter future through
                Mitini MUN!{" "}
              </p>
              <br />
              {/* Social Handle */}
              <div className="flex items-center gap-4 mt-6">
                <a href="https://www.instagram.com/mitini.mun/">
                  <FaInstagram className="text-2xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
            {/* Links section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Mitini MUN</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                      >
                        <a href={link.link}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Help Links</h1>
                  <ul className="space-y-3">
                    {HelpLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                      >
                        <a href={link.link}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Contact us</h1>
                  <ul className="space-y-3">
                    <li
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                    >
                      <a>Email: mitinimun@gmail.com</a>
                    </li>
                    <li
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                    >
                      <a href="https://www.instagram.com/mitini.mun/">Instagram: mitini.mun</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
