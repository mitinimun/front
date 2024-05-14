import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { toast } from "react-toastify";
import { Modal, Avatar } from "antd";

const OCRegister = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [team, setTeam] = useState("");
  const [ok, SetOk] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/oc/register`, {
        firstname,
        lastname,
        email,
        password,
        team,
      });
      SetOk(data.ok);
      setFirstname("");
      setLastName("");
      setEmail("");
      setPassword("");
      setTeam("");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

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
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    className="w-full px-6 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                  <input
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-5 w-full px-6 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
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
                  <input
                    name="team"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    className="mt-5 w-full px-6 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Team"
                    required
                  />
                  <button
                    onSubmit={handleSubmit}
                    className="mt-3 tracking-wide font-semibold bg-mitini text-gray-100 w-full py-2 rounded-lg hover:bg-rose-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <span className="ml-2">Register</span>
                  </button>

                  {/* <button
                    onSubmit={handleSubmit}
                    className="mt-3 tracking-wide font-semibold bg-mitini text-gray-100 w-full py-2 rounded-lg hover:bg-rose-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <span className="ml-2">Register</span>
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Modal
            title="Success!"
            visible={ok}
            onCancel={() => SetOk(false)}
            footer={null}
          >
            <p>
              You have successfully registered.
            </p>
          </Modal>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OCRegister;
