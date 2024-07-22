import { Button } from "@mui/material";

export const ActionColumn = ({ handleAction, params }) => (
  <div className="col justify-around table-text h-full w-full py-2  text-wrap leading-none">
    {/* <div className="row">
      <p>Action</p>
      <button>Contact Supplier</button>
    </div> */}
    <div className="row justify-around w-full h-1/3 ">
      <Button
        onClick={() => handleAction("accept", params.row)}
        variant="contained"
        color="primary"
      >
        Accept
      </Button>
      <Button
        onClick={() => handleAction("reject", params.row)}
        variant="outlined"
        color="error"
      >
        Reject
      </Button>
    </div>
  </div>
);
const noticeActionColumn = (handleAction) => ({
  field: "actions",
  flex: 1,
  minWidth: window.innerWidth * 0.1,
  align: "center",
  cellClassName: "text-center",
  headerName: "Actions",
  renderCell: (params) => (
    <ActionColumn handleAction={handleAction} params={params} />
  ),
});

export default noticeActionColumn;
