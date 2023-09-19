const GOOGLE_API_KEY = "AIzaSyB9Z7hYhBgJvdrLk44f_gAbhO90J9KHQII";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_KEYWORD_VIDEO =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const LIVE_CHAT_COUNT = 20;
