import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function SelectDropDown({ onChange, options, placeholder, display, ...props }) {
  return (
    <Autocomplete
      options={options}
      isOptionEqualToValue={(option, value) => option.code === value.code}
      autoHighlight
      onChange={onChange}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => {
        const { className, ...restProps } = props;
        return (
          <Box
            component="li"
            className="w-full bg-white hover:bg-gray-200 p-2 row"
            {...restProps}
          >
            {display(option)}
          </Box>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            size="small"
            placeholder={placeholder}
            className="bg-white input"
            inputProps={{
              ...params.inputProps,
              ...props,
              style: { fontSize: "0.85rem" },
              autoComplete: "new-password",
            }}
          />
        );
      }}
    />
  );
}

export default SelectDropDown;
