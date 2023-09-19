const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center hover:bg-gray-200 shadow-sm p-2 ">
      <img
        className="h-8 rounded-lg"
        alt="user"
        src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
