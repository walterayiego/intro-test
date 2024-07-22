import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import { toKes } from "../../Components/sharedData";
import preQualSupplierService from "../../services/prequal.supplier.service";
import UseStyles from "../../styles/styles";
import noticeActionColumn, {
  ActionColumn,
} from "./components/NoticeActionColumn";
import { toast } from "react-toastify";

const custHeader = {
  flex: 1,
  renderHeader: (params) => (
    <div className="leading-none row-center">
      <p className="h-fi text-center text-primary">
        {params.colDef.headerName}
      </p>
    </div>
  ),
};
[
  {
    id: "700369a9-9487-4d3a-81d4-997d7ae4161c",
    preQualificationNoticeId: "d91c91e3-5bb6-4cde-87d6-bd3babd55dab",
    companyId: "d30fa3d2-bb7a-400e-8741-a19a77f31dbb",
    status: 1,
    description: "sdsf",
    remarks: "sdfd",
  },
];
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
  // {
  //   field: "remarks",
  //   headerName: "Remarks",
  // },
];

const NoticeApplications = ({ selectedPrequal }) => {
  const [suppliers, setSuppliers] = React.useState(null);
  const [actionColumn, setActionColumn] = React.useState({
    field: "actions",
  });
  const [query, setQuery] = React.useState({
    start: 0,
    length: 100,
    order: "desc",
  });
  const [loading, setLoading] = React.useState(true);

  const styles = UseStyles();

  const handleAction = async (action, rowData) => {
    const remarksAction =
      action === "accept"
        ? "Accepted"
        : action === "reject"
        ? "Rejected"
        : "Pending";
    const updateData = {
      id: rowData.id,
      description: rowData.description,
      remarks: remarksAction,
      status: action === "accept" ? 1 : action === "reject" ? 2 : 0,
    };
    console.log(updateData);
    await updateApplication(updateData);
    getNoticeApplicants();
  };

  const updateApplication = async (updateData) => {
    const response = await preQualSupplierService.updatePrequal(updateData);
    if (response?.status === 200) {
      toast.success("Supplier " + updateData.remarks);
      return;
    }
    toast.error("Failed to update");
  };

  const getActionColumn = async () => {
    const col = await noticeActionColumn(handleAction);
    setActionColumn(col);
  };

  const getNoticeApplicants = async (id) => {
    setLoading(true);
    try {
      const response = await preQualSupplierService.getPrequalApplicantsByNoticeID(
        id,
        query
      );
      let resData = await response?.data?.data;
      setSuppliers(resData);
      console.log(resData, "supplier for that notice");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getNoticeApplicants(selectedPrequal.id,);
    getActionColumn();
  }, [query, selectedPrequal.id]);

  return (
    <div className="px-[1vw] w-[70vw] sm:w-[55vw] h-fit bg-[#EAEFF2] ">
      <p className="white-card text-center font-semibold text-xl">
        Prequalification Applications
      </p>
      <div className="my-3">
        <p className="text-sm font-light">
          Tender Name: {selectedPrequal.title}
        </p>
      </div>

      <div className={`w-full ${suppliers ? "h-[65vh]" : "h-[20vh]"}`}>
        <DataGrid
          sx={styles.dataGrid}
          rows={suppliers?.filter((supplier) => supplier.status === 0) || []}
          columns={[...columns, actionColumn].map((column) => ({
            ...column,
            ...custHeader,
            headerClassName: "bg-white text-center",
            cellClassName: "leading-none",
          }))}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          rowHeight={window.innerHeight * 0.15}
          columnHeaderHeight={50}
          disableRowSelectionOnClick
          pageSizeOptions={[5, 10, 20]}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default NoticeApplications;
