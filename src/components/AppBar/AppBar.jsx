import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { AuthNavig } from "../AuthNavig/AuthNavig";
import Nav from "../Nav/Nav";
import { UserMenu } from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.head}>
      <Nav />

      {isLoggedIn ? <UserMenu /> : <AuthNavig />}
    </header>
  );
}
