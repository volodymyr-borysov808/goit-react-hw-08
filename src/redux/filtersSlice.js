import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;

const slice = createSlice({
  name: "filter",

  initialState: { name: "" },

  reducers: {
    changefilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changefilter } = slice.actions;

export default slice.reducer;
