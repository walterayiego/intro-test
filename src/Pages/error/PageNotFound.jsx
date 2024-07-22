import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.error("Page Not Found, Redirecting to Home Page...");
    const clearTimeOut = setTimeout(() => {
      navigate("/home");
    }, 5000);
    return () => {
      clearTimeout(clearTimeOut);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Page Not Found
        </h1>
        <p className="mb-8 text-gray-600">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
