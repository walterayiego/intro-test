import React, { useEffect } from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import dayjs from "dayjs";

function UploadDocumentsTable({ files, setFiles }) {
  return (
    <TableContainer className="max-h-[45vh] relative">
      <Table className="p-2 w-3/4 border border-white col-center text-black overflow-y-auto">
        <TableHead className="sticky top-0 z-10">
          <TableRow className="bg-white">
            <TableCell>Document Title</TableCell>
            {files?.size ? (
              <>
                <TableCell>File Size (mb)</TableCell>
                <TableCell>Last Modified</TableCell>
              </>
            ) : (
              <>
                <TableCell>View</TableCell>
                <TableCell></TableCell>
              </>
            )}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            // typeof files === "string" ? (
            <TableRow>
              <TableCell>
                {files?.name ? files?.name : files?.slice(19)}
              </TableCell>
              <TableCell>
                {files?.size ? (files?.size / (1024 * 1024)).toFixed(2) : " "}
              </TableCell>
              <TableCell>
                {files?.lastModified
                  ? dayjs(files?.lastModified).format("MMMM D, h:mm A")
                  : " "}
              </TableCell>
              <TableCell>
                {files && (
                  <Button
                    onClick={() => {
                      // setFiles(files.filter((file) => file.id !== item.id));
                      setFiles(null);
                    }}
                    variant="outlined"
                    color="error"
                  >
                    Delete
                  </Button>
                )}
              </TableCell>
            </TableRow>
            // )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UploadDocumentsTable;
