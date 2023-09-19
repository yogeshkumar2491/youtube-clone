import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videoSlice from "./videoSlice";
import searchKeywordSlice from "./searchKeywordSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    video: videoSlice,
    searchKeyword: searchKeywordSlice,
  },
});

export default store;
