import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../redux/contactOperations';
import { useEffect } from 'react';
import NewContact from '../components/NewContact';

function Contacts() {
  const { items, isLoading } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <NewContact />
      <h2>Contacts</h2>
      <div>{isLoading && 'Request in progress...'}</div>
      <ul>
        {items.map(({ name, phone, id }) => (
          <li key={id}>
            {name}: {phone}
            {'  '}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => onDeleteContact(id)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
