import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../enum";

export const postContactThunk = createAsyncThunk(
  "postContactThunk",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(baseUrl + "/api/contact", values);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
