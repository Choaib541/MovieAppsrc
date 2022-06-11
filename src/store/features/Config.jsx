import { createSlice } from "@reduxjs/toolkit";
import config from "../../config.json";

export const Config = createSlice({
  name: "Config",
  initialState: { value: config["config"] },
  reducers: {
    setConfig: (state, action) => {
      state.value = action.payload();
    },
  },
});

export const { setConfig } = Config.actions;
export default Config.reducer;
