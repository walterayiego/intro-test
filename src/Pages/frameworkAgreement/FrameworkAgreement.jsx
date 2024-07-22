import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

import Categories from "../../Components/Categories";
import DialogComponent from "../../Components/DialogComponent";
import PrequalificationForm from "../prequalifications/components/PrequalificationForm";
import PrequalificationTable from "../prequalifications/components/PrequalificationTable";
import UpdateForm from "../prequalifications/components/UpdateForm";
import agreementsService from "../../services/agreements.service";

const FrameworkAgreement = () => {
  const [update, setUpdate] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({ start: 0, length: 100, order: "desc" });

  const fetchData = async () => {
    let response = await agreementsService.getAgreements(query);
    if (!response) return;

    let result = await response.data;
    setData(result?.data);
    console.log(result);
  };

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, [query, update, openForm]);

  const show = () => setOpenForm(!openForm);

  const navigate = useNavigate();

  return (
    <div className="px-[10px] flex-1 w-full ">
      <div className="w-full">
        <div className="white-card row justify-between">
          <h2 className="text-3xl font-semibold">Framework Agreements</h2>
          <button
            onClick={show}
            className="row-center bg-background w-fit p-2 font-semibold text-lg"
          >
            <p className="">Submit Framework Agreements</p>
            <AddIcon
              fontSize="large"
              className="text-green font-extrabold text-2xl"
            />
          </button>
        </div>
        <div className="row gap-3 justify-between my-2">
          <Button
            onClick={() => navigate("closed")}
            variant="outlined"
            className="shadow-sm shadow-black "
          >
            View Closed Framework Agreements
          </Button>
          <Button
            onClick={() => navigate("approved-suppliers")}
            variant="outlined"
            className="shadow-sm shadow-black "
          >
            <PersonOutlineIcon /> Bookmarked Suppliers
          </Button>
        </div>
        <h3 className="white-card text-xl font-bold">
          Open Framework Agreements
        </h3>
        <Categories />
        <PrequalificationTable
          data={data}
          setOpenForm={setOpenForm}
          setUpdate={setUpdate}
        />
      </div>
      <DialogComponent
        open={openForm}
        styles="drop-shadow-lg"
        setOpen={setOpenForm}
        children={
          update ? (
            <UpdateForm show={show} update={update} />
          ) : (
            <PrequalificationForm show={show} />
          )
        }
        config={{ fullScreen: true }}
      />
    </div>
  );
};

export default FrameworkAgreement;
