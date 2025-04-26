import { IoPerson, IoCallSharp } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.main_container}>
      <div>
        <div className={css.container}>
          <IoPerson className={css.svg} size={15} />
          <h2 className={css.title}>{contact.name}</h2>
        </div>

        <div className={css.container}>
          <IoCallSharp className={css.svg} size={15} />
          <p className={css.number}>{contact.number}</p>
        </div>
      </div>

      <button onClick={() => onDelete(contact.id)} className={css.button}>
        Delete
      </button>
    </div>
  );
}
