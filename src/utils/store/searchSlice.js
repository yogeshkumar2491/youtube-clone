import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // state[Object.keys(action.payload)[0]] =
      //   action.payload[Object.keys(action.payload)[0]];
      // state = { ...action.payload, ...state };
      state = Object.assign(state, action.payload);
    },
  },
});

export default searchSlice.reducer;

export const { cacheResults } = searchSlice.actions;
