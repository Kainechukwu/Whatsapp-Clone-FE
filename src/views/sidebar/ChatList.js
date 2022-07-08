import { Link } from "react-router-dom";

const ChatList = ({ img, phoneNumber, date, lastMsg, id }) => {
  return (
    <Link to={`/chat/${id}`} className="relative block">
      <div>
        <div className="inter flex items-center pl-4 dark2 cursor-pointer">
          <img
            className="inline-block h-14 w-14 mr-4 rounded-full"
            src={img}
            alt={id}
          />
          <div className="flex-grow flex-col py-4 pr-4 border-b borderGray  overflow-hidden">
            <div className="flex items-center justify-between mb-1">
              <div className="text-white fs-20">{phoneNumber}</div>
              <div className="mt-auto text-gray-300 fs-15">{date}</div>
            </div>
            <div className="w-full flex pr-2">
              <span className="text-gray-300 fs-15 fw-300 whitespace-nowrap truncate  ">
                {lastMsg}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ChatList;
