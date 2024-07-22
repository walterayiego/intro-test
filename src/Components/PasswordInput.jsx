import React from "react";
import { IconButton } from "@mui/material";
import { AdornmentIcon } from "../Pages/authentication/components/AuthData";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import InputField from "./InputField";

const PasswordInput = ({ secure, setSecure, ...props }) => {
  const handleClickShowPassword = () => setSecure(!secure);

  return (
    <InputField
      {...props}
      type={secure ? "password" : "text"}
      placeholder="Enter Password"
      size="small"
      required
      input={{
        ...props.input,
        required: true,
        endAdornment: (
          <AdornmentIcon>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {secure ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </AdornmentIcon>
        ),
      }}
    />
  );
};
export default PasswordInput;
