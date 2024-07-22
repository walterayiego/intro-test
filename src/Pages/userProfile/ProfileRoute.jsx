import React from "react";
import { useOutletContext } from "react-router-dom";
import { Outlet } from "react-router-dom";

function ProfileRoute() {
  const context = useOutletContext();
//   console.log("ProfileRoute context", context);
  return <Outlet context={{ ...context }} />;
}

export default ProfileRoute;
