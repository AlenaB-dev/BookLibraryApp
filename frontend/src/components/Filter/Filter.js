import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
import {
  setTitleFilter,
  selectTitleFilter,
} from "../../redux/sclices/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter); // вызов функции подписки на изменения в значении title в filter

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value)); // передаем изменения в redux store
  };

  return (
    <div className="app-block filter">
      <div className="filter-group">
        <input
          type="text"
          value={titleFilter}
          placeholder="Filter by title..."
          onChange={handleTitleFilterChange}
        />
      </div>
    </div>
  );
};

export default Filter;
