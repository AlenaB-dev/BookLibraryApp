import * as actionTypes from "./actionTypes";

const initialState = []; // массив книг

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload]; // добавление и вовзрат нового массива книг
    case actionTypes.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload); // возвращаем новый массив, исключив удаленную книгу
    case actionTypes.TOGGLE_FAVORITE:
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      ); //выбираем или удаляем фэйворит у книги
    default:
      return state;
  }
};

export default booksReducer;
