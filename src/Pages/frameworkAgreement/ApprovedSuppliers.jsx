import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const ApprovedSuppliers = () => {
  return (
    <div className="px-[1vw]">
      <h2 className="text-primaryLight py-[2vh] text-3xl font-bold row items-center ">
        <Link to="/frameworkagreements">Framework Agreement</Link>
        <MdKeyboardArrowRight
          size={45}
          className="text-primaryLight font-bold px-1"
        />
        Approved Suppliers
      </h2>
    </div>
  );
};

export default ApprovedSuppliers;
