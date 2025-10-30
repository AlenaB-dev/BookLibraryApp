import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  setAuthorFilter,
  selectAuthorFilter,
} from "../../redux/sclices/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter); // вызов функции подписки на изменения в значении title в filter
  const authorFilter = useSelector(selectAuthorFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value)); // передаем изменения title в redux store
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
          />
        </div>
        <div>
          <input
            type="text"
            value={authorFilter}
            placeholder="Filter by author..."
            onChange={handleAuthorFilterChange}
          />
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
