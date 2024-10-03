import { createSlice } from "@reduxjs/toolkit";
import { postContactThunk } from "./thunk";

const initialState = {
  loading: false,
  message: "",
  error: null,
};

const slice = createSlice({
  name: "contact",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postContactThunk.pending, (state) => {
      state.loading = true;
      state.message = "";
      state.error = null;
    });
    builder.addCase(postContactThunk.fulfilled, (state) => {
      state.loading = false;
      state.message = "";
      state.error = null;
    });
    builder.addCase(postContactThunk.rejected, (state, action) => {
      state.loading = false;
      state.message = "";
      state.error = action.error.message;
    });
  },
});

export default slice.reducer