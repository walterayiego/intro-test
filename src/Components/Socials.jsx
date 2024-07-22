import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { TiktokIcon, TwitterIcon } from "../assets/svgs";
import { IconButton } from "@mui/material";
import XIcon from '@mui/icons-material/X';

const icons = [
  {
    name: "Facebook",
    icon: <FacebookIcon color="#fff" fontSize="large" />,
    link: "",
  },
  { name: "LinkedIn", icon: <LinkedInIcon fontSize="large" />, link: "" },
  { name: "Instagram", icon: <InstagramIcon />, link: "" },
  {
    name: "Tiktok",
    icon: <TiktokIcon width="24px" height="24px" fill="#fff" />,
    link: "",
  },
  {
    name: "Twitter",
    icon: <XIcon />,
    link: "",
  },
];

function Socials() {
  return (
    <>
      {icons.map((icon, index) => (
        <IconButton
          key={index}
          aria-label={icon.name}
          href={icon.link}
          target="_blank"
        >
          <div className="text-white">{icon.icon}</div>
        </IconButton>
      ))}
    </>
  );
}

export default Socials;
