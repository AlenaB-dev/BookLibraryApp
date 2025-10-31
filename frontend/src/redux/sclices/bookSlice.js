import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import createBookWithID from "../../utils/createBookWithID.js";

const initialState = [];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload); // добавление и вовзрат нового массива книг c исп библиотеки immer
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      }); // исп библиотеки immer

      //   return state.map((book) =>
      //     book.id === action.payload
      //       ? { ...book, isFavorite: !book.isFavorite }
      //       : book
      //   ); //выбираем или удаляем фэйворит у книги
    },
  },
});

// action types
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const thunkFunction = async (dispatch, getState) => {
  try {
    const res = await axios.get("http://localhost:4000/random-book");
    if (res?.data?.title && res?.data?.author) {
      dispatch(addBook(createBookWithID(res.data, "API")));
    }
  } catch (error) {
    console.log("Error fetching random book", error);
  }
};

// создали селектор
export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
