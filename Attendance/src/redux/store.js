import { configureStore } from "@reduxjs/toolkit";
import rollReducer from "./rollSlice";
const store = configureStore({
  reducer: {
    roll: rollReducer,
  },
});
export default store;
