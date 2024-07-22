import React from "react";
import DropDown from "../../../../Components/DropDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "@mui/material";
const editTender = ["Edit Tender", "Take Down Tender", "Postpone Tender"];

const ActionCellsComponent = ({ handleAction, params }) => {
  return (
    <div className="col justify-evenly h-full px-1 leading-none">
      <DropDown
        Class=""
        title={
          <Button
            variant="outlined"
            color="primary"
            className="shadow-black shadow-sm h-fit row-center "
          >
            EDIT <ArrowDropDownIcon fontSize="medium" />
          </Button>
        }
      >
        <div className="bg-background col">
          {editTender.map((action, index) => (
            <button
              key={index}
              className="py-2 border border-white w-full text-left"
              onClick={(event) => handleAction(action, params.row)}
            >
              {action}
            </button>
          ))}
        </div>
      </DropDown>
      <Button
        variant="outlined"
        sx={{ width: "100%" }}
        // color="primary"
        className="shadow-black shadow-sm w-full"
        onClick={(event) => handleAction("Responses", params.row)}
      >
        Applications
      </Button>
    </div>
  );
};

const ActionSupplierCellsComponent = ({ handleAction, params }) => {
  return (
    <div className="col justify-evenly h-full px-3 leading-none">
      <Button
        variant="outlined"
        // color="primary"
        className="w-4/5 shadow-black shadow-sm"
        onClick={(event) => handleAction("Apply", params.row)}
      >
        Apply
      </Button>
    </div>
  );
};

const actionsColumn = async (handleAction, role) => {
  return {
    field: "actions",
    flex: 1,
    minWidth: window.innerWidth * 0.15,
    headerName: "Actions",
    // cellClassName: "leading-none",
    renderCell: (params) =>
      role === "supplier" ? (
        <ActionSupplierCellsComponent
          handleAction={handleAction}
          params={params}
        />
      ) : (
        <ActionCellsComponent handleAction={handleAction} params={params} />
      ),
  };
};

export default actionsColumn;
