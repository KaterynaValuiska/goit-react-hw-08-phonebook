import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactOperations';

export default function NewContact() {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const nameContact = evt.target.elements.name.value;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === nameContact.toLowerCase()
      )
    ) {
      alert(`${nameContact} is already in contacts.`);
      return;
    }

    dispatch(
      addContact({
        name: nameContact,
        number: evt.target.elements.number.value,
      })
    );
    evt.target.reset();
  };

  return (
    <div>
      <h2>Create a contact</h2>

      <form onSubmit={handleSubmit} className="NewContact">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name{' '}
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              aria-describedby="emailHelp"
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Number{' '}
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              aria-describedby="emailHelp"
              className="form-control"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
      </form>
    </div>
  );
}
