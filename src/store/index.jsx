import { configureStore } from "@reduxjs/toolkit";
import Config from "./features/Config";
import Movies from "./features/Movies";
const store = configureStore({
  reducer: { Config: Config, Movies: Movies },
});

export default store;
