import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import baseUrl from "../../utils/baseUrl";
import { isLoggedIn } from "../../utils/isLoggedIn";
import { UserContext } from "../../context/context";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [state, setState] = useContext(UserContext);
  const [number, setNumber] = useState(0);

  const getNumbers = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/delegates/get`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });

      setNumber(data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    getNumbers();
  });

  return (
    <>
      <div className="pt-28 md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
          <h2 className="text-4xl text-neutral-700 font-semibold pb-16">
            Number of Delegates
          </h2>
          {/* Committees */}
          <div className="flex justify-center pb-16">
            <div className="container">
              <div className="flex flex-row">
                <div className="basis-1/4"></div>
                <div className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer basis-1/2">
                  <div className="space-y-2 p-3">
                    <h1 className="line-clamp-1 font-bold text-xl">{number}</h1>
                  </div>
                </div>
                <div className="basis-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
