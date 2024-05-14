import React, { useState, useContext } from "react";
import ErrorAlert from "../../Alert/ErrorAlert";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { toast } from "react-toastify";
import loginimg from "./loginimg.jpg";
import { UserContext } from "../../../context/context";
import Footer from "../../Footer/Footer";
import { isLoggedIn } from "../../../utils/isLoggedIn";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [state, setState] = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`${baseUrl}/oc/login`, {
        email,
        password,
      });
      setState({
        user: data.user,
        token: data.token,
      });
      window.localStorage.setItem("auth", JSON.stringify(data));
      window.location.href = "/";
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  if (window.localStorage.getItem("auth")) {
    window.location.href = "/dashboard"
  }

  return (
    <>
      <div className="min-h-screen text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <img
                src="https://i.ibb.co/Yh8R0Yd/mitini-MUN-logo.jpg"
                className="w-32 mx-auto"
              />
            </div>
            <div className="mt-5 flex flex-col items-center">
              <h1 className="text-xl xl:text-2xl font-bold">Register!</h1>
              <div className="w-full flex-1 mt-8">
                <form className="mx-auto max-w-xs" onSubmit={handleSubmit}>
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-5 w-full px-6 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-5 w-full px-6 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <button className="mt-3 tracking-wide font-semibold bg-mitini text-gray-100 w-full py-2 rounded-lg hover:bg-rose-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-2">Login</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(https://i.ibb.co/LgY8rXF/2.jpg",
              }}
            ></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginPage;
