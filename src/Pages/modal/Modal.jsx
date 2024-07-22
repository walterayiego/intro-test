import React, { useState } from 'react';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    preQualificationCode: '',
    publishDate: '',
    openingDate: '',
    closingDate: '',
    preQualificationTitle: '',
    procurementMethod: '',
    tenderFee: '',
    description: '',
  });
  const [recordedDetails, setRecordedDetails] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Record the details
    setRecordedDetails((prevDetails) => [...prevDetails, formData]);
    // Close the modal
    closeModal();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={openModal}
      >
        Add
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded w-[50%]">
            <h2 className="text-2xl font-bold mb-4">Add Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
              <div className="mb-4">
                    <label htmlFor="preQualificationCode" className="block text-sm font-medium text-gray-600">
                        Pre-qualification Code
                    </label>
                    <input
                       type="text"
                       id="preQualificationCode"
                       name="preQualificationCode"
                       value={formData.preQualificationCode}
                       onChange={handleChange}
                       className="mt-1 p-2 border rounded-md w-full"
                   />
             </div>
             <div className="mb-4">
                   <label htmlFor="publishDate" className="block text-sm font-medium text-gray-600">
                      Publish Date
                   </label>
                  <input
                     type="date"
                      id="publishDate"
                      name="publishDate"
                      value={formData.publishDate}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded-md w-full"
                   />
             </div>
           </div>
           <div className="grid grid-cols-2 gap-3">
                  <div className="mb-4">
                      <label htmlFor="openingDate" className="block text-sm font-medium text-gray-600">
                        Opening Date
                     </label>
                     <input
                        type="date"
                        id="openingDate"
                        name="openingDate"
                        value={formData.openingDate}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded-md w-full"
                     />
                </div>
                <div className="mb-4">
                   <label htmlFor="closingDate" className="block text-sm font-medium text-gray-600">
                       Closing Date
                   </label>
                   <input
                     type="date"
                     id="closingDate"
                     name="closingDate"
                     value={formData.closingDate}
                     onChange={handleChange}
                     className="mt-1 p-2 border rounded-md w-full"
                   />
               </div>
           </div>
           <div className="grid grid-cols-2 gap-3">
                
                 <div className="mb-4">
                        <label htmlFor="preQualificationTitle" className="block text-sm font-medium text-gray-600">
                           Prequalification Title
                        </label>
                    <input
                      type="text"
                      id="preQualificationTitle"
                      name="preQualificationTitle"
                      value={formData.preQualificationTitle}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded-md w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="procurementMethod" className="block text-sm font-medium text-gray-600">
                      Procurement Method
                    </label>
                    <select
                        id="procurementMethod"
                     name="procurementMethod"
                     value={formData.procurementMethod}
                     onChange={handleChange}
                     className="mt-1 p-2 border rounded-md w-full"
                    >
                    <option value="">Select...</option>
                    <option value="method1">Method 1</option>
                    <option value="method2">Method 2</option>
          
                 </select>
      </div>
           </div>
           <div className="grid grid-cols-2 gap-3">
             <div className="">
                <label htmlFor="tenderFee" className="block text-sm font-medium text-gray-600">
                  Tender Fee
                </label>
               <input
                    type="text"
                    id="tenderFee"
                    name="tenderFee"
                    value={formData.tenderFee}
                    onChange={handleChange}
                   className="mt-1 p-2 border rounded-md w-full"
               />
            </div>
            <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                   Description
                 </label>
                 <textarea
                   id="description"
                   name="description"
                   value={formData.description}
                   onChange={handleChange}
                   className="mt-1 p-2 border rounded-md w-full"
                 >            </textarea>
            </div>
           </div>
           
              
              <div className="flex mt-3 justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Recorded Details */}
      <div className="mt-4 w-[50%] ">
        <h2 className="text-xl font-bold mb-2">Recorded Details:</h2>
        <ul>
          {recordedDetails.map((detail, index) => (
            <li key={index} className="mb-2">
              <div className='bg-white shadow-md mb-4  w-full rounded-md px-[25px]'>
                <div className='flex justify-between items-center gap-3 '>
                   <div>
                      <h1 className='text-2xl text-black/50  font-bold'> Pre-qualification Title: {detail.preQualificationTitle}</h1> 
                   </div>
                    
                    <div className='mt-4'>
                        <h2 className='text-[16x] font-semibold'>Publish Date:<span className='text-black/40'> {detail.publishDate}</span><br/></h2> 
                        <h2 className='text-[16px] font-semibold'>Closing Date:<span className='text-black/40'>{detail.closingDate}</span><br/></h2>
                        <h2 className='text-[16px] font-semibold'>Open For :<span className='text-black/40'>{detail.openingDate}</span></h2> 
                    </div>
                     
                </div>
                
                <div className='flex justify-between items-center gap-3 '>
                  <div className=''>
                      <h2 className=' mb-2 text-[15px] font-semibold '>Prequalification Agreement Code : <span className='text-black/45 text-[15px]'> {detail.preQualificationCode}</span></h2> 
                      <h2 className=' mb-2 text-[15px] font-semibold'>Procuring Entity : <span className='text-black/45 text-[15px]'> {detail.procurementMethod}</span></h2> 
                  </div>
                  <div>
                    <h3 className='font-semibold text-[14px] text-blue-700'>Status:<span className='text-green-500 pl-2'>Open</span></h3>
                  </div>
                     
                </div>
                
              </div> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;