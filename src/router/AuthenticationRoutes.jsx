import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/auth.css";
import { useOutletContext } from "react-router-dom";

function AuthenticationRoutes() {
  const context = useOutletContext();
  const [unVerifiedUser, setUnVerifiedUser] = React.useState({});
  const authContext = {
    ...context,
    unVerifiedUser,
    setUnVerifiedUser,
  };
  return (
    <div className="min-h-screen w-screen col">
      <Outlet context={authContext} />
    </div>
  );
}

export default AuthenticationRoutes;
