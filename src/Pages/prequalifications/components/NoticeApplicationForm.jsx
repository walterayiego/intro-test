import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import prequalService from "../../../services/prequal.service";
import InputField from "../../../Components/InputField";
import { toast } from "react-toastify";
import DialogComponent from "../../../Components/DialogComponent";
import preQualSupplierService from "../../../services/prequal.supplier.service";
import { useOutletContext } from "react-router-dom";

const CHARACTER_LIMIT = 200;

const format = (data) => ({
  preQualificationNoticeId: data.id,
  status: 0,
  description: "",
  remarks: "Pending",
});

const NoticeApplicationForm = ({
  openNoticeApplicationForm,
  setOpenNoticeApplicationForm,
  params,
}) => {
  const [formData, setFormData] = useState();
  const [error, setError] = useState(null);
  const { user, getUser } = useOutletContext();

  useEffect(() => {
    console.log("Params:", params);
    const form = format(params);
    setFormData({ ...form, companyId: user?.companies[0].id });
  }, [params]);

  const close = () => setOpenNoticeApplicationForm(!openNoticeApplicationForm);

  const handleInputChange = (name, value) =>
    setFormData({
      ...formData,
      [name]: value,
    });
  const handleApply = async () => {
    const response = await preQualSupplierService.apply(formData);
    if (response.status !== 200) {
      const errorMessage = response?.data?.message;
      toast.error(errorMessage, {
        closeOnClick: true,
      });
      setError(errorMessage);
      return;
    }
    if (response.status === 200) {
      toast.success("Applied", {
        autoClose: 1000,
      });
      close();
      return;
    }
    toast.error("Failed to apply");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FormData:", formData);
    handleApply();
  };

  return (
    <div className="w-full h-[75vh] bg-background col">
      <form onSubmit={handleSubmit} className="preq-form px-[2vw]">
        <h1 className="white-card text-3xl font-bold">
          Notice Application Form
        </h1>
        <div>
          <p>Title: {params?.title}</p>
          <p>Fee : {params?.tenderFee}</p>
        </div>

        <div className="col">
          <label> Leave a note:</label>
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
        {/* <div className="col">
          <label>Remarks:</label>
          <InputField
            multiline
            rows={2}
            required
            input={{
              maxLength: CHARACTER_LIMIT / 2,
              value: formData?.remarks || "",
            }}
            onChange={(e) => handleInputChange("remarks", e.target.value)}
          />
        </div> */}
        <div className="col-center space-y-4 w-full ">
          <Button
            type="submit"
            variant="contained"
            className="w-[50vw] rounded-2xl bg-green"
            color="primary"
          >
            SEND APPLICATION
          </Button>
          <Button
            onClick={close}
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

export default NoticeApplicationForm;
