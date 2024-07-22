import { useOutletContext } from "react-router-dom";
import Categories from "../../Components/Categories";
import Table from "../../Components/Table/Table";
import { rows } from "../table/TableFunctions";
import SwiperComponent from "./components/Swiper";

const HomePage = () => {
  const { user } = useOutletContext();
  return (
    <div className="px-[10px] overflow-scroll bg-[#EAEFF2] ">
      <div className="flex items-center ">
        <h1 className=" text-3xl leading-[34px] font-semibold px-[30px]">
          Welcome Back {user?.userName}
        </h1>
      </div>
      <div className="white-card h-[30vh] flex items-center justify-between">
        <SwiperComponent />
      </div>
      <h2 className="white-card text-3xl font-semibold">Open Tenders</h2>

      <Categories />
      <Table data={rows} />

      <h2 className="white-card text-3xl font-semibold">Closed Tenders</h2>
      <Categories />
      <Table data={rows} />
    </div>
  );
};

export default HomePage;
