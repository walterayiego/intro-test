import { useTheme } from "@mui/material";
import React from "react";

// Custom hook to get the theme palette
const usePalette = () => {
  const theme = useTheme();
  return theme.palette;
};

// Styles class
class Styles {
  constructor(palette) {
    this.palette = palette;
    this.dataGrid = {
      width: "100%",
      height: "100%",
      position: "relative",
      // "& .Mui-selected": {
      //   backgroundColor: "red",
      // },
      // "& .MuiDataGrid-row:hover": {
      //   backgroundColor: "red", // Or 'transparent' or any desired color
      // },
      // "& .MuiDataGrid-cell": {
      //   color: "red",
      // }, MuiDataGrid-columnHeaderRow
      "& .MuiDataGrid-columnHeader": {
        // backgroundColor: "red",
      },
      "& .MuiDataGrid-cell:focus-within": {
        outline: "0px dotted white",
      },
      "& .MuiDataGrid-row": {
        marginY: "0.2em",
        backgroundColor: "white",
        "&:hover": {
          transform: "scale(1.003)",
          backgroundColor: this.palette.grey[100],
          // cursor: "crosshair",
        },
      },
    };
  }
}

// Function component to use the custom hook and create styles
const UseStyles = () => {
  const palette = usePalette();
  const styles = new Styles(palette);
  return styles;
};

export default UseStyles;
