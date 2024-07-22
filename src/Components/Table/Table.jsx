import React, { useState } from "react";
import TableHeads from "./TableData";
import { Checkbox, Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DropDown from "../DropDown";
import Loading from "../Loading";

const editTender = ["Edit Tender", "Take Down Tender", "Postpone Tender"];

function Table({ data }) {
  const [checked, setChecked] = React.useState(false);
  const [state, setState] = useState(data);
  const [noOfRows, setNoOfRows] = React.useState(5);

  return (
    <>
      {state ? (
        <div className="relative w-full  ">
          <div className="text-primary sticky bg-background h-[7vh] w-full text-sm row items-center justify-between">
            <div className="w-[3vw]">
              <Checkbox
                color="primary"
                checked={checked}
                onChange={(e) => setChecked(!checked)}
                inputProps={{
                  "aria-label": "select all desserts",
                }}
              />
            </div>
            <TableHeads />
          </div>
          <div className="max-h-[60vh] overflow-auto">
            {state?.slice(0, noOfRows)?.map((row, index) => (
              <div
                key={index}
                className="w-full row items-center justify-between table-row"
              >
                <div>
                  <Checkbox color="primary" checked={checked} />
                </div>

                <div className="py-2 col space-y-3 w-[30%]">
                  <p className="border-yellow-800 border w-1/2 text-center rounded-lg px-1 mx-3">
                    {row.category}
                  </p>
                  <div className="row gap-1 whitespace-nowrap">
                    <p className="">Customer Name:</p>
                    <p className="text-primary">Kenyatta Referral Hospital</p>
                  </div>
                  <div className="row gap-1 whitespace-nowrap">
                    <p className="">Tender ID:</p>
                    <p className="text-primary">1234234</p>
                  </div>
                </div>
                {/* <div className="w-[10vw]">{row.responses}</div> */}
                <p className="max-w-fit p-2">{row.closingDate}</p>
                <div className="h-fit py-2 w-[32%]">
                  <div className="row justify-between my-2 text-[0.7em]">
                    <div className="row items-center gap-1">
                      <FolderOpenIcon /> <p>3 Docs</p>
                    </div>
                    <div className="whitespace-nowrap row gap-1">
                      <p className="">Pre-qualification:</p>
                      <p className="text-green-700">Required</p>
                    </div>
                  </div>
                  <div className="p-2 col justify-center w-full">
                    <div className="row gap-1">
                      <p className="">Tender Details:</p>
                      <p className="text-primary">Pre-qualification (1 Year)</p>
                    </div>
                    <div className="row gap-1">
                      <p className="">Location: </p>
                      <p className="text-primary">Kiambu, Kenya</p>
                    </div>
                  </div>
                </div>
                <div className="row-center p-2">
                  <p>Actions:</p>
                  <DropDown
                    title={
                      <p className="bg-[#E8EBF1] text-primary mx-2 p-1">
                        Edit Tender <ArrowDropDownIcon />
                      </p>
                    }
                  >
                    <div className="bg-background col items-start">
                      {editTender.map((action, index) => (
                        <button
                          key={index}
                          className=" p-2 border border-white "
                          onClick={() => {}}
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </DropDown>
                </div>
              </div>
            ))}
          </div>
          <div className="h-[5vh] w-full row justify-end items-center ">
            <p> Rows per page</p>
            <DropDown
              Class="text-primary mx-2 self-center"
              title={
                <>
                  {noOfRows} <ArrowDropDownIcon />
                </>
              }
            >
              <div className="bg-white">
                <MenuItem onClick={() => setNoOfRows(4)}>5</MenuItem>
                <MenuItem onClick={() => setNoOfRows(9)}>10</MenuItem>
                <MenuItem onClick={() => setNoOfRows(14)}>15</MenuItem>
                <MenuItem onClick={() => setNoOfRows(19)}>20</MenuItem>
              </div>
            </DropDown>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Table;
