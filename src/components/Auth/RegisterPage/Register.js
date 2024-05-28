import React, { useState, useContext } from "react";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { toast } from "react-toastify";
import { UserContext } from "../../../context/context";
import Footer from "../../Footer/Footer";
import { Modal, Avatar } from "antd";
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [commpref1, setCommpref1] = useState("");
  const [commpref2, setCommpref2] = useState("");
  const [commpref3, setCommpref3] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVeg, setIsVeg] = useState("");
  const [ok, SetOk] = useState(false);
  const [state, setState] = useContext(UserContext);
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const [prevExp, setPrevExp] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${baseUrl}/delegates/register`, {
        firstname,
        lastname,
        email,
        password,
        number,
        commpref1,
        commpref2,
        commpref3,
        isVeg,
        image,
        prevExp,
        grade
      });
      SetOk(data.ok);
      setFirstname("");
      setLastName("");
      setEmail("");
      setPassword("");
      setNumber("");
      setCommpref1("");
      setCommpref2("");
      setCommpref3("");
      setIsVeg("");
      setImage(null);
      setPrevExp("");
      setGrade("");
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];

    if (file.size > 2097152) {
      alert("The file size exceeds 2mb. Please reduce the file size.");
      e.target.value = "";
    } else {
      let formData = new FormData();
      formData.append("image", file);
      // console.log([...formData]);
      setUploading(true);
      try {
        const { data } = await axios.post(
          `${baseUrl}/delegates/upload-image`,
          formData
        );
        setImage({
          url: data.url,
          public_id: data.public_id,
        });
        setUploading(false);
      } catch (err) {
        console.log(err);
        setUploading(false);
      }
    }
  };

  const options = [
    {
      label: "",
      value: "",
    },
    {
      label: "United Nations Security Council (UNSC)",
      value: "unsc",
    },
    {
      label: "United Nations Human Rights Council (UNHRC)",
      value: "unhrc",
    },
    {
      label: "Disarmament and International Security Committee (DISEC)",
      value: "disec",
    },
    {
      label: "NATO: Futuristic Affairs (F-NATO)",
      value: "fnato",
    },
    {
      label: "Commission on the Status of Women (CSW)",
      value: "csw",
    },
    {
      label: "The Historic Committee on Cuban Affairs (HCC)",
      value: "hcc",
    },
    {
      label: "Organization of Islamic Cooperation (OIC)",
      value: "oic",
    },
    {
      label: "Commission on Crime Prevention and Criminal Justice (CCPC)",
      value: "ccpc",
    },
    {
      label: "International Press (IP)",
      value: "ip",
    },
    {
      label: "Federal Parliament of Nepal (FPN)",
      value: "fpn",
    },
  ];

  const redirect = () => {
    window.location.href = "/";
  };

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
                  <span className="text-sm">
                    Password will be used to login later on.
                  </span>
                  <input
                    name="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="mt-5 w-full px-6 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="number"
                    placeholder="Phone Number"
                    required
                  />
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-5 mb-2"
                    for="grid-state"
                  >
                    Committee Preference 1
                  </label>
                  <div className="">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      onChange={(e) => setCommpref1(e.target.value)}
                      name="commpref1"
                      required
                      value={commpref1}
                    >
                      {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-5 mb-2"
                    for="grid-state"
                  >
                    Committee Preference 2
                  </label>
                  <div className="">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      onChange={(e) => setCommpref2(e.target.value)}
                      name="commpref1"
                      required
                      value={commpref2}
                    >
                      {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-5 mb-2"
                    for="grid-state"
                  >
                    Committee Preference 3
                  </label>
                  <div className="pb-6">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      onChange={(e) => setCommpref3(e.target.value)}
                      name="commpref3"
                      required
                      value={commpref3}
                    >
                      {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="pb-2">
                    <label
                      for="message"
                      className="block mb-2 text-sm font-medium"
                    >
                      Previous MUN experience (in short)
                    </label>
                    <textarea
                      name="prevExp"
                      value={prevExp}
                      id="message"
                      required
                      rows="4"
                      onChange={(e) => setPrevExp(e.target.value)}
                      className="block p-2.5 w-full rounded-lg  bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    ></textarea>
                  </div>

                  <div className="pb-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-5"
                      for="grade"
                    >
                      What grade do you study in currently?
                    </label>
                    <input
                      id="grade"
                      name="grade"
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="mt-2 w-full px-6 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="number"
                      required
                    />
                  </div>

                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-5 mb-2"
                    for="grid-state"
                  >
                    Are you a vegeterian?
                  </label>
                  <div className=" mb-4">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      onChange={(e) => setIsVeg(e.target.value)}
                      required
                      value={isVeg}
                    >
                      <option value=""></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  <div className="pb-4">
                    <span className="text-gray-700 font-bold text-sm">
                      The payment fee is NRS.3200. You{" "}
                      <b className="text-gray-700">MUST</b> write your full name
                      and phone number in the "Remarks" section while processing
                      the payment and upload it in the given field below.
                    </span>
                  </div>
                  {/* <div className="pb-4">
                    <span className="text-gray-700 font-bold text-sm">
                      The payment fee is NRS.3200. You{" "}
                      <b className="text-gray-700">MUST</b> write your full name
                      and phone number in the "Remarks" section while processing
                      the payment and send us the screenshot of the transaction
                      to our email: mitinimunreg@gmail.com.
                    </span>
                  </div> */}
                  {/* <div>
                    <span>
                      <b>
                        NOTE: Only those who have completed the instructions
                        mentioned above will be verified as delegates.
                      </b>
                    </span>
                  </div> */}
                  <img
                    className="pt-4"
                    src="https://i.ibb.co/yWQbp7G/IMG-7206.jpg"
                    alt=""
                  />
                  <input
                    onChange={handleImage}
                    type="file"
                    required
                    className="pt-4"
                  />
                  <label className="pt-2">
                    {image && image.url ? (
                      <Avatar size={30} src={image.url} className="mt-1" />
                    ) : uploading ? (
                      <LoadingOutlined className="mt-2" />
                    ) : (
                      <></>
                    )}
                  </label>
                  <label className="block text-gray-500 font-semibold pt-4">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      required
                    />
                    <span className="text-sm">
                      I agree with Mitini MUN's{" "}
                      <a className="underline text-mitini" href="/tandc">
                        Terms and Conditions
                      </a>
                      .
                    </span>
                  </label>
                  {uploading ? (
                    <span>Wait the image is uploading!</span>
                  ) : (
                    <button
                      onSubmit={handleSubmit}
                      className="mt-3 tracking-wide font-semibold bg-mitini text-gray-100 w-full py-2 rounded-lg hover:bg-rose-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <span className="ml-2">Register</span>
                    </button>
                  )}
                  {loading ? <LoadingOutlined className="mt-2" /> : <></>}
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
              You have successfully registered. After some time you will be able
              to login using the email and password you have used to register.
              We will give you the updates on our instagram page: @mitini.mun
            </p>
          </Modal>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
