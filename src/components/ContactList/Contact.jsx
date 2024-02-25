import { FaUserAlt, FaPhone } from 'react-icons/fa';
import css from './Contact.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  
  const deleteContactOld = (contactId) => {
    dispatch(deleteContact(contactId))
  }
  return (
    <li className={css.contact}>
      <div className={css.nameContact}>
        <FaUserAlt />{contact.name}
      </div>
      <div className={css.telContact}><FaPhone/>{contact.number}</div>
      <button onClick={() => dispatch(deleteContactOld(contact.id))}>Delete</button>
    </li>
  );
};