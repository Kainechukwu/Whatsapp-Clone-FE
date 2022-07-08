import MicrophoneIcon from "../../svg/MicrophoneIcon";
import Emoji from "../../svg/Emoji";

const ChatInput = () => {
  return (
    <div className="dark2 border-t  borderGray flex items-center px-4 py-2 shadow-lg">
      <Emoji />
      <div className="dark1 flex-grow rounded-md h-14 mx-6">
        <input
          type="text"
          className="dark1 border-none rounded-md h-full w-full"
        />
      </div>

      <MicrophoneIcon />
    </div>
  );
};

export default ChatInput;
