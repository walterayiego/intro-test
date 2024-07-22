import React, { useEffect, useState } from "react";
import {
  useOutletContext,
  useLocation,
  Outlet,
  useNavigate,
} from "react-router-dom";

import authService from "../services/auth.service";
import Loading from "../Components/Loading";

function ProtectedRoutes() {
  const context = useOutletContext();
  const { user, setUser, getUser } = context;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (getUser) getUser();

    const timeout = setTimeout(() => {
      navigate("/login"); // Navigate to the login page
    }, 60000 * 20); // 7.5 minutes
    return () => clearTimeout(timeout);
  }, []);

  const values = { ...context, getUser, location };

  return user?.id ? <Outlet context={values} /> : <Loading />;
}

export default ProtectedRoutes;
