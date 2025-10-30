import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
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
    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite; // можно сделать так, тк значение boolean
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} = filterSlice.actions; // action creator

export const selectTitleFilter = (state) => state.filter.title; // подписка на изменения в значении title в filter
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;

export default filterSlice.reducer;
