import { createSlice } from "@reduxjs/toolkit";

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

// создали селектор
export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
