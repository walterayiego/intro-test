import React, { useState } from "react";
import { Button, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useOutletContext, Outlet } from "react-router-dom";
import DashboardView from "../dashboard/DashboardView";

import Sidebar from "./Sidebar";

function LayoutRouteSideBar() {
  const values = useOutletContext();
  const [showSideBar, setShowSideBar] = useState(false);
  const toogleSideBar = () => setShowSideBar(!showSideBar);
  const context = {
    ...values,
    showSideBar,
    setShowSideBar,
    toogleSideBar,
  };
  return (
    <div className="row items-end justify-end w-screen">
      <Drawer open={showSideBar} onClose={toogleSideBar}>
        <Sidebar />
      </Drawer>

      <div
        className="fixed top-0 left-0 hidden sm:flex sm:w-[25vw] xl:w-[20vw] min-h-screen"
        children={<Sidebar />}
      />
      <div className="w-full relative sm:w-[75vw] xl:w-[80vw] col">
        <div className="row-center sticky left-0 top-0 h-[9vh] z-50 w-full m-2 bg-background">
          <button
            className="flex sm:hidden w-[10vw] m-3 p-3 shadow-sm shadow-black rounded-lg"
            onClick={toogleSideBar}
          >
            <MenuIcon className="text-primary" color="primary" />
          </button>

          <DashboardView />
        </div>

        <Outlet context={context} />
      </div>
    </div>
  );
}

export default LayoutRouteSideBar;
