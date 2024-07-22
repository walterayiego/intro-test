import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

import userService from "../../services/user.service";
import InputField from "../../Components/InputField";
import UploadDocumentsTable from "../prequalifications/components/preq-form-compenents/UploadDocumentsTable";
import UploadDocuments from "../prequalifications/components/preq-form-compenents/UploadDocuments";
import SelectDropDown from "../../Components/SelectDropDown";
import {
  categories,
  checkStatus,
  countries,
  getCategoryByType,
  getCountryByPhone,
  maskEmail,
} from "../../Components/sharedData";

function Client() {
  const { user, getUser } = useOutletContext();
  const [formData, setFormData] = React.useState();

  const initializeFormData = () => {
    if (user?.companies) {
      setFormData({
        Name: user.companies[0].name,
        Type: user.companies[0].type,
        KraPin: user.companies[0].kraPinNumber,
        CompanyCategory: user.companies[0].companyCategory,
        BusinessDuration: user.companies[0].businessDuration,
        CountryCode: user.companies[0].country,
        PhysicalAddress: user.companies[0].name,
        Location: user.companies[0].location,
        BusinessDocuments: user.companies[0].businessFileName,
        Financials_ProfitMargin:
          user.companies[0].financials.profitMarginPerYear,
        Financials_EarningPerYear:
          user.companies[0].financials.averageEarningsPerYear,
        Financials_Statements: user.companies[0].financials.fileName,
        StakeHolderDetails_Employees:
          user.companies[0].stakeHolderDetails.employeeCount,
        StakeHolderDetails_PermanentTemporaryRatio:
          user.companies[0].stakeHolderDetails.permanentTemporaryRatio,
        StakeHolderDetails_Structure:
          user.companies[0].stakeHolderDetails.structureFileName,
        CompanyId: user.companies[0].id,
      });
    }
  };

  const initializePage = async () => {
    await getUser();
    initializeFormData();
  };

  useEffect(() => {
    initializePage();
  }, []);

  const handleInputChange = (name, value) =>
    setFormData({
      ...formData,
      [name]: value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await userService.updateCompany(formData);
    if (response.status !== 200) {
      toast.error("Error updating company");
      return;
    }
    const data = await response.data;
    console.log(data);
    toast.success("Updated successfully");
    await getUser();
  };

  const handleCancel = async () => {
    // initializeFormData();
    const d = getCountryByPhone("254").label;
    console.log(d);
  };
  function readableLabel(str) {
    return str.replace(/_/g, " ").replace(/[A-Z]/g, (letter) => ` ${letter}`);
  }
  const handleSelectors = (key, value, initialValue) => {
    if (value) {
      handleInputChange(key, value);
    } else {
      handleInputChange(key, initialValue);
    }
  };

  return (
    <div className="w-full px-[1vw]">
      <h1 className="white-card font-semibold text-2xl">Your Profile</h1>
      {formData && (
        <form onSubmit={handleSubmit} className="form space-y-[5vh]">
          <p>Email : {maskEmail(user.email)} ,  UserName: {user.userName}</p>
          <p>Role : {user.roleName}</p>
          <div className="col">
            {Object.entries(formData).map(([key, value]) => {
              if (key === "CompanyId") return null;
              if (key === "Type") return null;
              if (key === "CountryCode") {
                return (
                  <div key={key} className="label-row">
                    <label>{readableLabel(key)}: </label>
                    <div className="flex-1">
                      <SelectDropDown
                        options={countries}
                        onChange={(event, selected) =>
                          handleSelectors(
                            key,
                            selected?.phone,
                            user.companies[0].country
                          )
                        }
                        value={getCountryByPhone(value)?.phone}
                        display={(option) => (
                          <>
                            <img
                              loading="lazy"
                              width="20"
                              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                              alt=""
                            />

                            <p className="pl-1">
                              {option.label} + {option.phone}
                            </p>
                          </>
                        )}
                      />
                    </div>
                  </div>
                );
              }
              if (key === "CompanyCategory") {
                return (
                  <div key={key} className="label-row">
                    <label>{readableLabel(key)}: </label>
                    <div className="flex-1">
                      <SelectDropDown
                        options={categories}
                        onChange={(event, selected) =>
                          handleSelectors(
                            key,
                            selected?.type,
                            user.companies[0].companyCategory
                          )
                        }
                        value={getCategoryByType(value).name}
                        display={(option) => <p>{option.name}</p>}
                      />
                    </div>
                  </div>
                );
              }
              if (
                key === "Financials_Statements" ||
                key === "BusinessDocuments" ||
                key === "StakeHolderDetails_Structure"
              )
                return (
                  <div key={key} className="my-[2vh]">
                    <label>{readableLabel(key)}: </label>
                    <div className="px-[2vw]">
                      <UploadDocumentsTable
                        files={value}
                        setFiles={() => handleInputChange(key, null)}
                      />
                      <UploadDocuments
                        setFiles={(file) => handleInputChange(key, file)}
                      />
                    </div>
                  </div>
                );
              return (
                <div className="label-row" key={key}>
                  <label>{readableLabel(key)}: </label>
                  <InputField
                    onChange={(e) => handleInputChange(key, e.target.value)}
                    input={{ value: value === null ? "" : value }}
                    error={checkStatus(value)}
                    helperText={checkStatus(value) ? "Incorrect entry." : false}
                    fullWidth={true}
                  />
                </div>
              );
            })}
          </div>
          <div className="col-center space-y-4 w-full ">
            <Button
              type="submit"
              variant="contained"
              className="w-[50vw] rounded-2xl bg-green"
              color="primary"
            >
              Update
            </Button>
            <Button
              onClick={handleCancel}
              variant="outlined"
              color="error"
              className="w-[40vw]"
            >
              Cancel
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Client;
