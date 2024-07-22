import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import prequalService from "../../../services/prequal.service";
import InputField from "../../../Components/InputField";
import CheckBox from "../../../Components/CheckBox";
import { toast } from "react-toastify";

const CHARACTER_LIMIT = 200;

const format = (data) => ({
  id: data.id,
  title: data.title,
  description: data.description,
  status: data.status,
  remarks: data.remarks === "Active" ? "Active" : "Active",
});

const UpdateForm = ({ show, update }) => {
  const [formData, setFormData] = useState(format(update));

  const handleInputChange = (name, value) =>
    setFormData({
      ...formData,
      [name]: value,
    });

  const handleUpdate = async () => {
    const response = await prequalService.patchPrequal(formData);
    if (!response) {
      toast.error("Failed to Update ", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    } else {
      toast.success(" Updated", {
        position: "top-right",
        autoClose: 1000,
      });
      show();
    }
    console.log("Response:", response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data:", formData);

    handleUpdate(formData);
  };

  return (
    <div className="w-full bg-background col-center">
      <form onSubmit={handleSubmit} className="preq-form px-[2vw]">
        <h1 className="white-card text-3xl font-bold">Update Form</h1>
        <div className="row items-center space-x-1">
          <label>Title: </label>
          <InputField
            placeholder=" Title"
            onChange={(e) => handleInputChange("title", e.target.value)}
            fullWidth={true}
            required
            input={{ value: formData?.title || "" }}
          />
        </div>

        <div className="col">
          <label> Description:</label>
          <InputField
            multiline
            rows={4}
            required
            input={{
              maxLength: CHARACTER_LIMIT,
              value: formData?.description || "",
            }}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
          <span
            className={`${
              formData?.description?.length === 200 && "text-error"
            } text-sm self-end`}
          >
            {formData?.description?.length}/{CHARACTER_LIMIT}
          </span>
        </div>
        <div className="col">
          <label>Remarks:</label>
          <CheckBox
            label="Active"
            checked={formData?.remarks === "Active"}
            onChange={(e) => handleInputChange("remarks", "Active")}
          />
          <CheckBox
            label="Inactive"
            checked={formData?.remarks === "Inactive"}
            onChange={(e) => handleInputChange("remarks", "Inactive")}
          />
          <CheckBox
            label="Delete"
            checked={formData?.remarks === "Delete"}
            onChange={(e) => handleInputChange("remarks", "Delete")}
          />
        </div>
        <div className="col-center space-y-4 w-full ">
          <Button
            type="submit"
            variant="contained"
            className="w-[50vw] rounded-2xl bg-green"
            color="primary"
          >
            Confirm Update
          </Button>
          <Button
            onClick={show}
            variant="outlined"
            color="error"
            className="w-[40vw]"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
