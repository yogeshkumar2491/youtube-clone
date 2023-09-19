export const CommentsList = ({ comments }) =>
  comments.map((comment, index) => {
    return (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border-l-black ml-5">
          <CommentsList key={comment.name} comments={comment.replies} />
        </div>
      </div>
    );
  });

export const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
