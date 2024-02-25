import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from './components/ContactList/ContactList';
import {ContactForm} from './components/Form/ContactForm';
import { SearchBox } from './components/SearchBox/SearchBox';
import { fetchContacts } from './redux/operations';
import { selectError, selectLoading } from './redux/selectors';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading)
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}

export default App;
