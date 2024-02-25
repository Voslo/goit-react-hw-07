import { selectContacts, selectFilters } from '../../redux/selectors';
import {Contact} from './Contact';
import { useSelector } from 'react-redux';  

export const ContactList = () => {
  const contacts = useSelector(selectContacts); 
  const filter = useSelector(selectFilters); 

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