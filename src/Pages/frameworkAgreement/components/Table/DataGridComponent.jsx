import { DataGrid } from "@mui/x-data-grid";
import React from "react";

function DataGridComponent({ columns, data, setUpdate, setOpenForm }) {
  const [row, setRow] = React.useState(data);

  React.useEffect(() => {
    setRow(data);
  }, [data]);

  const actionsColumn = {
    field: "actions",
    flex: 1,
    minWidth: window.innerWidth * 0.1,
    headerName: "Actions",
    renderCell: (params) => (
      <ActionCells handleAction={handleAction} params={params} />
    ),
  };

  const handleAction = async (action, params) => {
    console.log(action, params);
    switch (action) {
      case "Edit Tender":
        handleEditTender(params);
        break;
      case "Take Down Tender":
        handleDeleteTender(params);
        break;
      case "Postpone Tender":
        handlePostponeTender(params);
        break;
      default:
        break;
    }
  };

  const handleDeleteTender = async (params) => {
    console.log(params);
  };
  const handlePostponeTender = async (params) => {
    console.log(params);
  };

  const handleEditTender = async (params) => {
    setUpdate(params);
    setOpenForm(true);
  };

  return (
    <DataGrid
      sx={{
        width: "100%",
        height: "fit-content",
        minHeight: window.innerHeight * 0.3,
        maxHeight: window.innerHeight * 0.7,
      }}
      rows={row}
      columns={[...columns, actionsColumn].map((column) => ({
        ...column,
        ...custHeader,
        headerClassName: "bg-white",
      }))}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      rowHeight={window.innerHeight * 0.1}
      columnHeaderHeight={50}
      pageSizeOptions={[5, 10, 20, 50]}
      // checkboxSelection
      disableColumnSelector={true}
      loading={!row}
    />
  );
}

export default DataGridComponent;
