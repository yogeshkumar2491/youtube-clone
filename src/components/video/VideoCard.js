import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const {
    snippet: { title, thumbnails, channelTitle },
    statistics,
  } = info;

  return (
    <>
      <div
        className={`p-2  ${
          isMenuOpen ? "m-2 w-72" : "m-4 w-[440px]"
        } shadow-lg`}
      >
        <img
          alt="thumbnail"
          className="rounded-lg w-full"
          src={thumbnails.medium.url}
        ></img>
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics?.viewCount} views</li>
        </ul>
      </div>
    </>
  );
};

export default VideoCard;
