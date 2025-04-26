import { Route, Routes } from "react-router";
import HomePage from "../../pages/HomePage/HomePage";
import AppBar from "../AppBar/AppBar";
import RegisterPage from "../../pages/RegistrPage/RegistrPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactPage from "../../pages/ContactsPage/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoutes/RestrictedRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresh ? (
    <b>Getting user data please wait...</b>
  ) : (
    <Suspense fallback={null}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactPage />} redirectTo="/login" />
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
