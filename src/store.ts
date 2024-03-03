import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./slices/imageSlice";
import historyReducer from "./slices/historySlice";

const store = configureStore({
  reducer: {
    image: imageReducer,
    history: historyReducer,
  },
});

export default store;
