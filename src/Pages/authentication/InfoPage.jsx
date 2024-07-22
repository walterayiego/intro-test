import { Button, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function InfoPage() {
  const navigate = useNavigate();
  const { palette } = useTheme();
  return (
    <div className="bg-primary h-screen w-full relative p-[4vw] col">
      <p className="text-2xl font-extralight text-left text-white/50">
        Contact Us
      </p>
      <div className="col justify-around flex-1 my-[2vh] px-[5vw]">
        <h2 className="text-white text-center text-5xl font-bold">
          Taking the hustle out of the tender process.
        </h2>
        <p className="text-sm text-white/35 w-3/4 self-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh
          massa, finibus eu neque a, congue fringilla arcu. Donec et condimentum
          erat. Proin lobortis ut risus at hendrerit. Ut quis tortor eget libero
          faucibus fringilla sed id risus. Ut eget erat sit amet elit semper
          bibendum.
        </p>
        <div className="col-center w-full">
          <div className="row justify-between h-[5vw] w-5/6 self-center">
            <div className="circle">
              <p className="label2">Register</p>
            </div>
            <div className="line" />
            <div className="circle">
              <p className="label2">Get Verified</p>
            </div>
            <div className="line" />
            <div className="circle">
              <p className="label2">Submit Your Tender</p>
            </div>
            <div className="line" />
            <div className="circle">
              <p className="label2">Find a Supplier</p>
            </div>
          </div>
        </div>
        <Button
          onClick={() => navigate("/register")}
          sx={{ backgroundColor: palette.primary.light }}
          className="w-[40vw] h-[10vh] self-center"
          variant="contained"
        >
          Register Now
        </Button>
      </div>
    </div>
  );
}

export default InfoPage;
