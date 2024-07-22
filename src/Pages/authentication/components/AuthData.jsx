import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputAdornment from "@mui/material/InputAdornment";

export const AdornmentIcon = ({ children }) => (
  <InputAdornment position="end">
    {!children ? <ArrowDropDownIcon /> : children}
  </InputAdornment>
);

const userFields = [
  {
    name: "userName",
    label: "User Name",
    type: "text",
    placeholder: "Enter Your User name",
    full: "false",
    sampledata: "string",
    required: true,
    inputProps: {
      maxLength: 50,
    },
  },
  {
    name: "emailAddress",
    label: "Email",
    type: "email",
    placeholder: "Enter Email Address",
    full: "false",
    sampledata: "",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    full: "false",
    sampledata: "Test123!",
    required: true,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
    full: "false",
    sampledata: "Test123!",
    required: true,
  },
  // {
  //   name: "role",
  //   label: "Select your Role",
  //   type: "text",
  //   placeholder: "Client or Supplier",
  //   full: "false",
  //   sampledata: "client",
  //   required: false,
  // },
];
const companyFields = [
  {
    name: "name",
    label: "Company Name",
    type: "text",
    placeholder: "Enter Company Name",
    full: "false",
    sampledata: "Company Name",
    required: false,
  },
  // {
  //   name: "companyType",
  //   label: "Company Type",
  //   type: "number",
  //   placeholder: "Select Company Type",
  //   full: "false",
  //   sampledata: 0,
  //   required: false,
  //   endAdornment: <AdornmentIcon />,
  // },

  {
    name: "location",
    label: "Location",
    type: "text",
    placeholder: "Enter location",
    full: "false",
    sampledata: "companyLocation",
    required: false,
    inputProps: {
      maxLength: 20,
    },
  },
  {
    name: "country",
    label: "Country",
    type: "number",
    placeholder: "Select Country",
    full: "false",
    sampledata: 0,
    required: false,
    inputProps: {
      endAdornment: <AdornmentIcon />,
    },
  },

  // {
  //   name: "companyContact",
  //   label: "Phone Number",
  //   type: "tel",
  //   placeholder: "+254 *",
  //   full: "false",
  //   sampledata: "string",
  //   required: false,
  // },
  {
    name: "kraPinNumber",
    label: "KRA Pin",
    type: "tel",
    placeholder: "Enter Company KRA Pin",
    full: "false",
    sampledata: "string",
    required: true,
    inputProps: {
      maxLength: 20,
    },
  },
  {
    name: "physicalAddress",
    label: "Physical Address",
    type: "tel",
    placeholder: "P.O. Box Address",
    full: "false",
    sampledata: "string",
    required: false,
  },

  // {
  //   name: "supply",
  //   label: "Supply Locations *",
  //   type: "text",
  //   placeholder: "Where do you often do business?",
  //   full: "true",
  //   sampledata: "string",
  //   required: false,
  //   endAdornment: <AdornmentIcon />,
  // },
  {
    name: "websiteLink",
    label: "WebsiteLink",
    type: "text",
    placeholder: "https://www.example.com ",
    full: "true",
    sampledata: "string",
    required: false,
    inputProps: {
      type: "url",
    },
  },
  // {
  //   name: "categories",
  //   label: "Categories of Interest *",
  //   type: "text",
  //   placeholder: "Select what you are looking for",
  //   full: "true",
  //   sampledata: "client",
  //   required: false,
  //   inputProps: {
  //     endAdornment: <AdornmentIcon children={<p className="bg-red-500"></p>} />,
  //   },
  // },
];

export { userFields, companyFields };
