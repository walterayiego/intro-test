import React, { useState } from "react";
import { Button, TextField, useTheme } from "@mui/material";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import PasswordStrengthBar from "react-password-strength-bar";

import Logo from "../../Components/Logo";
import Checkbox from "../../Components/CheckBox";
import { userFields, companyFields } from "./components/AuthData";
import authService from "../../services/auth.service";
import PasswordInput from "../../Components/PasswordInput";
import Socials from "../../Components/Socials";
import SelectDropDown from "../../Components/SelectDropDown";
import { categories, countries } from "../../Components/sharedData";
import ErrorModal from "../../Components/ErrorModal";
import InputField from "../../Components/InputField";

const config = {
  position: "top-center",
  autoClose: 100,
  hideProgressBar: false,
};

function Register() {
  const { unVerifiedUser, setUnVerifiedUser } = useOutletContext();

  const [userData, setUserData] = useState({});
  const [companyData, setCompanyData] = useState({});
  const [secure, setSecure] = useState("password");
  const [role, setRole] = useState("");
  const [error, setError] = useState({ open: false, error: null });

  const navigate = useNavigate();
  const { palette } = useTheme();

  const handleChange = (name, value) => {
    const checkField = companyFields.some((field) => field.name === name);

    if (checkField) {
      setCompanyData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const regData = {
      ...userData,
      roleName: role,
      company: companyData,
    };

    // Check if passwords match
    if (regData.password !== regData.confirmPassword) {
      setError({ open: true, error: { message: "Passwords do not match" } });
      return;
    }
    // Register User
    const res = await authService.register(regData);
    if (res.status === 201) {
      toast.success("Success", config);
      setUnVerifiedUser({ email: regData.emailAddress });
      await handleGenerateEmailToken({ email: regData.emailAddress });
    }

    // Handle Error when registering
    if (res.status === 400 || res.status === 500) {
      setError({ open: true, error: res.data });
    }
  };

  // Generate Email Token
  const handleGenerateEmailToken = async (email) => {
    const res = await authService.generateEmailToken(email);
    if (res?.status === 200) {
      console.log("email sent");
      navigate("/email-verification");
      return;
    }
    toast.error("Error sending email", config);
  };

  return (
    <div className="bg-register min-h-screen h-full w-screen col-center">
      {/*  */}
      <div className="self-center w-[7vw] h-[5vh]" children={<Logo />} />
      <div className="flex flex-col sm:flex-row items-center justify-between h-[90vh] w-[90%] xl:w-[80%] mt-[3vh]">
        <div className="sm:flex hidden flex-col w-full h-full sm:w-[40%] justify-around text-white">
          <p className="text-4xl font-semibold">Customer Registration</p>
          <div className="col text-xl self-start space-y-2 justify-between">
            <p>Hello there, welcome to Intro.</p>
            <p>We're happy to have you.</p>
          </div>
          <div className="info">
            <p>Phone</p>
            <span>+254 123 456 789</span>
            <p>Address</p>
            <span>Somewhere, Somewhere, Nairobi Kenya</span>
            <p className="pb-0">Socials</p>
            <span className="row">
              <Socials />
            </span>
          </div>
        </div>

        <div className="w-[0.1em] bg-white/55 h-[90%]" />

        <div className="col items-center flex-1 sm:px-[1vw] h-full text-white">
          <p className="text-xl font-semibold py-[2vh]">Registration Details</p>
          <form onSubmit={handleRegister} className="input-box overflow-auto">
            {userFields.concat(companyFields).map((field, index) => (
              <div
                key={index}
                className={`col px-[1vw]  ${
                  field.full === "true"
                    ? "sm:w-full w-full"
                    : "sm:w-[50%] w-full"
                }`}
              >
                <label className="my-[1vh]" htmlFor={field.label}>
                  {field.label}
                </label>
                {field.name === "password" ||
                field.name === "confirmPassword" ? (
                  <>
                    <PasswordInput
                      secure={secure}
                      setSecure={setSecure}
                      error={userData.password !== userData.confirmPassword}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                    />
                    {field.name === "password" && (
                      <PasswordStrengthBar password={userData.password} />
                    )}
                    {field.name === "confirmPassword" &&
                      userData?.confirmPassword && (
                        <span className="text-right text-[0.8em] text-red-200">
                          {userData.password !== userData.confirmPassword &&
                            "Passwords do not match"}
                        </span>
                      )}
                  </>
                ) : field.name === "country" ? (
                  <SelectDropDown
                    options={countries}
                    onChange={(event, value) =>
                      handleChange(field.name, value?.phone)
                    }
                    placeholder={field.placeholder}
                    field={field}
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
                ) : field.name === "categories" ? (
                  <div className="sm:w-full w-[90vw]">
                    <SelectDropDown
                      options={categories}
                      onChange={(event, value) =>
                        handleChange(field.name, value?.name)
                      }
                      placeholder={field.placeholder}
                      field={field}
                      display={(option) => (
                        <p
                        // className={`border border-[${option.color}] p-2 w-full rounded-lg`}
                        >
                          {option.name}
                        </p>
                      )}
                    />
                  </div>
                ) : (
                  <InputField
                    size="small"
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    input={{ ...field.inputProps }}
                  />
                )}
              </div>
            ))}
            <div className="col px-[1vw] w-full">
              <label className="my-[1vh]" htmlFor="categories">
                Select your role
              </label>
              <div className="px-[3vw]">
                <Checkbox
                  label="Supplier"
                  checked={role === "supplier"}
                  onChange={(e) => setRole("supplier")}
                />

                <Checkbox
                  label="Client"
                  checked={role === "client"}
                  onChange={(e) => setRole("client")}
                />
              </div>
            </div>

            <div className="col-center my-2 space-y-2 w-full text-white/60 text-sm">
              <Button
                type="submit"
                className="w-[40%] h-[6vh] my-2"
                variant="contained"
              >
                Register
              </Button>
              <Link to="/login">
                <span>Already have an account? Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ErrorModal setError={setError} error={error} />
    </div>
  );
}

export default Register;
