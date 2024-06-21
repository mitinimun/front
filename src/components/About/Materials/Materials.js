import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import Footer from "../../Footer/Footer";

const Materials = () => {
  return (
    <>
      <div className="pt-28 md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
          <h2 className="text-4xl text-neutral-700 font-semibold mb-2">
            Materials for the MUN
          </h2>
          <p className="text-neutral-500 pb-10">
            Click on the buttons to download the resources!
          </p>
          <div>
            <a href="/PDF/Handbook.pdf" download>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-center inline-flex items-center">
                <div className="pr-2">
                  <FaRegFilePdf />
                  {"        "}
                </div>
                <div>Delegate Handbook</div>
              </button>
            </a>
          </div>
          <div className="grid grids-cols-1 sm:grid-cols-2 md:grid-cols-2 pt-10">
            <div>
              <p className="text-2xl text-neutral-700 font-semibold mb-2 pt-10 pb-4">
                United Nations Security Council
              </p>
              <a href="/PDF/UNSC1.pdf" download>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-center inline-flex items-center">
                  <div className="pr-2">
                    <FaRegFilePdf />
                    {"        "}
                  </div>
                  <div>UNSC Study Guide</div>
                </button>
              </a>
            </div>
            <div>
              <p className="text-2xl text-neutral-700 font-semibold mb-2 pt-10 pb-4">
                United Nations Human Rights Council
              </p>
              <a href="/PDF/UNHRC.pdf" download>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-center inline-flex items-center">
                  <div className="pr-2">
                    <FaRegFilePdf />
                    {"        "}
                  </div>
                  <div>UNHRC Study Guide</div>
                </button>
              </a>
            </div>
          </div>

          <div className="grid grids-cols-1 sm:grid-cols-2 md:grid-cols-2 pt-10">
            <div>
              <p className="text-2xl text-neutral-700 font-semibold mb-2 pt-10 pb-4">
                Disarmament and International Security Committee
              </p>
              <a href="/PDF/DISEC.pdf" download>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-center inline-flex items-center">
                  <div className="pr-2">
                    <FaRegFilePdf />
                    {"        "}
                  </div>
                  <div>DISEC Study Guide</div>
                </button>
              </a>
            </div>
            <div>
              <p className="text-2xl text-neutral-700 font-semibold mb-2 pt-10 pb-4">
                NATO: Futuristic Affairs
              </p>
              <a href="/PDF/FNATO.pdf" download>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-center inline-flex items-center">
                  <div className="pr-2">
                    <FaRegFilePdf />
                    {"        "}
                  </div>
                  <div>F-NATO Study Guide</div>
                </button>
              </a>
            </div>
          </div>

          <div className="grid grids-cols-1 sm:grid-cols-2 md:grid-cols-2 pt-10">
            <div>
              <p className="text-2xl text-neutral-700 font-semibold mb-2 pt-10 pb-4">
                Commission on the Status of Women
              </p>
              <a href="/PDF/CSW.pdf" download>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-center inline-flex items-center">
                  <div className="pr-2">
                    <FaRegFilePdf />
                    {"        "}
                  </div>
                  <div>CSW Study Guide</div>
                </button>
              </a>
            </div>
            <div>
              <p className="text-2xl text-neutral-700 font-semibold mb-2 pt-10 pb-4">
                The Historic Committee on Cuban Affairs
              </p>
              <a href="/PDF/HCC.pdf" download>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-center inline-flex items-center">
                  <div className="pr-2">
                    <FaRegFilePdf />
                    {"        "}
                  </div>
                  <div>HCC Study Guide</div>
                </button>
              </a>
            </div>
          </div>

          <div className="grid grids-cols-1 sm:grid-cols-2 md:grid-cols-2 pt-10">
            <div>
              <p className="text-2xl text-neutral-700 font-semibold mb-2 pt-10 pb-4">
                Organization of Islamic Cooperation
              </p>
              <a href="/PDF/OIC.pdf" download>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-center inline-flex items-center">
                  <div className="pr-2">
                    <FaRegFilePdf />
                    {"        "}
                  </div>
                  <div>OIC Study Guide</div>
                </button>
              </a>
            </div>
            <div>
              <p className="text-2xl text-neutral-700 font-semibold mb-2 pt-10 pb-4">
                Commission on Crime Prevention and Criminal Justice
              </p>
              <a href="/PDF/CCPCJ.pdf" download>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-center inline-flex items-center">
                  <div className="pr-2">
                    <FaRegFilePdf />
                    {"        "}
                  </div>
                  <div>CCPCJ Study Guide</div>
                </button>
              </a>
            </div>
          </div>

          <div className="grid grids-cols-1 sm:grid-cols-2 md:grid-cols-2 pt-10">
            <div>
              <p className="text-2xl text-neutral-700 font-semibold mb-2 pt-10 pb-4">
                International Press Corps
              </p>
              <a href="/PDF/IP.pdf" download>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-center inline-flex items-center">
                  <div className="pr-2">
                    <FaRegFilePdf />
                    {"        "}
                  </div>
                  <div>IP Study Guide</div>
                </button>
              </a>
            </div>
            <div>
              <p className="text-2xl text-neutral-700 font-semibold mb-2 pt-10 pb-4">
                Federal Parliament of Nepal
              </p>
              <a href="/PDF/FPN.pdf" download>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-center inline-flex items-center">
                  <div className="pr-2">
                    <FaRegFilePdf />
                    {"        "}
                  </div>
                  <div>FPN Study Guide</div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Materials;
