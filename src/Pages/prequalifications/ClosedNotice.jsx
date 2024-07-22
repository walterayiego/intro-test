import React from 'react';
import { useSelector } from 'react-redux';
import DashboardView from '../../Components/dashboard/DashboardView';
import { BsPerson } from "react-icons/bs";
import Sidebar from '../../Components/sidebar/Sidebar';
import { FaSearch } from 'react-icons/fa';
import { CiFilter } from "react-icons/ci";
import { TbArrowsSort } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const ClosedNotice = () => {
  const recordedDetails = useSelector(state => state.prequalifications.recordedDetails);

  return (
    <div>
      <div className='flex'>
        <div className='basis-[12%] h-[100vh]'>
          <Sidebar />
        </div>
        <div className='px-[10px] basis-[88%] h-[100vh] overflow-scroll bg-[#EAEFF2] '>
          <DashboardView className='' />
          <Link to="/prequalifications" className='text-blue-500 py-[15px] text-3xl font-bold flex items-center '>Pre-qualifications < MdKeyboardArrowRight size={30} className='text-blue-500' /> Open Notice#60065</Link>
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
              {recordedDetails.length > 0 ? (
             <div className="mt-1 w-full">
               <ul>
                  {recordedDetails.map((prequalification) => (
                     <li key={prequalification.id} className="">
                            <Link to={`/prequalifications/${prequalification.id}`}>
                                 <div className='p-[4px] flex items-center my-4'>
                                    <div className='bg-gray-200 rounded-md w-full p-[20px] '>
                                        <div className='flex items-center'>
                                          <div className='basis-[60%]'>
                                             <h2 className=' mb-2 text-[18px] font-semibold '>Prequalification Title : <span className='text-black/45 text-[15px]'> {prequalification.preQualificationTitle}</span></h2>
                                             <div className='my-4'>
                                                <h2 className=' mb-2 text-[15px] font-semibold '>Prequalification Agreement Code : <span className='text-black/45 text-[15px]'> {prequalification.preQualificationCode}</span></h2>
                                                <h2 className=' mb-2 text-[15px] font-semibold'>Procuring Description : <span className='text-black/45 text-[15px]'> {prequalification.description}</span></h2>      
                                                <h2 className=' mb-2 text-[15px] font-semibold'>Tender Fee: <span className='text-black/45 text-[15px]'> {prequalification.tenderFee}</span></h2>                    
                                             </div>
                                             
                                          </div>
                                          <div>
                                            <div className='basis-[30%]'>
                                              <h2 className='text-[16x] font-semibold'>Publish Date:<span className='text-black/40'> {prequalification.publishDate}</span></h2>
                                              <h2 className='text-[16px] mt-2 font-semibold'>Closing Date:<span className='text-black/40'>{prequalification.closingDate}</span></h2>
                                              <h2 className='text-[16px]  mt-2 font-semibold'>Open For :<span className='text-black/40'>{prequalification.openingDate}</span></h2>   
                                           
                                            </div>
                                            <h3 className='font-semibold text-[14px] text-blue-700'>Status:<span className='text-green-500 pl-2 cursor-pointer ' >Open</span></h3>
                                            
                                          </div>
                                          
                                        </div>
                                    </div>
                                    
                             </div>
                             </Link>
                             <div className='w-full p-[20px] '>
                                        <div className='flex items-center'>
                                          <div className='basis-[60%]'>
                                             <h2 className=' mb-2 text-[18px] font-semibold '>Prequalification Title : <span className='text-black/45 text-[15px]'> {prequalification.preQualificationTitle}</span></h2>
                                             <div className='my-4'>
                                                <h2 className=' mb-2 text-[15px] font-semibold '>Prequalification Agreement Code : <span className='text-black/45 text-[15px]'> {prequalification.preQualificationCode}</span></h2>
                                                <h2 className=' mb-2 text-[15px] font-semibold'>Procuring Description : <span className='text-black/45 text-[15px]'> {prequalification.description}</span></h2>      
                                                <h2 className=' mb-2 text-[15px] font-semibold'>Tender Fee: <span className='text-black/45 text-[15px]'> {prequalification.tenderFee}</span></h2>                    
                                             </div>
                                             
                                          </div>
                                          <div>
                                            <div className='basis-[30%]'>
                                              <h2 className='text-[16x] font-semibold'>Publish Date:<span className='text-black/40'> {prequalification.publishDate}</span></h2>
                                              <h2 className='text-[16px] mt-2 font-semibold'>Closing Date:<span className='text-black/40'>{prequalification.closingDate}</span></h2>
                                              <h2 className='text-[16px]  mt-2 font-semibold'>Open For :<span className='text-black/40'>{prequalification.openingDate}</span></h2>   
                                           
                                            </div>
                                            <h3 className='font-semibold text-[14px] text-blue-700'>Status:<span className='text-red-500 pl-2 cursor-pointer ' >Closed</span></h3>
                                            
                                          </div>
                                          
                                          
                                        </div>
                                        <div className='flex items-center gap-3 pl-[50px] my-[20px]'>
                                                <button className='px-[30px] py-[10px] flex justify-center border-2 border-black/50 font-bold text-black/50 '>(19) All Responses</button>
                                                <button className='px-[30px] py-[10px] flex justify-center border-2 border-green-600 font-bold text-green-600 '>(9) Unread Responses</button>
                                        </div>
                                        <div>
       
        <div>
           <div className="bg-white p-4">
             <div className='flex items-center justify-between'>
                <h1 className="text-xl font-bold mb-4">Overview</h1>
                <h2 className='text-xl font-bold '>showing 4 of 8 results</h2>
             </div>
            <div>
            <div className=" flex justify-between items-center" >
              <div className="relative mr-3">
                <div className="absolute top-3 left-3 items-center" >
                    <FaSearch/>
                </div>
                 <input
                    type="text"
                    className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                    placeholder="Search "
                    
                  />
              </div>
              <div className='flex items-center pr-[150px] gap-[80px]'>
                <div className='flex items-center justify-center gap-3'>
                  <CiFilter  className='text-xl cursor-pointer'/>
                  <h3 className='text-[16px] font-semibold cursor-pointer'>Filter</h3>
                </div>
                <div className='flex items-center justify-center gap-3'>
                  <TbArrowsSort  className='text-xl cursor-pointer'/>
                  <h3 className='text-[16px] font-semibold cursor-pointer'>Sort</h3>
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
           
           <Link to ="/NoticeApplications" className='bg-gray-50 my-4'>
            <div className='flex justify-center p-[20px]'>
               <div className='basis-[20%] flex justify-between'>
                <div className='bg-blue-600 w-[15px] h-[200px]'></div>
                 <div>
                  <MdPersonOutline className='text-blue-700 flex items-center justify-center mt-[80px]' size={100}/>
                 </div>
                 <div className='bg-blue-600 mr-8 w-[8px] h-[30px]'></div>
               </div>
               <div className='basis-[50%]'>
                 <h1 className='text-[16px] font-bold'>In response to</h1>
                 <h1 className='text-xl mt-3  font-bold'>'Pre-qualification Title: Procurement for Medical Equipment..'</h1>
                 <h1 className='text-xl  mt-3 font-bold'>Supplier:<span className='text-black/50'>Kenyatta National Hospital</span></h1>
                 <h2 className='text-[14px]   mt-3 font-semibold text-black'>Response  Code <span className='text-black/35'>ex675885</span></h2>
               </div>

               <div className='basis-[30%] flex justify-between'>
                  <button className='w-[120px] h-[40px] items-center  mt-[130px] border-blue-700 bor-2 flex justify-center border-2 font-bold text-blue-700 '>Preview </button>
                  <BsThreeDots className='text-blue-700 mr-[20px]' size={40}/>
               
               </div>
            </div>
           </Link>
          
         </div>
           </div>
        </div>
      </div>
    </div>

                                        
                                 
                    </li>
               ))}
        </ul>
      </div>
   
         ) : (
            <p>No prequalifications available.</p>
          )}
    
              </div>
              
                 
               
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default ClosedNotice
