import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_KEYWORD_VIDEO } from "../../utils/constants";
import VideoCard from "../video/VideoCard";
import { Link } from "react-router-dom";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [videos, setVideos] = useState([]);

  const handleSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_KEYWORD_VIDEO + searchQuery);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    handleSearchResults();
  }, [searchQuery]);

  return (
    <div className="flex flex-wrap">
      {videos.map(
        (video) =>
          video.id.kind === "youtube#video" && (
            <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
              <VideoCard info={video} />
            </Link>
          )
      )}
    </div>
  );
};

export default SearchResult;
