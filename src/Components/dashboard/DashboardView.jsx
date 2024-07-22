import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { Button } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";

import authService from "../../services/auth.service";
import DropDown from "../DropDown";

const DashboardView = () => {
  const [open, setOpen] = useState(false);
  const { user } = useOutletContext();
  const navigate = useNavigate();

  const showDropDown = () => setOpen(!open);

  const handleLogOut = async () => {
    try {
      const res = await authService.logOut();
      res?.status === 200 && navigate("/login");
    } catch (error) {
      console.log("Error /n", error);
    }
  };
  const handleSettings = async () => { };
  const getUserProfile = async () => {
    navigate("profile/client");
    // if (!user) return;
    // alert(
    //   `UserName : ${user?.userName} \nEmail : ${user?.email} \nUserID : ${user?.id}`
    // );
    // Role : ${user?.role} \n Phone : ${user?.phone} \n Address : ${user?.address} \n
  };
  return (
    <div className="row items-center justify-around h-full w-full px-[2vw]">
      {/* search bar */}
      <div className=" row-center h-4/5 flex-1 rounded-lg focus-within:shadow-lg bg-white">
        <div className="grid place-items-center h-full px-4 font-bold text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          className="h-full w-11/12 outline-none text-[15px] font-bold text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search Tender, Supplier, Category... "
        />
      </div>

      <DropDown
        Class="h-4/5 aspect-square col-center m-[2vw] bg-primary  rounded-lg"
        title={
          <HiOutlineUser size={30} className="text-white" />
        }
      >
        <div className="col">
          <Button onClick={getUserProfile} className="hover:scale-105">
            Profile
          </Button>
          <Button onClick={handleSettings} className="hover:scale-105">
            Settings
          </Button>
          <Button onClick={handleLogOut} className="hover:scale-105">
            Log out
          </Button>
        </div>
      </DropDown>

    </div>
  );
};
export default DashboardView;
