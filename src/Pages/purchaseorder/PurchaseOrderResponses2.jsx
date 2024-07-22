import React from 'react';
import DashboardView from '../../Components/dashboard/DashboardView';
import Sidebar from '../../Components/sidebar/Sidebar';
import { FaSearch } from 'react-icons/fa';
import { CiFilter } from 'react-icons/ci';
import { TbArrowsSort } from 'react-icons/tb';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowRight } from 'react-icons/md'


const PurchaseOrderResponses2 = () => {


  return (
    <div>
      <div className='flex'>
        <div className='basis-[12%] h-[100vh]'>
          <Sidebar />
        </div>
        <div className='px-[10px] basis-[88%] h-[100vh] overflow-scroll bg-[#EAEFF2] '>
          <DashboardView className='' />
          <h4 className='text-[#0437F2]  py-[15px] text-3xl font-bold flex  '>Purchase Order < MdKeyboardArrowRight size={45} className='text-[#0437F2] font-bold' /> Responses </h4>
          <div className='flex justify-between mt-[25px]   gap-4 '>
            <Link to="/purchaseorderresponses1" className='border-2 border-blue-700 w-[600px] rounded-md h-[110px] cursor-pointer '>
              <h3 className='text-[#0437F2] text-[16px]  py-[15px] font-bold  text-right pr-[20px]'>On Going(6)</h3>
              <h2 className='text-[#0437F2] text-2xl pl-[20px] font-bold'> Grouped by Tender</h2>
            </Link>
            <div className='bg-[#0000FF] w-[600px] rounded-md h-[110px] cursor-pointer'>
              <h2 className='text-white  text-2xl px-[25px] mt-[60px] font-bold'> All Purchase Order Responses</h2>
            </div>
          </div>
          <div className='mr-[120px] my-[15px]'>
            <div className='bg-[#0437F2] float-right   w-[350px] h-[10px]'></div>
          </div>


          <div>
            <div className="mt-[60px]  p-4">
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
                <div className='bg-white my-[30px] p-[10px]'>





                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseOrderResponses2