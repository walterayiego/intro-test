import React from "react";
import PrimaryBtn from "../../Components/Buttons/PrimaryBtn";
import Logo from "../../Components/Logo";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-primaryLight h-screen w-full  col-center relative p-[4vw]">
      <div className="h-3/4 w-3/4 col justify-around items-center self-center">
        <h1 className="text-5xl font-semibold text-center m-10 text-white">
          Customer Module Navigation
        </h1>
        <Button
          onClick={() => navigate("/infoPage")}
          className="w-[25vw] h-[10vh]"
          variant="contained"
        >
          Start
        </Button>
      </div>
      <div className="absolute bottom-5 w-[10vw] h-[7vh] left-10">
        <Logo />
      </div>
    </div>
  );
}

export default StartPage;
