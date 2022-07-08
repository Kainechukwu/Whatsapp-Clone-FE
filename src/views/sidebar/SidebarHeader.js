import StatusIcon from "../svg//StatusIcon.js";
import Plus from "../svg//Plus.js";
import MenuIcon from "../svg//MenuIcon.js";

const SidebarHeader = () => {
  return (
    <div className="dark1 py-3  shadow-lg">
      <div className="  w-full h-full flex justify-between items-center px-4">
        <img
          className="inline-block h-12 w-12 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="className grid grid-cols-3 gap-6 pr-3">
          <StatusIcon />
          <Plus />
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
