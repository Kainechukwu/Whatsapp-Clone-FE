import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";
import ChatInput from "./chat/ChatInput";
const MainContent = () => {
  return (
    <div className="relative flex flex-col main-content h-screen">
      <div className="sticky top-0">
        <MainHeader />
      </div>

      <div className="dark2 flex-grow">
        <Outlet />
      </div>

      <div className="mt-auto ">
        <ChatInput />
      </div>
    </div>
  );
};

export default MainContent;
