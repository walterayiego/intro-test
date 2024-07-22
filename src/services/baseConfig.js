import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const api = axios.create({
  baseURL: "/v1/",
});
const apiAuth = axios.create({
  baseURL: "/v1/auth/",
  headers: headers,
  withCredentials: true,
});
const apiUser = axios.create({
  baseURL: "/v1/user/",
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
  withCredentials: true,
});
const apiClient = axios.create({
  baseURL: "/v1/client",
  headers: headers,
  withCredentials: true,
});
const apiSupplier = axios.create({
  baseURL: "/v1/supplier",
  headers: headers,
  withCredentials: true,
});

// api.interceptors.request.use(
//   (request) => {
//     console.log("Success auth:4000 req");
//     return request;
//   },
//   (error) => Promise.reject(error)
// );
// api.interceptors.response.use(
//   (response) => {
//     console.log("Success auth:4000 res");
//     return response;
//   },
//   (error) => Promise.reject(error)
// );
export function json2formData(json) {
  const formData = new FormData();

  Object.entries(json).forEach(([key, value]) => {
    if (typeof value === "undefined" || value === null) {
      return;
    }

    if (value instanceof File) {
      formData.append(key, value);
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        formData.append(`${key}[${index}]`, item);
      });
      return;
    }

    if (typeof value === "object") {
      formData.append(key, JSON.stringify(value));
      return;
    }

    formData.append(key, value.toString());
  });

  return formData;
}

export { api, apiAuth, apiUser, apiClient, apiSupplier };
