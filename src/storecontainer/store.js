import { configureStore } from "@reduxjs/toolkit";
import Authslice from "./Authslice";
const Store = configureStore({
  reducer: {
    auth: Authslice.reducer,
  },
});
export default Store;
