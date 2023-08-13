import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations';

function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="FormRegister" autoComplete="off">
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
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleFormControlInput1"
            aria-describedby="emailHelp"
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password{' '}
          <input
            type="password"
            name="password"
            required
            aria-describedby="passwordHelpBlock"
            className="form-control"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}

export default Register;
