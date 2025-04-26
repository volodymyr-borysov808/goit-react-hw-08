import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { contactFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const id = useId();

  const onFilter = (searchName) => {
    dispatch(contactFilter(searchName));
  };

  return (
    <div className={css.box}>
      <label htmlFor={id}>Find contacts by name</label>

      <input
        className={css.input}
        value={value}
        type="text"
        name="filter"
        id={id}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}
