import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <div className="fixed  h-full overflow-y-auto sidebar">
      <div className="sticky top-0 flex flex-col ">
        <SidebarHeader />
        <div className=" p-4">
          <div className=" rounded-md  h-10">search</div>
        </div>
      </div>
      <div className=" h-full">main</div>
    </div>
  );
};

export default Sidebar;
