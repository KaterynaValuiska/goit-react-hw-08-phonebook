import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authOperations';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <div className="FormRegister">
      <h2>Login to personal page</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
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
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
