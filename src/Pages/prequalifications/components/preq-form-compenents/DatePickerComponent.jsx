import React from "react";
import { DatePicker } from "@mui/x-date-pickers";

const DatePickerComponent = (props) => {
  return (
    <div className="row items-center ">
      <label className="mr-[1vw]">{props.labelTag}</label>
      <DatePicker
        {...props}
        className="bg-white mx-[1vw]"
        onChange={(e) => {
          props.onChange(e);
        }}
      />
    </div>
  );
};

export default DatePickerComponent;
