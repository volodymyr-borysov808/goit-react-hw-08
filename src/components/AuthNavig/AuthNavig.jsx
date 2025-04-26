import { NavLink } from "react-router";
import css from "./AuthNavig.module.css";

export const AuthNavig = () => {
  return (
    <div className={css.div}>
      <NavLink className="" to="/register">
        Register
      </NavLink>
      <NavLink className="" to="/login">
        Log In
      </NavLink>
    </div>
  );
};
