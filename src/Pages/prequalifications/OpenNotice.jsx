import React from 'react';
import DashboardView from '../../Components/dashboard/DashboardView';
import Sidebar from '../../Components/sidebar/Sidebar';
import { FaSearch } from 'react-icons/fa';
import { CiFilter } from "react-icons/ci";
import { TbArrowsSort } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdPersonOutline } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch/useFetch';
const OpenNotice = () => {
  return (
    <div>
      <div className='flex'>
        <div className=''>
          <Sidebar className="" />
        </div>
        <div className='px-[10px] basis-[88%] min-h-screen  bg-[#EAEFF2] '>
          <DashboardView className='' />
          <Link to="/prequalifications" className='text-blue-500 py-[15px] text-3xl font-bold flex items-center '>Pre-qualifications < MdKeyboardArrowRight size={30} className='text-blue-500' /> Open Notice {id}</Link>
          <div className=" p-4">
            <div className='flex items-center justify-between'>
              <h1 className="text-xl font-bold mb-4">Overview</h1>
              <h2 className='text-xl font-bold '>showing 4 of 8 results</h2>
            </div>
            <div>
              <div className=" flex justify-between items-center" >
                <div className="relative mr-3">
                  <div className="absolute top-3 left-3 items-center" >
                    <FaSearch />
                  </div>
                  <input
                    type="text"
                    className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                    placeholder="Search "
                  />
                </div>
                <div className='flex items-center pr-[150px] gap-[80px]'>
                  <div className='flex items-center justify-center gap-3'>
                    <CiFilter className='text-xl cursor-pointer' />
                    <h3 className='text-[16px] font-semibold cursor-pointer'>Filter</h3>
                  </div>
                  <div className='flex items-center justify-center gap-3'>
                    <TbArrowsSort className='text-xl cursor-pointer' />
                    <h3 className='text-[16px] font-semibold  cursor-pointer'>Sort</h3>
                  </div>
                </div>
              </div>
              <div className='my-4'>
                <div className='flex items-center justify-between '>
                  <h2>Categories</h2>
                  <div className='bg-blue-600 w-[4px] h-[30px]'></div>
                  <div>
                    <FaArrowRightLong />
                  </div>
                  <h2 className='font-bold border-r-2 p-2 border-indigo-300 h-7 flex items-center'>Construction</h2>
                  <h2 className='font-bold border-r-2 p-2 border-indigo-300 h-7 flex items-center'>Hospitality</h2>
                  <h2 className='font-bold border-r-2 p-2 border-indigo-300 h-7 flex items-center'>Food</h2>
                  <h2 className='font-bold border-r-2 p-2 border-indigo-300 h-7 flex items-center'>Construction</h2>
                  <h2 className='font-bold border-r-2 p-2 border-indigo-300 h-7 flex items-center'>Hospitality</h2>
                  <h2 className='font-bold border-r-2 p-2 border-indigo-300 h-7 flex items-center'>Food</h2>
                  <h2 className='font-bold border-r-2 p-2 border-indigo-300 h-7 flex items-center'>Construction</h2>
                  <div className='bg-blue-600 w-[4px] h-[30px]'></div>
                  <div>
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
              <div className='bg-white my-[30px] p-[25px]'>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default OpenNotice
