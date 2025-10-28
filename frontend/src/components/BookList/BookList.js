import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../redux/books/actionCreators";
import "./BookList.css";

const BookList = () => {
  const books = useSelector((state) => state.books); // state.books - название reducer и оно должно совпадавть с названием  books в store.js
  const dispatch = useDispatch();

  //функция удаления книги
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? ( // если books пустой массив
        <p>No books available</p> // то будет показана эта фраза
      ) : (
        // если books не пустой массив, то будет показана инф о книге
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
