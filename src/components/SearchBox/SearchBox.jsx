import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changefilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(changefilter(e.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
}
