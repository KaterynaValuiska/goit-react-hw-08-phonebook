import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../redux/contactOperations';
import { useEffect, useState } from 'react';
import NewContact from '../components/NewContact';
import { Modal } from 'components/Modal';
import ItemContact from 'components/ItemContact';
import Loader from 'components/Loader';

function Contacts() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');
  const { items, isLoading } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const onUpdateContact = ({ id, name, number }) => {
    toggleModal();
    setName(name);
    setNumber(number);
    setId(id);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="Contact">
      <NewContact />
      <div>
        <h2>Your contacts</h2>

        <div>{isLoading && <Loader />}</div>
        {Array.isArray(items) && items.length <= 0 && (
          <p> There are no contacts. You can add your contacts. </p>
        )}
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
      {showModal && (
        <Modal onClose={toggleModal}>
          <ItemContact
            id={id}
            name={name}
            number={number}
            onClose={toggleModal}
          />
        </Modal>
      )}
    </div>
  );
}

export default Contacts;
