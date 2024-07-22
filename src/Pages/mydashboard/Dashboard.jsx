import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Categories from "../../Components/Categories";
import Table from "../../Components/Table/Table";
import { rows } from "../table/TableFunctions";
import { Button } from "@mui/material";

const Dashboard = () => {
  return (
    <div className="w-full h-fit px-[1vw]">
      <h2 className="white-card text-3xl font-semibold">My Dashboard</h2>
      <div className="row gap-3 justify-between my-2">
        <Button variant="outlined" className="shadow-sm shadow-black ">
          View Pre-qualified Suppliers
        </Button>
        <Button variant="outlined" className="shadow-sm shadow-black ">
          View Approved Framework of Agreements
        </Button>
        <Button variant="outlined" className="shadow-sm shadow-black ">
          <PersonOutlineIcon /> Bookmarked Suppliers
        </Button>
      </div>
      <h2 className="white-card text-3xl font-semibold">Open Tenders</h2>

      <Categories />
      <Table data={rows} />

      <h2 className="white-card text-3xl font-semibold">Closed Tenders</h2>
      <Categories />
      <Table data={rows} />
    </div>
  );
};

export default Dashboard;
