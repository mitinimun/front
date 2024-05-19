import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import baseUrl from "../../utils/baseUrl";
import { isLoggedIn } from "../../utils/isLoggedIn";
import { UserContext } from "../../context/context";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [state, setState] = useContext(UserContext);
  const [number, setNumber] = useState(0);
  const [joke, setJoke] = useState("");

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

  const createJoke = () => {
    if(state.user._id === "6643403efeaf6ec1a874e6d0") {
      setJoke("keep smiling my guy :)!")
    }

    if(state.user._id === "66437ccea8c245c677b67f21") {
      setJoke("ta kale moro hahahahaha!")
    }

    if(state.user._id === "66437cf2a8c245c677b67f24") {
      setJoke("ta baun myaaaa nakeeeeeee!")
    }

    if(state.user._id === "66437d19a8c245c677b67f27") {
      setJoke("height badha ta mushak!")
    }

    if(state.user._id === "66437d34a8c245c677b67f2a") {
      setJoke("ta muji baun rado!")
    }

    if(state.user._id === "6645db7f412c039ad7d9a6a3") {
      setJoke("ta jot ko mula kei garna aaudaina khate sala!")
    }
  }

  useEffect(() => {
    getNumbers();
    createJoke();
  });

  return (
    <>
      <div className="pt-28 md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <h2 className="text-neutral-600">Welcome, {state.user.firstname} {joke}</h2>
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
