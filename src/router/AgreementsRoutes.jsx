import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

function AgreementsRoutes() {
  const context = useOutletContext();
  return (
    <div>
      <Outlet context={context} />
    </div>
  );
}

export default AgreementsRoutes;
