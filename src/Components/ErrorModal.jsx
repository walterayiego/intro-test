import React, { useEffect, useState } from "react";
import DialogComponent from "./DialogComponent";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function ErrorModal({ setError, error }) {
  const [message, setMessage] = useState({});

  useEffect(() => {
    if (error?.error) {
      setMessage(error.error.message);
    }
  }, [error]);

  return (
    <DialogComponent
      open={error.open}
      setOpen={() => setError({ open: false })}
      config={{}}
      // styles="bg-white text-black"
    >
      <div className="min-w-[40vw] min-h-[10vh] col p-[3vh] bg-gray-400 overflow-auto">
        <div className="row space-x-3 font-semibold">
          <ErrorOutlineIcon className="text-error" />
          <p className="">Error</p>
        </div>
        <div className="py-4 px-3">
          {typeof message === "string" ? (
            <p>{message}</p>
          ) : (
            Object.keys(message).map((key) => (
              <div key={key}>
                {/* <strong>{key}:</strong> */}
                {message[key].map((msg, index) => (
                  <p key={index}>{msg}</p>
                ))}
              </div>
            ))
          )}
        </div>

        {/* <p className="">{JSON.stringify(err.message)}</p> */}
      </div>
    </DialogComponent>
  );
}

export default ErrorModal;
