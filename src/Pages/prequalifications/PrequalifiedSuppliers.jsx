import * as React from "react";

import { DataGrid } from "@mui/x-data-grid";
import { useOutletContext } from "react-router-dom";
import preQualSupplierService from "../../services/prequal.supplier.service";
import UseStyles from "../../styles/styles";
import { Button } from "@mui/material";

const custHeader = {
  // width: 120,
  flex: 1,
  renderHeader: (params) => (
    <p className="w-fit text-primary font-semibold">
      {params.colDef.headerName}
    </p>
  ),
};

const columns = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    minWidth: window.innerWidth * 0.2,
    renderCell: (params) => {
      return (
        <div className="leading-none h-full col justify-evenly">
          <p className="">Company Name :</p>
          <p className="underline cursor-pointer text-primaryLight">
            View Company
          </p>
        </div>
      );
    },
  },
  {
    field: "description",
    headerName: "Qoute",
  },
  {
    field: "remarks",
    headerName: "Remarks",
  },
];
const PrequalifiedSuppliers = ({ notices }) => {
  const [rows, setAllRows] = React.useState([]);
  const [filteredRows, setFilteredRows] = React.useState(1);
  const [selectedNotice, setSelectedNotice] = React.useState(notices[0]);
  const [loading, setLoading] = React.useState(false);
  const { user } = useOutletContext();
  const styles = UseStyles();
  const [query, setQuery] = React.useState({
    start: 0,
    length: 100,
    order: "desc",
  });

  const getPrequalifiedSuppliers = async (id) => {
    setLoading(true);
    try {
      const response =
        await preQualSupplierService.getPrequalApplicantsByNoticeID(id, query);
      let resData = await response?.data?.data;
      console.log(resData, "supplierS");
      setAllRows(resData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const pendingRows = rows.filter((row) => row.status === 0);
  const acceptedRows = rows.filter((row) => row.status === 1);
  const rejectedRows = rows.filter((row) => row.status === 2);

  React.useEffect(() => {
    (async () => {
      await getPrequalifiedSuppliers(notices[0].id);
      setFilteredRows(acceptedRows);
    })();
  }, []);

  return (
    <div className="px-[2vw] w-[60vw]">
      <h3 className="white-card text-3xl font-semibold">
        Pre-qualified Suppliers
      </h3>
      <p className="text-sm">Sort by Notice. Select Notice to View</p>
      <div className="space-x-4 my-2">
        {notices.map((notice, index) => (
          <Button
            variant={selectedNotice.id === notice.id ? "contained" : "outlined"}
            key={index}
            onClick={() => {
              getPrequalifiedSuppliers(notice.id);
              setSelectedNotice(notice);
            }}
            className="bg-primary text-white px-4 py-1 rounded-md"
          >
            {notice.title}
          </Button>
        ))}
        <Button
          variant="contained"
          className="bg-primary text-white px-4 py-1 rounded-md"
          onClick={() => setFilteredRows(rows)}
        >
          View All
        </Button>
      </div>

      <div className={`${filteredRows.length > 3 ? "h-[50vh]" : "h-[50vh]"}`}>
        <DataGrid
          sx={styles.dataGrid}
          rows={filteredRows}
          columns={columns.map((column) => ({
            ...column,
            ...custHeader,
            headerClassName: "bg-white",
          }))}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          columnHeaderHeight={window.innerHeight * 0.05}
          pageSizeOptions={[5, 10]}
          loading={loading}
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default PrequalifiedSuppliers;
