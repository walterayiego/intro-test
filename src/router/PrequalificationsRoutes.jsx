import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

function PrequalificationsRoutes() {
  const context = useOutletContext();
  return <Outlet context={context} />;
}

export default PrequalificationsRoutes;
