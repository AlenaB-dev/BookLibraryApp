import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
};

const filterSlice = createSlice({
  initialState,
  name: "filter", // название reducer
  reducers: {
    setTitleFilter: (state, action) => {
      // на основании текущего состояни и действия ->
      state.title = action.payload; // -> формируется новое состояние с помощью библиотеки immer

      // traditional way of return new state
      // return {...state, title: action.payload}
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const { setTitleFilter, setAuthorFilter, resetFilters } =
  filterSlice.actions; // action creator

export const selectTitleFilter = (state) => state.filter.title; // подписка на изменения в значении title в filter
export const selectAuthorFilter = (state) => state.filter.author;

export default filterSlice.reducer;
