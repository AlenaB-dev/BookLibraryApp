import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./sclices/bookSlice";
import filterReducer from "./sclices/filterSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
});

export default store;
