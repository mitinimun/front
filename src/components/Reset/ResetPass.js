import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import baseUrl from "../../utils/baseUrl";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const ResetPass = () => {
  const [newPassword, setNewPassword] = useState("");
  const { resetPasswordToken } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const {data} = await axios.put(`${baseUrl}/delegates/reset-password`, {
            newPassword, 
            resetPasswordLink: resetPasswordToken
        })
        console.log(data);
        if (data.error) {
            toast.error(data.error);
        } else {
            toast.success(data.message);
        }
    } catch (error) {
        toast.error(error)
    }
  }

  return (
    <>
      <div className="min-h-screen text-gray-900 flex justify-center pt-10">
        <div className="max-w-screen-xl m-0 sm:m-10 flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <img
                src="https://i.ibb.co/Yh8R0Yd/mitini-MUN-logo.jpg"
                className="w-32 mx-auto pt-10"
              />
            </div>
            <div className="mt-5 flex flex-col items-center">
              <h1 className="text-xl xl:text-2xl font-bold">
                Your New Password
              </h1>
              <div className="w-full flex-1 mt-8">
                <form className="mx-auto max-w-xs" onSubmit={handleSubmit}>
                  <input
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="mt-5 w-full px-6 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="New Password"
                    required
                  />
                  <button className="mt-3 tracking-wide font-semibold bg-mitini text-gray-100 w-full py-2 rounded-lg hover:bg-rose-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-2">Reset Password</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(https://i.ibb.co/LgY8rXF/2.jpg)",
              }}
            ></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResetPass;
