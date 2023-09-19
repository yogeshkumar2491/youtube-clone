import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import usePagination from "../../hooks/usePagination";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const videos = useSelector((store) => store.video.list);
  usePagination();
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
