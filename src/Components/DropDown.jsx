import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const DropDown = ({ Class, title, children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <button className={Class} onClick={handleButtonClick}>
        {title}
      </button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClick={handleMenuClose}
        children={children}
      />
    </>
  );
};

export default DropDown;
