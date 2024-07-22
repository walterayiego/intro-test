import React from 'react'
import {Link} from "react-router-dom"
const PrequalificationList = ({prequalifications,title}) => {
    
  return (
    <div>
             <div>
            
          {prequalifications.map((prequalification) => {
              return (
                  <div key={prequalification.id} >
                         
                          <div className='mx-[20px]  my-[20px]'>
                              <div className='bg-[#F8F8F8]  border-l-[10px] border-[#000fff]/80  p-[30px]'>
                              <Link to={`/prequalifications/${prequalification.id}`} className='text-2xl text-[#000fff]/80 font-bold my-2'>{title}</Link>
                                  <div className='flex justify-between  gap-4'>
                                      <div className='basis-[70%]'>
                                          <h1 className='text-xl text-black/65 font-bold my-[10px]'>Prequalification Title:{prequalification.title}</h1>
                                          <h1 className='text-[15px] mb-2 font-bold my-[10px]'>Prequalification Code <span className='text-black/45'>: {prequalification.uniqueCode}</span></h1>
                                          <h1 className='text-[15px]  mb-2 font-bold my-[10px]'>Procuring Entity:<span className='text-black/45'>{prequalification.procuringEntity}</span></h1>
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
                                          <h1 className='text-[15px] font-bold my-[10px]'>Publish Date: <span className='text-black/45'> {prequalification.publishDate}</span></h1>
                                          <h1 className='text-[15px] mb-2 font-bold my-[10px]'>Closing Date:<span className='text-black/45'> {prequalification.closingDate}</span></h1>
                                          <h1 className='text-[15px]  mb-2 font-bold my-[10px]'>Open For: 9 more days</h1>
                                          <h1 className='text-[15px]  mb-2 font-bold my-[10px]'>Status: {prequalification.status == 0 ? "Open": "Closed"}</h1>
                                          <button className='border-[2px]  mt-[5px] border-green-400 px-[60px] py-[10px]'>
                                               <h1 className='font-bold text-[#000fff]'> Preview Responses</h1> 
                                          </button>
                                      </div>
                                  </div>
                                  {/*<button onClick={()=>handleDelete(prequalification.id)} className='bg-[#3d3f5e] my-[10px] rounded-xl px-[90px] py-[10px] text-white  flex items-center justify-center font-semibold'>Delete Prequalification</button>*/}
                              </div>
                          </div>
                      
                  </div>
              )
          })}
      </div>
    </div>
  )
}

export default PrequalificationList