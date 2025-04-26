import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import {
  selectContact,
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function ContactPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>ContactPage</h2>

      <ContactForm />

      <SearchBox />

      {isLoading && <p>Loading...</p>}

      {isError && <h1>Not Found</h1>}

      {contacts.length > 0 ? <ContactList /> : <h3>No contacts</h3>}
    </>
  );
}
