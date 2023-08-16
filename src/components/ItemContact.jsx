import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contactOperations';

export default function ItemContact({ id, name, number, onClose }) {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      updateContact({
        contactId: id,
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="ItemContact">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name{' '}
          <input
            type="text"
            name="name"
            defaultValue={name}
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
            defaultValue={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            aria-describedby="emailHelp"
            className="form-control"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Change contact
      </button>
    </form>
  );
}
