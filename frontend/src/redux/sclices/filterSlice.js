import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
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
  },
});

export const { setTitleFilter } = filterSlice.actions; // action creator

export const selectTitleFilter = (state) => state.filter.title; // подписка на изменения в значении title в filter

export default filterSlice.reducer;
