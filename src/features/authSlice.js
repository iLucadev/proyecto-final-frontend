import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.categories = action.payload;
    },
    changeIsAuth: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addUser, changeIsAuth } = slice.actions;

export default slice.reducer;
