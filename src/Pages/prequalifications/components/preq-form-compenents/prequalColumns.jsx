import { Link } from "react-router-dom";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import dayjs from "dayjs";
import { getCategoryByType } from "../../../../Components/sharedData";

const customHeader = {
  flex: 1,
  renderHeader: (params) => (
    <p className="h-fi text-primary">{params.colDef.headerName}</p>
  ),
};

const columns = [
  {
    field: "num",
    headerName: "",
    maxWidth: window.innerWidth * 0.03,
  },
  {
    field: "title",
    headerName: "Title",
    flex: 1,
    minWidth: window.innerWidth * 0.2,
    renderCell: (params) => {
      const category = getCategoryByType(params.row.type);
      return (
        <div className="col justify-between table-text h-full w-full py-2  text-wrap leading-none">
          <p
            className={`border border-[${category?.color}] px-[4vw] w-fit rounded-md text-center`}
          >
            {category?.name}
          </p>
          <div className="row gap-1 whitespace-nowrap">
            <p className="">Name:</p>
            <p className="text-primary">{params.row.title}</p>
          </div>
          <div className="row gap-1 text-[0.7rem] whitespace-nowrap">
            <p className="">Tender ID:</p>
            <p className="text-primary">{params.row.uniqueCode}</p>
          </div>
        </div>
      );
    },
  },
  {
    field: "description",
    headerName: "Description",
    minWidth: window.innerWidth * 0.2,
    flex: 1,
    renderCell: (params) => (
      <div className="col justify-center table-text h-full w-full py-2  text-wrap leading-none">
        <div className="flex-1 col justify-center ">
          {params.row.description}
        </div>
        <Link className="row items-center gap-1">
          <FolderOpenIcon /> <p>{params.row.noticeFileName}</p>
        </Link>
      </div>
    ),
  },
  {
    field: "closingDate",
    headerName: "Closing Date",
    minWidth: window.innerWidth * 0.05,
    valueGetter: (params) => dayjs(params).format("MMMM D YYYY"),
    cellClassName: "text-error100",
  },

  {
    field: "tenderFee",
    // flex: 1,
    headerName: "Tender Fee",
    minWidth: window.innerWidth * 0.05,
    valueGetter: (params) =>
      Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
      }).format(params),
  },
];

export { columns, customHeader };
