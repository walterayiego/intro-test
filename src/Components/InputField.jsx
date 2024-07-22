import React from "react";
import { TextField, useTheme } from "@mui/material";

function InputField(props) {
  const { palette } = useTheme();
  return (
    <TextField
      {...props}
      //   size="small"
      sx={{
        backgroundColor: "#fff",
        "& .MuiFormHelperText-root": {
          backgroundColor: props.helperTextColor || palette.background.default,
          padding: "0px",
          margin: "0px",
          width: "100%",
          textAlign: "right",
        },
        "& .MuiOutlinedInput-root:focus-within": {
          outline: "0px dotted white",
          outlineColor: "#032CA600",
        },
        "& .MuiOutlinedInput-root": {
          borderColor: palette.primary.main,
          outlineColor: "#032CA600",
          "&.Mui-focused fieldset": {
            borderColor: palette.primary.main,
            outlineColor: palette.primary.main,
          },
        },
      }}
      className="input"
      InputProps={{
        ...props.input,
        onChange: props.onChange,
        style: {
          fontSize: "0.85rem",
          backgroundColor: "#fff",
        },
      }}
    />
  );
}

export default InputField;
