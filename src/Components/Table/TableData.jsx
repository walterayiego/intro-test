import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const TableHeads = () => {
  return (
    <div className="row items-center justify-between flex-1">
      <div className="w-[29%] row-center">
        <p className="">
          Category <FilterAltIcon fontSize="small" />
        </p>
        {/* <p className="">
          Responses <ChatBubbleOutlineIcon fontSize="small" />
        </p> */}
      </div>
      <div className="flex-1">
        <p className="text-center">
          Closing Date <CalendarTodayIcon fontSize="small" />
        </p>
      </div>
      <div className="w-[10vw] flex-1">
        <p className="text-center">
          Documents <FolderOpenIcon fontSize="small" />
        </p>
      </div>
      <div className="w-fit self-end row-center">
        <p className="">
          Sort By <SwapVertIcon fontSize="small" />
        </p>
        <span>
          Closing Date <ArrowDropDownIcon fontSize="small" />
        </span>
        <span>
          Ascending <ArrowDropDownIcon fontSize="small" />
        </span>
      </div>
    </div>
  );
};

export default TableHeads;
