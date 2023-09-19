import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    list: [],
    nextPageToken: "",
  },
  reducers: {
    addnextPageToken: (state, action) => {
      state.nextPageToken = action.nextPageToken;
    },
    addVideos: (state, action) => {
      const { nextPageToken, videos } = action.payload;
      state.list = videos;
      state.nextPageToken = nextPageToken;
    },
  },
});

export const { addVideos, addnextPageToken } = videoSlice.actions;
export default videoSlice.reducer;
