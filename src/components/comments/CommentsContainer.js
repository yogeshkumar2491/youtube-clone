import { CommentsList } from "./Comment";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Yogesh Kumar",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Yogesh Kumar",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Yogesh Kumar",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Yogesh Kumar",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Yogesh Kumar",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Yogesh Kumar",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Yogesh Kumar",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Yogesh Kumar",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Yogesh Kumar",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Yogesh Kumar",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
