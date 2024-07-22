import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import prequalService from "../../../services/prequal.service";
import InputField from "../../../Components/InputField";

import UploadDocumentsTable from "./preq-form-compenents/UploadDocumentsTable";
import UploadDocuments from "./preq-form-compenents/UploadDocuments";
import DatePickerComponent from "./preq-form-compenents/DatePickerComponent";
import { toast } from "react-toastify";
import { useOutletContext } from "react-router-dom";

const CHARACTER_LIMIT = 200;
const dataFormat = {
  OpeningDate: "",
  ClosingDate: "",
  PublishDate: new Date().toISOString(),
  Status: "0",
  ProcuringEntity: "",
  UniqueCode: prequalService.makeUniqueId(6),
  Title: "",
  Description: "",
  TenderFee: 0,
  // PublicLink: "https://web.postman.co",
};

const PrequalificationForm = ({ show }) => {
  const [document, setDocument] = useState(null);
  const [files, setFiles] = useState(null);
  const [formData, setFormData] = useState(dataFormat);
  const { user } = useOutletContext();

  const handleInputChange = (name, value) =>
    setFormData({
      ...formData,
      [name]: value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      Document: files,
      CompanyId: user?.companies[0].id,
    };
    // console.log("Data:", data);
    handlePublishForm(data);
  };

  const handlePublishForm = async (data) => {
    const response = await prequalService.postPrequalForm(data);
    if (!response) {
      toast.error("Failed to Publish Pre-qualification", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    } else {
      toast.success("Pre-qualification Published", {
        position: "top-right",
        autoClose: 2000,
      });
      show();
    }
    // console.log("Response:", response.data);
  };
  const handleTenderFee = (e) => {
    handleInputChange("TenderFee", e.target.value);
  };

  return (
    <div className="w-full bg-background col-center min-h-screen">
      <form onSubmit={handleSubmit} className="preq-form min-h-screen">
        <h1 className="white-card text-3xl font-bold">
          Create Pre-qualification Notice
        </h1>
        <div className="form-div">
          <label>Title : </label>
          <InputField
            placeholder="Pre-qualification Title"
            required
            onChange={(e) => handleInputChange("Title", e.target.value)}
            fullWidth={true}
            input={{ value: formData.Title }}
          />
        </div>
        <div className="form-div">
          <DatePickerComponent
            labelTag="Opening Date:"
            onChange={(e) =>
              handleInputChange("OpeningDate", new Date(e).toISOString())
            }
          />
          <DatePickerComponent
            labelTag="Closing Date:"
            onChange={(e) =>
              handleInputChange("ClosingDate", new Date(e).toISOString())
            }
          />
        </div>
        {/* <div className="row items-center w-[70%]">
          <label className="mr-[1vw]">Pre-qualification Category</label>
          <div className="flex-1">
            <SelectDropDown
              options={categories}
              onChange={(event, value) =>
                handleInputChange("Category", value?.name)
              }
              placeholder="Select Category"
              display={(option) => (
                <p
                  className={`border border-[${option.color}] p-2 w-full rounded-lg`}
                >
                  {option.name}
                </p>
              )}
            />
          </div>
        </div> */}

        <div className="col">
          <label>Tender Description:</label>
          <InputField
            multiline
            rows={4}
            placeholder="Supply of books"
            input={{ maxLength: CHARACTER_LIMIT, value: formData.Description }}
            onChange={(e) => handleInputChange("Description", e.target.value)}
          />
          <span
            className={`${
              formData.Description.length === 200 && "text-error"
            } text-sm self-end`}
          >
            {formData.Description.length}/{CHARACTER_LIMIT}
          </span>
        </div>
        <div className="form-div">
          <label>Tender Fee:</label>
          <InputField
            required
            placeholder="Pre-qualification Tender Fee"
            onChange={handleTenderFee}
            input={{ type: "number" }}
          />
        </div>

        <div className="form-div">
          <label>Procuring Entity:</label>
          <InputField
            required
            input={{
              maxLength: CHARACTER_LIMIT / 2,
            }}
            fullWidth={true}
            placeholder="Procuring Entity"
            onChange={(e) =>
              handleInputChange("ProcuringEntity", e.target.value)
            }
          />
        </div>
        <div className="col">
          <label>Pre-qualification Documents :</label>

          <UploadDocumentsTable files={files} setFiles={setFiles} />
          <UploadDocuments
            document={document}
            setDocument={setDocument}
            setFiles={setFiles}
            files={files}
          />
        </div>

        <div className="col-center space-y-4 w-full ">
          <Button
            type="submit"
            // onClick={handleSubmit}
            variant="contained"
            className="w-[50vw] rounded-2xl bg-green"
            color="primary"
          >
            Publish Pre-qualification
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

export default PrequalificationForm;
[
  {
    OpeningDate: "2024-06-30T21:00:00.000Z",
    ClosingDate: "2024-07-07T21:00:00.000Z",
    PublishDate: "2024-07-11T08:48:06.934Z",
    Status: "0",
    ProcuringEntity: "Pre-qualification",
    UniqueCode: "SSG93Z",
    Title: "Pre-qualification",
    Description: "Pre-qualification",
    TenderFee: 32423,
    Document: {},
    CompanyId: "ec3ca7ee-4796-4ad3-bc77-70d826ab320d",
  },
];
