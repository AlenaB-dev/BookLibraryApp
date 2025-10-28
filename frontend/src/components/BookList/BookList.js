import { useSelector } from "react-redux";
import "./BookList.css";

const BookList = () => {
  const books = useSelector((state) => state.books); // state.books - название reducer и оно должно совпадавть с названием  books в store.js

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? ( // если books пустой массив
        <p>No books available</p> // то будет показана эта фраза
      ) : (
        // если books не пустой массив, то будет показана инф о книге
        <ul>
          {books.map((books, i) => (
            <li key={i}>
              <div className="book-info">
                {++i}. {books.title} by <strong>{books.author}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
