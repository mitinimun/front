import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/context";
import baseUrl from "../../utils/baseUrl";
import axios from "axios";
import { toast } from "react-toastify";
import { Avatar } from "antd";
import Teammates from "./Teammates";
import Footer from "../Footer/Footer";

const DelegateDashboard = (user) => {
  const [state, setState] = useContext(UserContext);
  const [detail, setDetail] = useState([]);
  const [image, setImage] = useState("");
  const [show, setShow] = useState(true);

  const comm = JSON.parse(window.localStorage.getItem("auth"));

  const getComm = async () => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/committees/get/${comm.user.committee}`,
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          },
        }
      );
      setDetail(data);
      setImage(data.image);
    } catch (err) {
      toast.error(err.data.response);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShow(false);
    }
  };

  const event = () => {
    window.addEventListener("scroll", handleScroll);
  };

  useEffect(() => {
    // set
    getComm();
  }, []);

  return (
    <>
      <div className="pt-28 md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <h2 className="text-neutral-600">
          Welcome, {state.user.firstname} {state.user.lastname}
        </h2>
        <div className="text-center my-8">
          <h2 className="text-4xl text-neutral-700 font-semibold pb-16">
            Your Committee
          </h2>
          {/* Committees */}
          <div className="flex justify-center pb-16">
            <div className="container">
              <div className="flex flex-row">
                <div className="basis-1/4"></div>
                <div className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer basis-1/2">
                  <div className="space-y-4 p-5 overflow-hidden">
                    <h1 className="line-clamp-1 font-bold text-xl">
                      {detail.name}
                    </h1>
                    <p>
                      For the country matrix,{" "}
                      <a
                        className="text-red-700 underline-offset-2"
                        href="https://docs.google.com/spreadsheets/d/1YQz3IkrFGVAPIZZziIRkkNaM9DDSlK08GU0Yo7D2qjQ/edit?usp=sharing"
                      >
                        click here.
                      </a>
                    </p>
                  </div>
                </div>
                <div className="basis-1/4"></div>
              </div>
            </div>
          </div>

          {/* Committee members */}
          {<Teammates commName={detail.name} commId={comm.user.committee} />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DelegateDashboard;
