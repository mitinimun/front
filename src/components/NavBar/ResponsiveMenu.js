import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MenuLinks } from "./NavBar";
import { isLoggedIn } from "../../utils/isLoggedIn";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={` ${
        showMenu ? "left-0" : "left-[-100%]"
      } fixed bottom-0 top-0 w-[75%] transition-all duration-500 shadow-md pt-16 px-8 bg-white z-50 flex flex-col justify-between lg:hidden`}
    >
      <div className="card">
        {/* User section */}
        {localStorage.getItem("auth") ? (
          <div className="flex items-center justify-start gap-3">
            <FaUserCircle size={50} />
            <div>
              <h1>hello User</h1>
              <h1 className="text-sm text-slate-500">Premium user</h1>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* Menu Section */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map(({ id, name, link }) => {
              return (
                <li key={id}>
                  <a href={link} className="mb-5 inline-block">
                    {" "}
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
