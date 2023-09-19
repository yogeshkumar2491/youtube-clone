import { createSlice } from "@reduxjs/toolkit";

const searchKeywordSlice = createSlice({
  name: "searchQuery",
  initialState: { searchKeyword: "" },
  reducers: {
    updateSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
    clearSearchKeyword: (state) => {
      state.searchKeyword = "";
    },
  },
});
export const { updateSearchKeyword, clearSearchKeyword } = searchKeywordSlice;
export default searchKeywordSlice.reducer;
