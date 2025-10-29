import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid"; // генерация уникального id
import { addBook } from "../../redux/books/actionCreators.js";
import booksData from "../../data/books.json";
import "./BookForm.css";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length); // случайный выбор книги
    const randomBook = booksData[randomIndex];

    // информация о случайно выбранной книге плюс id
    const randomBookWithID = {
      ...randomBook,
      id: uuidv4(),
      isFavorite: false,
    };
    // отправляем действие в redux store
    dispatch(addBook(randomBookWithID));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //исключает перенаправление на новую страницу

    if (title && author) {
      // dispatch action
      const book = {
        title,
        author,
        id: uuidv4(),
        isFavorite: false,
      };
      dispatch(addBook(book));
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
