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

  const onUpdateContact = ({ id, name, number }) => {
    console.log(id, name, number);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="Contact">
      <NewContact />
      <div>
        <h2>Your contacts</h2>
        <div>{isLoading && 'Request in progress...'}</div>
        <ul className="ContactList">
          {items.map(({ name, number, id }) => (
            <li key={id}>
              {name}: {number}
              {'  '}
              <button
                type="button"
                className="btn btn-primary BtnDelete"
                aria-label="Close"
                onClick={() => onDeleteContact(id)}
              >
                delete
              </button>
              <button
                type="button"
                className="btn btn-primary BtnDelete"
                aria-label="Close"
                onClick={() => onUpdateContact({ id, name, number })}
              >
                update
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
