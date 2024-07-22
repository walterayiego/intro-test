import React, {useEffect,useState} from 'react'
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { FiFilter } from "react-icons/fi";
import { BiSortAlt2 } from "react-icons/bi";
const Table = () => {
    const [search, setSearch] = useState("");
    const [countries,setCountries] =useState([]);
    const [filteredCountries,setFilteredCountries]= useState([]);

   const getCountries = async () =>{
    try{
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
      setFilteredCountries(response.data);

    }catch(error){

    }
   };

   const columns = [
    {
      name: 'Country Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Country Native Name',
      selector: row => row.nativeName,
      sortable: true,
    },
    
    {
        name: 'Tender Code',
        cell: row =><p className=' px-4 flex justify-center text-center'>in60056</p> ,
      
     },
    {
        name: 'Timeline',
        cell: row => <button className='bg-red-500 text-white w-[130px] h-[30px] rounded-xl flex items-center justify-center'>1 Jan 10- Feb 28</button>,
      
     },
    {
        name: 'Status',
        cell: row => <button className='bg-green-500 text-white w-[120px] h-[30px] flex items-center justify-center'>Pre-qualification</button>,
      
     },
     {
        name: 'Priority',
        cell: row => <button className='bg-orange-500 text-white w-[80px] h-[30px] flex items-center justify-center'>Medium</button>,
      
     },
    {
      name: 'Country Capital',
      selector: row => row.capital,
      sortable: true,
    },
    {
      name: 'Country Flag',
      selector: row => <img width={30} height={50} src={row.flag}/>,
    
    },
    
    
  ];
  
  

   useEffect(()=>{
    getCountries();
   }, []);
   useEffect(()=>{
 const result = countries.filter(country=>{
    return country.name.toLowerCase().match(search.toLowerCase());
    
 });
   setFilteredCountries(result)
   
   }, [search]);
 
  return (
    <DataTable
    
    columns={columns} 
    data={filteredCountries} 
    pagination
    fixedHeader
    fixedHeaderScrollHeight='450px'
    subHeader
    subHeaderComponent={
        <div className='flex  w-full gap-[30px]'>
             <div className='basis-[100%]  cursor-pointer '>
                <div className='  '>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-black text-2xl font-bold' >Overview</h2>
                        <h2 className='text-black text-xl font-bold'>showing 4 of 8 results</h2>
                    </div>
                    <div className='mt-[14px] flex items-center w-full'>
                        <h2 className='text-2xl border-black/30  font-bold'>Category:</h2>
                        <div className='border-b-2 border-black flex items-center'>
                            <select  className='outline-none'>
                                <option>Medical and Health </option>
                                <option>Construction</option>
                                <option>Bakery</option>
                            </select>
                          
                          
                        </div>   

                        <form className="max-w-sm mx-6">
                            <div className="relative">
                                      <svg
                                           xmlns="http://www.w3.org/2000/svg"
                                           className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                                             fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                >
                                           <path
                                               strokeLinecap="round"
                                               strokeLinejoin="round"
                                               strokeWidth={2}
                                               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                              />
                                    </svg>
                                    <input
                                           type="text"
                                           placeholder="Search"
                                           className="w-full py-3 pl-12 pr-4 text-gray-500 border-black rounded-md outline-none bg-[#F8F9FC]  focus:bg-white focus:border-indigo-600"
                                           value={search}
                                           onChange={(e)=> setSearch(e.target.value)}
                                    />
                              </div>
                              
                        </form>
                        <div className='flex items-center justify-center gap-2'>
                          <FiFilter size={20} className='font-bold'/>
                          <h3 className='text-xl font-bold'>Filter</h3>
                        </div>
                        <div className=' mx-3 flex items-center justify-center gap-2'>
                          <BiSortAlt2 size={20} className='font-bold'/>
                          <h3 className='text-xl font-bold'>Sort</h3>
                        </div>
                       
                    </div>
                    
                </div>  
               
                
             </div >
          
        </div>
        
    }
    />
  )
}

export default Table