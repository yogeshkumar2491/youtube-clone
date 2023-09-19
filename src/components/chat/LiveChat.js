import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LIVE_CHAT_COUNT } from "../../utils/constants";
import { generateRandomName, generateRandomMessage } from "../../utils/helper";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../../utils/store/chatSlice";

const LiceChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.chatMessages);
  useEffect(() => {
    const timer = setInterval(() => {
      //API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          text: generateRandomMessage(LIVE_CHAT_COUNT) + "🚀",
        })
      );
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 h-[500px] w-full bg-slate-100 rounded-lg border border-gray overflow-y-scroll shadow-sm flex flex-col-reverse">
        {/* Disclaimer: dont use indexes as key */}
        {chatMessages.map((message, index) => {
          return (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.text}
            />
          );
        })}
      </div>

      <form
        className="mt-5 mb-5 flex "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Yogesh", text: liveMessage + "🚀" }));
          setLiveMessage("");
        }}
      >
        <input
          className="ml-4 mr-3 p-1 w-[13rem] rounded-full border border-red-900"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder=" Chat... "
        />
        <button className="p-2 shadow-sm border border-b-2 foucs:outline-0 bg-green-300 rounded-lg">
          Send
        </button>
      </form>
    </>
  );
};

export default LiceChat;
