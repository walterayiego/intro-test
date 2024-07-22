import { Button } from "@mui/material";
import React from "react";
import { MdUpload } from "react-icons/md";
import TopicIcon from "@mui/icons-material/Topic";
import { generateId } from "../../../../Components/constants";

function UploadDocuments({ setFiles }) {
  return (
    <div className="col items-center my-[3vh] w-fit ">
      <Button
        className="w-fit"
        variant="outlined"
        component="label"
        size="small"
      >
        <input
          hidden
          type="file"
          accept=".pdf, .doc, .docx, .txt"
          onChange={(e) => setFiles(e.target.files[0])}
        />
        <TopicIcon fontSize="small" />
        Add Document(s)
      </Button>
    </div>
  );
}

export default UploadDocuments;
