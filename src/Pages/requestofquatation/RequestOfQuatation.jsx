import React from 'react';
import { useSelector } from 'react-redux';
import DashboardView from '../../Components/dashboard/DashboardView';
import Sidebar from '../../Components/sidebar/Sidebar';
import { FaSearch } from 'react-icons/fa';
import { CiFilter } from "react-icons/ci";
import { TbArrowsSort } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const RequestOfQuatation= () => {
  const recordedDetails = useSelector(state => state.prequalifications.recordedDetails);

  return (
    <div>
      <div className='flex'>
        <div className='basis-[12%] h-[100vh]'>
          <Sidebar />
        </div>
        <div className='px-[10px] basis-[88%] h-[100vh] overflow-scroll bg-[#EAEFF2]  '>
          <DashboardView  />
           <div className=''>
             <h2 className='text-3xl text-[#3b3bff] font-bold my-[25px]'>Request For Quatation</h2>
              <div className='flex  w-full justify-between '>
                <div className='bg-[#E8E9EB] w-[850px]  shadow-md rounded-md'>
                   <Link to="/requestofquatationresponses1" className='p-[20px]'>
                      <h3 className='text-black/75   text-right  px-[20px] font-bold'>Check Responses<span className='text-blue-500'>(8)</span></h3>
                       <h2 className='text-blue-700 text-xl mt-[35px]  px-[20px] font-bold '>RFQ Responses</h2>
                   </Link >
                </div>
                <div className='basis-[35%]  ml-[60px] flex flex-col justify-between '>
                     <Link to="/requestofquatationresponses2" className='bg-black/75 w-[420px] py-[15px] rounded-xl text  items-center flex justify-center text-white'> View Pre-qualified Suppliers</Link>
                     <Link to ="/approvedsuppliers" className='bg-blue-700 w-[420px] py-[15px] mt-[20px] rounded-xl text items-center flex justify-center text-white'> View Approved Framework Of Agreement</Link>
                </div>
              </div>
              
           </div>
           <div className='my-[30px] '>
                   <h2 className='text-blue-700 text-3xl font-bold'>Open RFQS</h2>
                 </div>
           
           <div className=" p-4 my-[25px]  bg-white">
                 
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
                </div>              
           </div>
           <div className='my-[30px] '>
                   <h2 className='text-blue-700 text-3xl font-bold'>Closed RFQS</h2>
            </div>
           <div className=" p-4 my-[45px]  bg-white">
                 
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
                 </div>              
             </div>
        </div>
     </div>
   </div>
 
      
  );
};

export default RequestOfQuatation
