import React from 'react';
import DashboardView from '../../Components/dashboard/DashboardView';
import Sidebar from '../../Components/sidebar/Sidebar';
import { FaSearch } from 'react-icons/fa';
import { CiFilter } from "react-icons/ci";
import { TbArrowsSort } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch/useFetch';

const ClosedPrequalificationId = () => {
  const { id } = useParams();
  const { data: prequalification, isPending, error } = useFetch(`http://localhost:8800/prequalifications/${id}`);
  return (
    <div>
      <div className='flex'>
        <div className=''>
          <Sidebar />
        </div>
        <div className='px-[10px] basis-[88%] min-h-screen bg-[#EAEFF2] '>
          <DashboardView className='mr-[15px]' />
          <Link to="/prequalifications" className='text-blue-500 ml-[20px]  py-[15px] text-3xl font-bold flex items-center '>Pre-qualifications < MdKeyboardArrowRight size={40} className='text-blue-500 font-bold' /> Responses < MdKeyboardArrowRight size={40} className='text-blue-500 font-bold' /> id 60065</Link>
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
              <div className=' my-[30px] p-[25px]'>

                <div className="mt-1 w-full">
                  <ul>

                    <li className="">
                      <div className='w-full p-[20px] '>
                        <div className='bg-gray-50 my-4 rounded-md shadow-md'>
                          <div className='flex justify-center p-[20px]'>
                            <div className='basis-[20%] flex justify-between'>
                              <div className='bg-blue-600 w-[15px] h-[200px]'></div>
                              <div>
                                <MdPersonOutline className='text-blue-700 flex items-center justify-center mt-[80px]' size={100} />
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
                              <BsThreeDots className='text-blue-700 mr-[20px]' size={40} />
                            </div>
                          </div>
                        </div>

                        <div>
                        </div>
                        <div>
                          <div className=''>
                            {isPending && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                            {prequalification && (
                             <article>
                             <div className='mx-[3px]  my-[3px]'>
                               </div>
                                <div className='mx-[20px]  my-[20px]'>
                                  <div className=' p-[30px]'>
                                    <div className='flex justify-between  gap-4'>
                                      <div className='basis-[70%]'>
                                        <h1 className='text-xl font-bold my-[10px]'>Prequalification Title:{prequalification.title}</h1>
                                        <h1 className='text-[15px] mb-2 font-bold my-[10px]'>Prequalification Code : {prequalification.prequalificationCode}</h1>
                                        <h1 className='text-[15px]  mb-2 font-bold my-[10px]'>Procuring Entity:{prequalification.procuringEntity}</h1>
                                        <div className='flex mt-[40px]   gap-2'>
                                          <button className='border-[2px] border-black/35  px-[60px] py-[10px]'>
                                            <h1 className='font-bold text-black/35'>(19) All Responses</h1>
                                          </button>
                                          <button className='border-[2px] border-green-400 items-center justify-center px-[60px] py-[10px]'>
                                            <h1 className='font-bold text-green-400'>(9) Unread Responses</h1>
                                          </button>
                                        </div>
                                      </div>
                                      <div className='basis-[30%] ml-[120px]'>
                                        <h1 className='text-[15px] font-bold my-[10px]'>Publish Date: {prequalification.publishDate}</h1>
                                        <h1 className='text-[15px] mb-2 font-bold my-[10px]'>Closing Date: {prequalification.closingDate}</h1>
                                        <h1 className='text-[15px]  mb-2 font-bold my-[10px]'>Open For: 9 more days</h1>
                                        <h1 className='text-[15px]  mb-2 font-bold my-[10px]'>Status:Open</h1>

                                      </div>
                                    </div>

                                  </div>
                                </div>
                                <div>
                                </div>

                              </article>

                            )}

                          </div>
                          <h2 className=' mb-2 text-[15px] font-semibold'>Financial Year: <span className='text-black/45 text-[15px]'> 2023-2024</span></h2>
                        </div>

                        <div className='flex items-center  justify-between gap-3  my-[20px]'>
                          <div className=''>
                            <h2 className=' mb-2 text-[15px] font-semibold'>Tender Fee : <span className='text-black/45 text-[15px]'>KES O</span></h2>
                            <h2 className=' mb-2 text-[15px] font-semibold'>Public Link: <span className='text-black/45 text-[15px] cursor-pointer'>https://info.co.ke/KNH...</span></h2>
                          </div>
                          <div className='mr-[145px]'>
                            <h2 className=' mb-2 text-[15px] font-semibold flex items-center gap-2 cursor-pointer'>Visit Supplier Profile: <span className=''></span><MdPersonOutline size={30} className='text-blue-700' /></h2>
                            <h2 className=' mb-2 text-[15px] font-semibold flex items-center gap-2 cursor-pointer'>Contact Supplier: <span className=''></span><BsFillChatLeftDotsFill size={30} className='text-blue-700' /></h2>
                          </div>

                        </div>
                        <div>
                          <textarea
                            className='font-bold border-2 text-black p-2 border-blue-700  text-[15px] outline-none'
                            placeholder="Response Note:"
                            rows={2}
                            cols={120}
                          />
                        </div>
                        <div>
                          <div className='flex items-center mx-auto px-[20px] my-9 gap-[70px]'>

                            <Link to="/prequalificationresponseId" className='px-[30px] py-[10px] flex  mx-auto justify-center border-2  border-blue-700 font-bold text-blue-700 '>Reviews</Link>

                          </div>
                        </div>
                        <div>
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

export default ClosedPrequalificationId