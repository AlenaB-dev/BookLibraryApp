import * as actionTypes from "./actionTypes";

const initialState = []; // массив книг

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload]; // добавление и вовзрат нового массива книг
    default:
      return state;
  }
};

export default booksReducer;
