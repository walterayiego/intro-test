import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

import Categories from "../../Components/Categories";
import prequalService from "../../services/prequal.service";
import PrequalificationTable from "./components/PrequalificationTable";
import AllModals from "./components/AllModals";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

const headerLinks = [
  { name: "View Pre-qualified Suppliers", link: "prequalified-suppliers" },
  { name: "Approved Framework of Agreements", link: "framework-of-agreements" },
  {
    name: (
      <>
        <PersonOutlineIcon /> Bookmarked Suppliers
      </>
    ),
    link: "prequalified-suppliers",
  },
];

const Prequalifications = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(null);

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState({ start: 0, length: 100, order: "desc" });
  const [openForm, setOpenForm] = useState(false);
  const [openNoticeApplicationForm, setOpenNoticeApplicationForm] =
    useState(false);
  const [noticeDetails, setNoticeDetails] = useState(null);
  const [openResponses, setOpenResponses] = useState(false);
  const [selectedPrequal, setSelectedPrequal] = useState(null);
  const [openPrequalifiedSuppliers, setOpenPrequalifiedSuppliers] =
    useState(false);
  const navigate = useNavigate();
  const { user } = useOutletContext();

  // fetch notices for client's companies
  const fetchData = async (id, queries) => {
    let response = await prequalService.getPrequalsByCompanyId(id, queries);
    if (!response) return;

    let result = await response.data;
    setData(result?.data);
  };
  const fetchAllNotices = async (queries) => {
    let response = await prequalService.getPrequals(queries);
    if (!response) return;

    //fetch all notices if user is supplier
    const fetchAllNotices = async (queries) => {
      let response = await prequalService.getPrequals(queries);
      if (!response) return;

      let result = await response.data;
      setData(result?.data);
      console.log(result, "result");
    };

    const handlePrequalificationForm = () => setOpenForm(!openForm);

    const handleApplicationForm = (params) => {
      setNoticeDetails(params);
      setOpenNoticeApplicationForm(true);
    };

    const handleResponses = (rowSelectedData) => {
      setOpenResponses(!openResponses);
      console.log(rowSelectedData, "row for responses Data");

      setSelectedPrequal(rowSelectedData);
    };

    useEffect(() => {
      if (user.roleName === "supplier") {
        fetchAllNotices(query);
      } else {
        user.companies.map((company) => {
          fetchData(company.id, query);
        });
      }
      console.log("Looded")
      toast.success("Prequalification Notices Loaded Successfully");
    }, [query, update, openForm]);

    return (
      <div className="px-[10px] flex-1 w-full ">
        <div className="w-full">
          <div className="white-card row justify-between items-center">
            <h2 className="text-3xl font-semibold">
              Pre-qualifications Tenders Notice
            </h2>
            <button
              onClick={handlePrequalificationForm}
              className="row-center bg-background w-fit p-2 font-semibold text-lg"
            >
              <p className="">Create Pre-qualification Notice</p>
              <AddIcon
                fontSize="large"
                className="text-green font-extrabold text-2xl"
              />
            </button>
          </div>
          <div className="row gap-3 justify-between my-2">
            {user.roleName === "client" &&
              headerLinks.map((link, index) => {
                return (
                  <Button
                    key={index}
                    onClick={() => {
                      if (link.link === "prequalified-suppliers") {
                        setOpenPrequalifiedSuppliers(true);
                      } else if (link.link === "framework-of-agreements") {
                        navigate("/framework-of-agreements");
                      }
                    }}
                    variant="outlined"
                    className="shadow-sm shadow-black "
                  >
                    {link.name}
                  </Button>
                );
              })}
          </div>

          <Categories />

          <PrequalificationTable
            data={data}
            setOpenForm={setOpenForm}
            handleResponses={handleResponses}
            setUpdate={setUpdate}
            handleApplicationForm={handleApplicationForm}
          />
        </div>
        <AllModals
          notices={data}
          openNoticeApplicationForm={openNoticeApplicationForm}
          openForm={openForm}
          noticeDetails={noticeDetails}
          update={update}
          openResponses={openResponses}
          selectedPrequal={selectedPrequal}
          setUpdate={setUpdate}
          handlePrequalificationForm={handlePrequalificationForm}
          setOpenNoticeApplicationForm={setOpenNoticeApplicationForm}
          setNoticeDetails={setNoticeDetails}
          setOpenResponses={setOpenResponses}
          setOpenForm={setOpenForm}
          openPrequalifiedSuppliers={openPrequalifiedSuppliers}
          setOpenPrequalifiedSuppliers={setOpenPrequalifiedSuppliers}
        />
      </div>
    );
  };
}
export default Prequalifications;
