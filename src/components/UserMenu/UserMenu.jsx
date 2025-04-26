import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handlLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.box}>
      <p className={css.name}>Welcom, {user.name}!</p>

      <button className={css.btn} type="button" onClick={handlLogOut}>
        Logout
      </button>
    </div>
  );
};
