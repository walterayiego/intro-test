import React from "react";
import sideBarLinks from "./SideBarLinks.jsx";
import SideBarItem from "./SideBarItem";
import Logo from "../Logo.jsx";

const Sidebar = () => {
  return (
    <div className="col bg-primary w-full min-h-screen px-2">
      <div className=" m-[3vh] col-center ">
        <div className="w-3/4 h-[10vh] col-center">
          <Logo />
        </div>
      </div>
      <div className="h-fit col justify-around px-3">
        {sideBarLinks.map((link, index) => (
          <SideBarItem key={index} {...link} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
