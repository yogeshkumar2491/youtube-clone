import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../comments/CommentsContainer";
import LiveChat from "../chat/LiveChat";
import { closeMenu } from "../../utils/store/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoCode = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="m-2 ml-5 mr-5">
      <div className="m-5 flex">
        <div>
          <iframe
            className="rounded-2xl"
            width="1100"
            height="500"
            src={"https://www.youtube.com/embed/" + videoCode}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
