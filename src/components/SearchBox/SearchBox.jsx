import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleSearch = (name) => {
    dispatch(changeFilter(name));
  };

  return (
    <div className={css.box}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
