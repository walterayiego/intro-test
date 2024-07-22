import React from 'react';

import DashboardView from '../../Components/dashboard/DashboardView';
import Sidebar from '../../Components/sidebar/Sidebar';
import { FaSearch } from 'react-icons/fa';
import { CiFilter } from "react-icons/ci";
import { TbArrowsSort } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link} from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { useParams } from 'react-router-dom';
const ClosedPrequalifications = () => {
  const {id} = useParams();
  return (
    <div>
     <div className='flex'>
        <div className=''>
          <Sidebar className="" />
        </div>
        <div className='px-[10px] basis-[88%] min-h-screen  bg-[#EAEFF2] '>
        <DashboardView className='' />
        <Link to="/prequalifications" className='text-blue-500  px-[20px] py-[15px] text-3xl font-bold flex items-center '>Pre-qualifications < MdKeyboardArrowRight size={30} className='text-blue-500 font-bold' /> Closed Pre-qualification</Link>
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
            <div className='my-[30px] p-[25px]'>
            
           <div className="mt-1 w-full">
             <ul>
          
                   <li  className="">  
                           <div className='w-full p-[20px] '>
                              <div className='bg-[#F5F5F5F5] my-4 rounded-md shadow-md'>
                              <Link to={`/closedprequalification/${id}`}>
                                    <div className='flex justify-between'>
                                       <div className='basis-[20%] flex justify-between'>
                                           <div className='bg-blue-600 w-[15px] h-30vh ml-[20px]'></div>
                                            <div>
                                                <MdPersonOutline className='text-blue-700 flex items-center justify-center mt-[120px]' size={100}/>
                                            </div>
                                            <div className='p-[20px]'>
                                                  <div className='bg-blue-600 mr-8 w-[8px] h-[60px]'></div>
                                            </div>
                                                 
                                     </div>
                                      <div className=' py-[20px] basis-[50%]'>
                                         <h1 className='text-[16px] font-bold'>In response to</h1>
                                         <h1 className='text-xl mt-3  font-bold'>Pre-qualification Title: Procurement for Medical Equipment..'</h1>
                                         <h1 className='text-xl  mt-3 font-bold'>Supplier:<span className='text-black/50'>Kenyatta National Hospital</span></h1>
                                         <h2 className='text-[14px]   mt-3 font-semibold text-black'>Response  Code <span className='text-black/35'>ex675885</span></h2>
                                     </div>

                                     <div className=' p-[20px] basis-[30%]'>
                                       <div>
                                           <div className='ml-[150px]'>
                                                  <BsThreeDots className='text-blue-700 ml-[150px]' size={40}/>
                                                  <h2 className='text-[17px] mt-[15px] flex items-center font-medium text-blue-700'>Status:<span className='text-green-500 ml-3'>Approved</span></h2>
                                           </div>

                                       </div>
                                       <div className='mb-[40px]'>
                                          <button className='w-[120px] h-[40px] items-center ml-[200px]  mt-[50px] border-blue-700 bor-2 flex justify-center border-2 font-bold text-blue-700 '>Preview </button>
                                       </div>
                                       <div>

                                       </div>
                                      
                                    </div>
                                   </div>
                                    
                                  </Link>
                                 
                               </div>
                               <div className='bg-[#F5F5F5F5] my-4 rounded-md shadow-md'>
                                  <Link to = "/closedprequalificationId" className=''>
                                    <div className='flex justify-between'>
                                       <div className='basis-[20%] flex justify-between'>
                                           <div className='bg-blue-600 w-[15px] h-30vh ml-[20px]'></div>
                                            <div>
                                                <MdPersonOutline className='text-blue-700 flex items-center justify-center mt-[120px]' size={100}/>
                                            </div>
                                            <div className='p-[20px]'>
                                                  <div className='bg-blue-600 mr-8 w-[8px]  h-[60px]'></div>
                                            </div>
                                                  
                                       </div>
                                      <div className=' py-[20px] basis-[50%]'>
                                         <h1 className='text-[16px] font-bold'>In response to</h1>
                                         <h1 className='text-xl mt-3  font-bold'>Pre-qualification Title: Procurement for Medical Equipment..'</h1>
                                         <h1 className='text-xl  mt-3 font-bold'>Supplier:<span className='text-black/50'>Kenyatta National Hospital</span></h1>
                                         <h2 className='text-[14px]   mt-3 font-semibold text-black'>Response  Code <span className='text-black/35'>ex675885</span></h2>
                                     </div>

                                     <div className=' p-[20px] basis-[30%]'>
                                       <div>
                                           <div className='ml-[150px]'>
                                                  <BsThreeDots className='text-blue-700 ml-[150px]' size={40}/>
                                                  <h2 className='text-[17px] mt-[15px] flex items-center font-medium text-blue-700'>Status:<span className='text-green-500 ml-3'>Approved</span></h2>
                                           </div>

                                       </div>
                                       <div className='mb-[40px]'>
                                          <Link className='w-[120px] h-[40px] items-center ml-[200px]  mt-[50px] border-blue-700 bor-2 flex justify-center border-2 font-bold text-blue-700 '>Read More ...</Link>
                                       </div>
                                      
                                    </div>
                                   </div>
                                    
                                  </Link>
                                 
                               </div>
                            
                            
                     </div>

                                      
                               
                  </li>
           
      </ul>
    </div>
 
            </div>
            
               
             
                
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ClosedPrequalifications