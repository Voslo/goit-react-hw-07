import {Contact} from './Contact';
import { useSelector } from 'react-redux';  

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts); 
  const filter = useSelector(state => state.filters); 

  const visibleContacts = contacts.filter(contact => {
    const normalizedFilter = filter.toLowerCase();
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  return (
    <ul>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};