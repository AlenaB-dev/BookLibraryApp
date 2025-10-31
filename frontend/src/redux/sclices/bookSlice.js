import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createBookWithID from "../../utils/createBookWithID.js";

const initialState = [];

export const fetchBook = createAsyncThunk("book/fetchBook", async () => {
  const res = await axios.get("http://localhost:5000/random-book");
  console.log(res.data);
  return res.data;
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithID(action.payload, "API"));
      }
    });
  },
});

// action types
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

// создали селектор
export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
