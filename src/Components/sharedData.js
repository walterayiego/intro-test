const countries = [
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KM", label: "Comoros", phone: "269" },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SS", label: "South Sudan", phone: "211" },
  { code: "TZ", label: "United Republic of Tanzania", phone: "255" },
  { code: "UG", label: "Uganda", phone: "256" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];
const getCountryByPhone = (phone) => {
  const phoneData = typeof phone === "string" ? phone : phone.toString();
  return countries.find((country) => country.phone === phoneData);
};
const categories = [
  { type: 1, name: "Construction", color: "#032CA6", label: "Construction" },
  { type: 2, name: "Hosipitality", color: "#021E73", label: "Hosipitality" },
  { type: 3, name: "Health", color: "#F28F38", label: "Health" },
  { type: 4, name: "Manufacturing", color: "#BF1304", label: "Manufacturing" },
  { type: 5, name: "Farming", color: "#400101", label: "Farming" },
];
const getCategoryByType = (type) => {
  if (!type) return categories.find((category) => category.type === 1);
  return categories.find((category) => category.type === type);
};
const checkStatus = (value) => {
  return value === null || value === undefined || value === "";
};
function maskEmail(email) {
  if (!email) return "";
  const [localPart, domainPart] = email.split("@");
  const maskedLocalPart =
    localPart.length > 1 ? `${localPart.slice(0, 2)}***` : localPart;
  const maskedDomainPart =
    domainPart.length > 3
      ? `${domainPart[0]}***.${domainPart.split(".").pop()}`
      : domainPart;
  return `${maskedLocalPart}@${maskedDomainPart}`;
}

const toKes = (value) => {
  return Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  }).format(value);
};

export {
  countries,
  categories,
  getCategoryByType,
  getCountryByPhone,
  checkStatus,
  maskEmail,
  toKes,
};
