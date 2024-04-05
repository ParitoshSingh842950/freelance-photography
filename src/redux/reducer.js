import { createSlice } from "@reduxjs/toolkit";

const homeReducer = createSlice({
  name: "home",
  initialState: {
    modal: {
      open: false,
      data: null,
    },
    author: null,
  },

  reducers: {
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
    setModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const { setAuthor, setModal } = homeReducer.actions;
export default homeReducer.reducer;
