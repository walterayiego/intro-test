import * as React from "react";
import { useOutletContext } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import actionsColumn from "./preq-form-compenents/actionsColumn";
import { columns, customHeader } from "./preq-form-compenents/prequalColumns";
import useStyles from "../../../styles/styles";

function PrequalificationTable({
  data,
  setUpdate,
  setOpenForm,
  handleResponses,
  handleApplicationForm,
}) {
  const [rows, setRows] = React.useState(data);
  const [actionColumn, setActionColumn] = React.useState({
    field: "actions",
  });

  const handleAction = async (action, params) => {
    switch (action) {
      case "Edit Tender":
        setUpdate(params);
        setOpenForm(true);
        break;
      case "Take Down Tender":
        console.log(params);
        break;
      case "Postpone Tender":
        console.log(params);
        break;
      case "Responses":
        handleResponses(params);
        break;
      case "Applications":
        handleResponses(params);
        break;
      case "Apply":
        handleApplicationForm({
          ...params,
          userCompanyId: user?.companies[0].id,
          userId: user?.id,
        });
        break;
      default:
        break;
    }
  };
  const { user, getUser } = useOutletContext();
  const classes = useStyles();

  React.useEffect(() => {
    // Add numbers to the rows
    setRows(
      data?.map((item, index) => {
        return { ...item, num: index + 1 };
      })
    );
    const getActionColumn = async () => {
      const col = await actionsColumn(handleAction, user?.roleName);
      setActionColumn(col);
    };

    getActionColumn();
  }, [data]);

  return (
    <div
      className={`w-full ${rows?.length > 3 ? "h-[100vh]" : "h-[60vh]"} mb-3`}
    >
      <DataGrid
        rows={rows}
        columns={[...columns, actionColumn].map((column) => ({
          ...column,
          ...customHeader,
          headerClassName: "bg-background mb-2 text-lg shadow shadow-black",
        }))}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        loading={!rows}
        rowHeight={window.innerHeight * 0.15}
        autoHeight={rows?.length < 3}
        columnHeaderHeight={window.innerHeight * 0.08}
        pageSizeOptions={[5, 10, 20, 50]}
        disableRowSelectionOnClick
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          "& .MuiDataGrid-columnHeader": {
            // backgroundColor: "red",
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: "0px dotted white",
          },
          "& .MuiDataGrid-row": {
            marginY: "0.2em",
            backgroundColor: "white",
            "&:hover": {
              transform: "scale(1.003)",
              backgroundColor: "#F3F4F6",
            },
          },
        }}
      />
    </div>
  );
}

export default PrequalificationTable;
