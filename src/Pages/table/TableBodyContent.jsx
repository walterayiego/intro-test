import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";

const VisibleRows = ({ visibleRows, handleClick, isSelected }) =>
  visibleRows.map((row, index) => {
    const isItemSelected = isSelected(row.id);
    const labelId = `enhanced-table-checkbox-${index}`;

    return (
      <tr
        hover
        onClick={(event) => handleClick(event, row.id)}
        role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={row.id}
        selected={isItemSelected}
        sx={{ border: "1px solid #611", cursor: "pointer" }}
        className=" h-fit-content w-[50vw] border bg-red-40"
      >
        <td sx={{ border: "1px solid black" }} padding="checkbox">
          <Checkbox
            color="primary"
            checked={isItemSelected}
            inputProps={{
              "aria-labelledby": labelId,
            }}
          />
        </td>

        <td
          component="th"
          id={labelId}
          scope="row"
          padding="none"
          sx={{ border: "1px solid black" }}
          className="h-fit py-2 w-[33vw] border bg-red-40"
        >
          <p className="border-yellow-800 border w-1/2 text-center rounded-lg px-1 mx-3">
            {row.category}
          </p>
          <p className="font-semibold my-2 w-fit">
            Customer Name:
            <span className="text-primary">Kenyatta Referral Hospital</span>
          </p>
          <p className="font-semibold">
            Tender ID: <span className="text-primary">int12345</span>
          </p>
        </td>
        <div sx={{ border: "1px solid black" }} className="w-[10vw]" align="right">
          {row.responses}
        </div>
        <td sx={{ border: "1px solid black" }} align="right">
          {row.closingDate}
        </td>
        <td sx={{ border: "1px solid black" }} align="right">
          {row.documents}
        </td>
        <td sx={{ border: "1px solid black" }} align="right">
          {row.action}
        </td>
      </tr>
    );
  });

function TableBodyContent({
  handleClick,
  visibleRows,
  isSelected,
  emptyRows,
  dense,
}) {
  return (
    <>
      <VisibleRows
        visibleRows={visibleRows}
        handleClick={handleClick}
        isSelected={isSelected}
      />
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: (dense ? 33 : 53) * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </>
  );
}

export default TableBodyContent;
