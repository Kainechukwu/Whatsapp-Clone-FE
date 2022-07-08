import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <div className=" main-content ">
      <div className="sticky top-0">
        <MainHeader />
      </div>

      <div className="dark2">
        <Outlet />
      </div>
    </div>
  );
};

export default MainContent;
