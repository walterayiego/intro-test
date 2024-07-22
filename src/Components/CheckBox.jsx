import { Checkbox, FormControlLabel, useTheme } from "@mui/material";
import React from "react";

function CheckBox({ ...props }) {
  const { palette } = useTheme();
  return (
    <FormControlLabel
      label={props.label}
      control={
        <Checkbox
          {...props}
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: palette.primary.main,
            },
          }}
        />
      }
    />
  );
}

export default CheckBox;
