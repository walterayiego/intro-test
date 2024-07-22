// utils/errorHandler.js

const errorHandler = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code that falls out of the range of 2xx
    switch (error.response.status) {
      case 400:
        return {
          message: "Bad Request",
          status: error.response.status,
          data: error.response.data,
        };
      case 401:
        return {
          message: "Unauthorized",
          status: error.response.status,
          data: error.response.data,
        };
      case 403:
        return {
          message: "Forbidden",
          status: error.response.status,
          data: error.response.data,
        };
      case 404:
        return {
          message: "Not Found",
          status: error.response.status,
          data: error.response.data,
        };
      case 500:
        return {
          message: "Internal Server Error",
          status: error.response.status,
          data: error.response.data,
        };
      default:
        return {
          message: "An unexpected error occurred",
          status: error.response.status,
          data: error.response.data,
        };
    }
  } else if (error.request) {
    // The request was made but no response was received
    return { message: "No response from server", status: null };
  } else {
    // Something happened in setting up the request that triggered an Error
    return { message: "Error in setting up request", status: null };
  }
};

const logError = (error) => {
  const errorData = errorHandler(error);
  console.log("from errorHandler \n ", errorData);
  // alert(`Status: ${errorData.status} \nMessage: ${errorData?.data?.message}`);
};

export default errorHandler;
export { logError };