import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";


import { Outlet } from 'react-router-dom';
import DashboardView from "../Components/dashboard/DashboardView";

export default function Product()

{
    const columns= [
        {
            name:"Sr.No",
            selector:(row)=>row.id,
        },
        {
            name:"Title",
            selector:(row)=>row.title,
        },
        {
            name:"Category",
            selector:(row)=>row.category,
        },
        {
            name:"Price",
            selector:(row)=>row.price,
        },
        {
            name:"Image",
            selector:(row)=><img  height ={70} width={80} src={ row.image}/>,
        },
        {
            name:"Action",
            cell:(row)=>(
                <button className="btn btn-danger" onClick={()=>handleDelete(row.id)}>Delete</button>
            )
        }

    ];
    const [data, setData]= useState([]);
    const [search, setSearch]= useState('');
    const [filter, setFilter]= useState([]);

    const getProduct=async()=>{
    try{
        const req= await fetch("https://fakestoreapi.com/products");
        const res= await req.json();
        setData(res);
        setFilter(res);
    } catch(error){
       console.log(error);
    }
    }
    useEffect(()=>{
        getProduct();
    }, []);

    useEffect(()=>{
        const result= data.filter((item)=>{
         return item.title.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilter(result);
    },[search]);

   const handleDelete=(val)=>{
    const newdata= data.filter((item)=>item.id!==val);
    setFilter(newdata);
   }
   
   const tableHeaderstyle={
    headCells:{
        style:{
            fontWeight:"bold",
            fontSize:"14px",
            backgroundColor:"#ccc"

        },
    },
   }

    return(

        <div className='basis-[88%]  px-[40px] w-[full] h-[100vh bg-gray-400 overflow-scroll '>
             <DashboardView/>
             <React.Fragment>
         <div className="rounded-lg ">
          
              <DataTable 
              customStyles={ tableHeaderstyle}
              columns={columns}
              data={filter}
              pagination
             
              
              fixedHeader
              
              fixedHeaderScrollHeight='450px'
              highlightOnHover
               actions={
                  <button className="btn btn-success">Export Pdf</button>
             }
               subHeader
                 subHeaderComponent={
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

             }
               
             
              />
         </div>
 
           </React.Fragment>
   
             <div>
               <Outlet></Outlet>
             </div>
       
             
          </div>
    )
}