import React from "react";

function Categories() {
  return (
    <div className="white-card">
      <div className="row justify-between">
        <p className="text-xl font-semibold">Categories</p>
        <p className="bg-[] p-2 ">Showing 6 of 6 Results</p>
      </div>
      <div className="row justify-between ">
        <div className="bg-primaryLight w-1" />
        <div className="row space-x-3 text-whit flex-1 ml-2">
          <p className="border border-[#032CA6] p-2 rounded-lg">Construction</p>
          <p className="border border-[#021E73] p-2 rounded-lg">Hosipitality</p>
          <p className="border border-[#F28F38] p-2 rounded-lg">Health</p>
          <p className="border border-[#BF1304] p-2 rounded-lg">Manufacturing</p>
          <p className="border border-[#400101] p-2 rounded-lg">Farming</p>
        </div>
        <div className="bg-primaryLight w-1" />
      </div>
    </div>
  );
}

export default Categories;
