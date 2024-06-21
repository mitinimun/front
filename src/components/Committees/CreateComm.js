import React, { useContext, useState } from "react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { toast } from "react-toastify";
import { UserContext } from "../../context/context";
import Footer from "../Footer/Footer";
import { Modal, Avatar } from "antd";
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";

const CreateComm = () => {
  const [name, setName] = useState("");
  const [ok, SetOk] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState({});
  const [state, setState] = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${baseUrl}/committees/create`, {
        name,
        image,
      });
      SetOk(data.ok);
      setName("");
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
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-6 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Committee Name"
                    required
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
              Committee created!
            </p>
          </Modal>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateComm;
