import React, { useEffect, useState, useContext } from "react";
import { Link, Router } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";
import { UserContext } from "../../context/context";
import { isLoggedIn } from "../../utils/isLoggedIn";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [state, setState] = useContext(UserContext);

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRedirect = () => {
    window.location.href = "/register";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "What is Mitini?", path: "/mitini" },
    { link: "The OC", path: "/oc" },
    { link: "Committees", path: "/committees" },
  ];

  const loggedInNavItems = [{ link: "Dashboard", path: "/dashboard" }];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src="https://i.ibb.co/8jHc79Y/mitini-MUN-logo-Photoroom-png-Photoroom.png"
              alt=""
              className="w-20 inline-block items-center"
            />
          </a>

          {/* nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {state !== null ? (
              <>
                {loggedInNavItems.map(({ link, path }) => (
                  <Link
                    to={path}
                    className="block text-base text-gray-900 hover:text-mitini cursor-pointer first:font-medium"
                  >
                    {link}
                  </Link>
                ))}
              </>
            ) : (
              <>
                {navItems.map(({ link, path }) => (
                  <Link
                    to={path}
                    className="block text-base text-gray-900 hover:text-mitini cursor-pointer first:font-medium"
                  >
                    {link}
                  </Link>
                ))}
              </>
            )}
          </ul>

          {/* btn for large devices */}
          <div className="space-x-12 hidden md:flex items-center">
            {/* <a
              href=""
              className="hidden lg:flex items-center text-mitini hover:text-gray-900"
            >
              Login
            </a> */}
            {state !== null ? (
              <button
                onClick={logout}
                className="bg-mitini text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutral-600"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleRedirect}
                className="bg-mitini text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutral-600"
              >
                Register
              </button>
            )}
          </div>

          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-700 focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <div
          className={`md:hidden space-y-4 px-4 mt-20 py-7 bg-mitini ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {state !== null ? (
            <>
              {loggedInNavItems.map(({ link, path }) => (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className="block text-base text-white hover:text-mitini first:font-medium"
                >
                  {link}
                </Link>
              ))}
            </>
          ) : (
            <>
              {navItems.map(({ link, path }) => (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className="block text-base text-white hover:text-mitini first:font-medium"
                >
                  {link}
                </Link>
              ))}
            </>
          )}
          {state !== null ? (
            <button
              onClick={logout}
              className="bg-gray-400 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-red-200"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleRedirect}
              className="bg-gray-400 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-red-200"
            >
              Register
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

// import React, { useState } from "react";
// import logo from "./logo.jpg";
// import { isLoggedIn } from "../../utils/isLoggedIn";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import ResponsiveMenu from "./ResponsiveMenu";
// import { Link } from "react-router-dom";

// export const MenuLinks = [
//   {
//     id: 1,
//     name: "About",
//     link: "/about",
//   },
//   {
//     id: 2,
//     name: "What is Mitini?",
//     link: "/mitini",
//   },
// ];

// const NavBar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showBtn, setShowBtn] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <>
//       <div className="relative z-10 w-full duration-300">
//         <div className="container py-3 md:py-2">
//           <div className="flex justify-between items-center">
//             {/*logo section */}
//             <div>
//               <a href="/" className="flex items-center gap-3">
//                 <img src={logo} alt="Logo" className="w-28 ml-8" />
//               </a>
//             </div>
//             {/*Desktop Navlinks */}
//             <nav className="hidden md:block">
//               <ul className="flex items-center gap-8">
//                 {MenuLinks.map(({ id, name, link }) => {
//                   return (
//                     <li key={id} className="cursor-pointer py-4">
//                       <a
//                         href={link}
//                         className="text-lg font-medium hover:text-mitini py-2 hover:border-b-2 hover:border-mitini transition-all duration-300"
//                       >
//                         {name}
//                       </a>
//                     </li>
//                   );
//                 })}
//                 {showBtn ? (
//                   <>
//                     {localStorage.getItem("auth") ? (
//                       <button className="btn-primary">Logout</button>
//                     ) : (
//                       <button className="btn-primary">Login</button>
//                     )}
//                   </>
//                 ) : (
//                   <></>
//                 )}
//               </ul>
//             </nav>
//             {/* Mobile view */}
//             <div className="flex items-center gap-4 md:hidden">
//               {showMenu ? (
//                 <HiMenuAlt1
//                   onClick={toggleMenu}
//                   className="cursor-pointer text-2xl"
//                 />
//               ) : (
//                 <HiMenuAlt3
//                   onClick={toggleMenu}
//                   className="cursor-pointer text-2xl"
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//         {/* Mobile Menu section */}
//         <div>
//           <ResponsiveMenu showMenu={showMenu} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;
