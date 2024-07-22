import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const headCells = [
  {
    id: "category",
    numeric: false,
    disablePadding: true,
    label: (
      <p className="whitespace-nowrap overflow-hidden">
        Category <FilterAltIcon fontSize="small" />
      </p>
    ),
  },
  {
    id: "responses",
    numeric: true,
    disablePadding: false,
    label: (
      <p className="whitespace-nowrap overflow-hidden">
        Responses <ChatBubbleOutlineIcon fontSize="small" />
      </p>
    ),
  },
  {
    id: "closingDate",
    numeric: false,
    disablePadding: false,
    label: (
      <p className="whitespace-nowrap overflow-hidden">
        Closing Date <CalendarTodayIcon fontSize="small" />
      </p>
    ),
  },
  {
    id: "documents",
    numeric: false,
    disablePadding: false,
    label: (
      <p className="whitespace-nowrap overflow-hidden">
        Documents <FolderOpenIcon fontSize="small" />
      </p>
    ),
  },
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "action",
  },
];
function createData(id, category, closingDate, responses, documents, action) {
  return {
    id,
    category,
    closingDate: "5th June 2024",
    responses,
    documents,
    action,
  };
}

const rows = [
  createData(1, "Construction", 305, "5th June 2024", 67, 4.3),
  createData(2, "Hospitality", 452, 25.0, 51, 4.9),
  createData(3, "Health", 262, 16.0, 24, 6.0),
  createData(4, "Manufacturing", 159, 6.0, 24, 4.0),
  createData(5, "Farming", 356, 16.0, 49, 3.9),
  createData(6, "Health", 408, 3.2, 87, 6.5),
  createData(7, "Hospitality", 237, 9.0, 37, 4.3),
  createData(8, "Hospitality", 375, 0.0, 94, 0.0),
  createData(9, "Health", 518, 26.0, 65, 7.0),
  createData(10, "Farming", 392, 0.2, 98, 0.0),
  createData(11, "Manufacturing", 318, 0, 81, 2.0),
  createData(12, "Manufacturing", 360, 19.0, 9, 37.0),
  createData(13, "Farming", 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export {
  rows,
  headCells,
  getComparator,
  stableSort,
  descendingComparator,
  createData,
};

/* <p className="border-yellow-800 border w-1/2 text-center rounded-lg px-1 mx-3">
{row.category}
</p>
<p className="font-semibold my-2 w-fit">
Customer Name:
<span className="text-primary">Kenyatta Referral Hospital</span>
</p>
<p className="font-semibold">
Tender ID: <span className="text-primary">int12345</span>
</p>
</div> */
