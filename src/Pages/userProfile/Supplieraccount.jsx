import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Supplieraccount = () => {
  return (
    <div className="px-[2vw] w-full h-[100vh] overflow-scroll bg-[#EAEFF2] ">
      <div className="my-[30px] flex items-center justify-between">
        <div className="flex items-center justify-center space-x-4">
          <div className="bg-white flex items-center justify-center w-[50px] h-[50px] border-[#3CB043] border-2 rounded-full">
            <TfiHeadphoneAlt size={30} className="text-[#3CB043]" />
          </div>
          <h1 className=" font-bold text-[#3CB043]">Here for you 24/7</h1>
        </div>
        <div>
          <h2 className="text-3xl text-black/75 font-bold pr-[150px]">
            Supplier Profile
          </h2>
        </div>
      </div>
      <div className="my-[30px] bg-white rounded-md shadow-md">
        <div className="flex  p-[35px] justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-[120px] h-[120px] bg-[#f2f3f4]"></div>
            <div>
              <h2 className="text-[18px] text-black/55">
                John Doe/Company Name <br />
                Add Title/Subtitle
                <br />
                Add Bio...
              </h2>
            </div>
          </div>
          <div>
            <h2 className="text-[18px] text-black/55">
              Location: Nairobi <br />
              Rating : 0<br />
              Completed Tenders:0
            </h2>
          </div>
        </div>
        <div className="p-[35px] flex items-center justify-between">
          <button className="border-2 border-blue-500 px-[40px] py-[15px] text-xl font-bold">
            Edit Profile
          </button>
          <div className="flex items-center gap-3">
            <FaSquareXTwitter size={40} />
            <FaYoutube size={55} className="text-red-700" />
            <FaLinkedin size={40} />
            <FaSquareFacebook size={40} className="text-blue-500" />
          </div>
        </div>
      </div>
      <div className="my-4 ">
        <div className="flex items-center my-3 gap-3">
          <h2 className="text-[14px] font-bold text-black/55">Profile </h2>
          <h2 className="text-[15px] font-bold  text-black/55">
            Certificates and References
          </h2>
        </div>
        <div className="my-2 flex items-center  gap-4 justify-between">
          <div className="w-[30%]">
            <div className="bg-white p-[20px] pb-[80px] shadow-md rounded-md  ">
              <div className="my-2  border-b-2 border-black/35">
                <h1 className="text-[14px] my-2 text-black/55 font-bold">
                  Portfolio
                </h1>
                <div className="ml-[30px]">
                  <button className="w-[220px] justify-center   mb-3 h-[35px] flex items-center border-2 border-black/45">
                    Add Link/upload Document
                  </button>
                </div>
              </div>
              <div className="my-2  border-b-2 border-black/35">
                <h1 className="text-[14px] my-2 text-black/55 font-bold">
                  Company
                  <br />
                  Website
                </h1>
                <div className="ml-[30px]">
                  <button className="w-[220px] justify-center  mr-[10px] mb-3 h-[35px] flex items-center border-2 border-black/45">
                    Add Link
                  </button>
                </div>
              </div>
              <div className="my-2 ">
                <h1 className="text-[15px] my-2 text-black/55 font-bold">
                  Completed <br />
                  Tenders(32)
                </h1>
                <div className=" ml-[30px]">
                  <button className="w-[220px] justify-center   mb-3 h-[35px] flex items-center border-2 border-black/45">
                    Add Content
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-y-auto shadow-md rounded-md  p-[20px]">
            <div className="">
              <h2 className="text-[15px] text-black/50 my-3">About</h2>
              <textarea className="w-full p-[20px] h-[170px]  border-[2px] border-blue-500"></textarea>
              <div className="">
                <h2 className="text-[15px] text/black/45 my-2">Expertise</h2>
                <button className="text-black/45 w-[150px] h-[40px] font-bold border-[3px] flex items-center justify-center border-blue-500">
                  +Add Expertise
                </button>
              </div>
              <div className="">
                <h2 className="text-[15px] text/black/45 my-2">Expertise</h2>
                <button className="text-black/45 w-[150px] h-[40px] font-bold border-[3px] flex items-center justify-center border-blue-500">
                  +Add Expertise
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplieraccount;
