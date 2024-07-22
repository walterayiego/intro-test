import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
  ClosedPrequalifications,
  PrequalificationResponseId,
  NoticeApplications,
  Prequalifications,
  PrequalifiedSuppliers,
} from "./lazyImports";

function PreqRoutes() {
  const context = useOutletContext();
  return <Outlet context={context} />;
}

export default PreqRoutes;

const PrequalificationRoutes = () => (
  <Route path="prequalifications" element={<PreqRoutes />}>
    <Route index element={<Prequalifications />} />
    <Route path="prequalifiedsuppliers" element={<PrequalifiedSuppliers />} />
    <Route
      path="closedprequalifications"
      element={<ClosedPrequalifications />}
    />
    <Route
      path="prequalificationresponseId"
      element={<PrequalificationResponseId />}
    />
    <Route
      path="NoticeApplications"
      element={<NoticeApplications />}
    />
  </Route>
);

export { PrequalificationRoutes };
