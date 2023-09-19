import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/store/videoSlice";
const usePagination = () => {
  const { list: videos, nextPageToken } = useSelector((store) => store.video);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageToken]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    )
      setTimeout(() => getVideos(), 500);
  };

  const getVideos = async () => {
    if (nextPageToken === undefined) return;
    const data = await fetch(
      YOUTUBE_VIDEOS_API + "&pageToken=" + nextPageToken
    );
    const json = await data.json();
    var ids = new Set(videos.map((d) => d.id));
    var merged = [...videos, ...json.items.filter((d) => !ids.has(d.id))];
    dispatch(addVideos({ videos: merged, nextPageToken: json.nextPageToken }));
  };
};

export default usePagination;
