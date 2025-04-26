import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(register(value));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <label className="">
          Username
          <Field type="text" name="name" className={css.input} />
        </label>

        <label className="">
          Email
          <Field type="email" name="email" className={css.input} />
        </label>

        <label className="">
          Password
          <Field type="password" name="password" className={css.input} />
        </label>

        <button type="submit" className={css.button}>
          Registr
        </button>
      </Form>
    </Formik>
  );
}
