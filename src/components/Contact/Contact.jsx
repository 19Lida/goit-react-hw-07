import { useDispatch } from "react-redux";
import { fetchDeleteContacts } from "../../redux/contactsOps";
import IconPerson from "../../assets/user.svg";
import IconPhone from "../../assets/phone.svg";
import css from "./Contact.module.css";
import Icon from "../Icon/Icon";

const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDeleteContact = (contactId) => {
    dispatch(fetchDeleteContacts(contactId));
  };
  const iconSize = 25;

  return (
    <li className={css.contacts}>
      <div className={css.contactItam}>
        <div className={css.contactRow}>
          <Icon icon={IconPerson} size={iconSize} alt="Person" />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.contactRow}>
          <Icon icon={IconPhone} size={iconSize} alt="Phone" />
          <p className={css.number}>{number}</p>
        </div>
      </div>

      <button className={css.button} onClick={() => handleDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
