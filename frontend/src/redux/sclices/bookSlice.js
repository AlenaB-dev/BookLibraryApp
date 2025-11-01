import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createBookWithID from "../../utils/createBookWithID.js";
import { setError } from "./errorSlice.js";

const initialState = {
  books: [],
  isLoadingViaAPI: false,
};

export const fetchBook = createAsyncThunk(
  "book/fetchBook",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload); // добавление и вовзрат нового массива книг c исп библиотеки immer
    },
    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    },
    toggleFavorite: (state, action) => {
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      }); // исп библиотеки immer
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.isLoadingViaAPI = true;
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.isLoadingViaAPI = false;
        state.books.push(createBookWithID(action.payload, "API"));
      })
      .addCase(fetchBook.rejected, (state) => {
        state.isLoadingViaAPI = false;
      });
  },
});

// action types
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

// создали селектор
export const selectBooks = (state) => state.books.books; // возврат массива книг

export const selectIsLoadingViaAPI = (state) => state.books.isLoadingViaAPI; // возврат значения isLoadingViaAPI

export default booksSlice.reducer;
